import { computed, defineComponent, PropType, ref } from "vue";
import { Nullable } from "../../types/utils";

export type ButtonType = 'primary' | 'secondary' | 'link' | 'danger';
export type ButtonSize = 'icon' | 'small' | 'medium' | 'large';

type ButtonState = 'left' | 'middle' | 'right';

export const AwesomeButton = defineComponent({
  name: 'AwesomeButton',
  emits: ['mousedown', 'mouseup'],
  props: {
    disabled: Boolean,
    disableMoveEvents: Boolean,
    hidden: Boolean,
    rootElement: {
      type: String,
      required: false,
      default: 'aws-btn',
    },
    size: {
      type: String as PropType<Nullable<ButtonSize>>,
      required: false,
      default: null,
    },
    type: {
      type: String as PropType<ButtonType>,
      required: false,
      default: 'primary'
    },
  },
  setup(props, { slots, emit }) {
    const pressPosition = ref<Nullable<string>>(null);
    const state = ref<Nullable<ButtonState>>(null);
    const button = ref<Nullable<HTMLButtonElement>>(null);
    const rootClasses = computed(() => [    
      props.rootElement,
      `${props.rootElement}--${props.type}`,
      {
        [`${props.rootElement}--disabled`]: props.disabled,
        [`${props.rootElement}--hidden`]: props.hidden,
        [`${props.rootElement}--${props.size}`]: props.size,
        [`${props.rootElement}--${state.value}`]: state.value,
        [`${pressPosition.value}`]: pressPosition.value,
      }
    ]);

    const clearPress = () => {
      state.value = null;
      pressPosition.value = null;
    }

    const pressIn = () => {
      if (props.disabled) {
        return;
      }
      pressPosition.value = `${props.rootElement}--active`;
    };

    const moveEvents = computed(() => ({
      onMouseleave: () => {
        clearPress()
      },

      onMousedown: (event: MouseEvent) => {
        emit('mousedown', event)
        if (event.button !== 0) {
          return;
        }
        pressIn();
      },

      onMouseup: (event: MouseEvent) => {
        emit('mouseup', event)
        if (props.disabled) {
          event.preventDefault();
          return;
        }
        clearPress()
      },

      onMousemove: (event: MouseEvent) => {
        if (props.disabled === true || props.disableMoveEvents) {
          return;
        }
        const buttonElement = button.value;
        if (buttonElement) {
          const { left } = buttonElement.getBoundingClientRect();
          const width = buttonElement.offsetWidth;
          state.value =
            event.pageX < left + width * 0.3
              ? 'left'
              : event.pageX > left + width * 0.65
              ? 'right'
              : 'middle';
          }
      },

      onMouseenter: () => {
        if (props.disableMoveEvents) {
          state.value = 'middle';
        }
      }
    }))

    return () => (
      <button ref={button} class={rootClasses.value} {...moveEvents.value}>
        <span class={`${props.rootElement}__wrapper`}>
          <span class={`${props.rootElement}__content`}>
            { slots.default?.() }
          </span>
        </span>
      </button>
    )
  }
});

