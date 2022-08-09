import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputField, Paragraph } from 'govuk-react';
import { RadiosConditional } from '.';

export default {
  title: 'Inputs/Radios Conditional',
  component: RadiosConditional,
} as ComponentMeta<typeof RadiosConditional>;

const Template: ComponentStory<typeof RadiosConditional> = (args) => (
  <RadiosConditional {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  children: 'Email',
  renderConditional: () => <InputField>Email address</InputField>,
};
