import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SummaryList } from '.';

const defaultData = [
  {
    key: 'Name',
    value: 'Sarah Phillips',
  },
  {
    key: 'Date of birth',
    value: '5 January 1978',
  },
  { key: 'Address', value: [['72 Guild Street', 'London', 'SE23 6FH']] },
  {
    key: 'Contact details',
    value: ['07700 900457', 'sarah.phillips@example.com'],
  },
];

export default {
  title: 'Lists/Summary List',
  component: SummaryList,
} as ComponentMeta<typeof SummaryList>;

const Template: ComponentStory<typeof SummaryList> = (args) => (
  <SummaryList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  border: true,
  rows: defaultData,
};

export const Actions = Template.bind({});
Actions.args = {
  rows: defaultData.map((row) => ({
    ...row,
    action: { title: 'Change', link: '' },
  })),
};
