import { computed, defineComponent, PropType, ref, defineEmits } from "vue";
import { Nullable } from "../../types/utils";

export type ButtonType = 'primary' | 'secondary' | 'link' | 'danger';
export type ButtonSize = 'icon' | 'small' | 'medium' | 'large';

export const AwesomeButton = defineComponent({
  name: 'AwesomeButton',
  emits: ['mousedown', 'mouseup'],
  props: {
    disabled: Boolean,
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
    const rootClasses = computed(() => [    
      props.rootElement,
      `${props.rootElement}--${props.type}`,
      {
        [`${props.rootElement}--disabled`]: props.disabled,
        [`${props.rootElement}--hidden`]: props.hidden,
        [`${props.rootElement}--${props.size}`]: props.size,
        [`${pressPosition.value}`]: pressPosition.value,
      }
    ]);

    const clearPress = () => {
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
      }
    }))

    return () => (
      <button class={rootClasses.value} {...moveEvents.value}>
        <span class={`${props.rootElement}__wrapper`}>
          <span class={`${props.rootElement}__content`}>
            { slots.default?.() }
          </span>
        </span>
      </button>
    )
  }
});
