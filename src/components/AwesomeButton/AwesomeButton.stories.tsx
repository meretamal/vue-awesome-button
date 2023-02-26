import { Meta, StoryFn } from '@storybook/vue3';
import { AwesomeButton } from './AwesomeButton';

import '../../styles/main.scss';

export default {
  title: 'AwesomeButton',
  component: AwesomeButton,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: "Disables the button's actions",
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disableMoveEvents: {
      control: { type: 'boolean' },
      description:
        'If set to true, when hovering the button, it will only be pressed from the middle',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    hidden: {
      control: { type: 'boolean' },
      description: 'Changes the opacity of the button',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    size: {
      control: { type: 'select' },
      options: [null, 'small', 'medium', 'large'],
      description: 'Changes the size of the button',
      defaultValue: null,
      table: {
        type: { summary: 'null | "small" | "medium" | "large"' },
        defaultValue: { summary: 'null' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'link', 'danger'],
      defaultValue: 'primary',
      description: "Sets the button's variant",
      table: {
        type: { summary: 'primary | secondary | link | danger' },
        defaultValue: { summary: 'primary' },
      },
    },
  },
} as Meta<typeof AwesomeButton>;

export const Template: StoryFn<typeof AwesomeButton> = (args) => ({
  components: { AwesomeButton },
  setup() {
    return () => <AwesomeButton {...args}>Button</AwesomeButton>;
  },
});
