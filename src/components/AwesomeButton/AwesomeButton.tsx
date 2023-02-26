import { computed, defineComponent } from "vue";

export const AwesomeButton = defineComponent({
  name: 'AwesomeButton',
  props: {
    rootElement: {
      type: String,
      required: false,
      default: 'aws-btn',
    },
    type: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
  setup(props, { slots }) {
    const rootClasses = computed(() => [    
      props.rootElement,
      `${props.rootElement}--${props.type}`,
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
