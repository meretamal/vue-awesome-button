import { computed, defineComponent, PropType } from "vue";
import { Nullable } from "../../types/utils";

export type ButtonType = 'primary' | 'secondary' | 'link' | 'danger';
export type ButtonSize = 'icon' | 'small' | 'medium' | 'large';

export const AwesomeButton = defineComponent({
  name: 'AwesomeButton',
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
  setup(props, { slots }) {
    const rootClasses = computed(() => [    
      props.rootElement,
      `${props.rootElement}--${props.type}`,
      {
        [`${props.rootElement}--disabled`]: props.disabled,
        [`${props.rootElement}--hidden`]: props.hidden,
        [`${props.rootElement}--${props.size}`]: props.size,
      }
    ]) 
    return () => (
      <button class={rootClasses.value}>
        <span class={`${props.rootElement}__wrapper`}>
          <span class={`${props.rootElement}__content`}>
            { slots.default?.() }
          </span>
        </span>
      </button>
    )
  }
});
