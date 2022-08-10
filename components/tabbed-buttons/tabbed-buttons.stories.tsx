import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TabbedButtons } from '.';

const data = ['Option 1', 'Option 2', 'Option 3'];

export default {
  title: 'Inputs/Tabbed Buttons',
  component: TabbedButtons,
} as ComponentMeta<typeof TabbedButtons>;

const Template: ComponentStory<typeof TabbedButtons> = (args) => (
  <TabbedButtons {...args} />
);

export const Default = Template.bind({});
Default.args = {
  current: data[0],
  keys: data,
};
