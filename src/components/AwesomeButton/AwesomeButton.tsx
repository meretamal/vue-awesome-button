import { defineComponent } from "vue";

export const AwesomeButton = defineComponent({
  name: 'AwesomeButton',
  setup(_props, { slots }) {
    return () => <button>{ slots.default?.() }</button>
  }
})