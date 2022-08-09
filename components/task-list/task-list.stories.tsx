import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TaskList } from '.';
import { TaskListStatus } from './types';

const defaultData = [
  {
    title: 'Check before you start',
    sections: [
      {
        title: 'Check elligibility',
        link: '/',
        status: TaskListStatus.COMPLETED,
      },
      {
        title: 'Read declaration',
        link: '/',
        status: TaskListStatus.COMPLETED,
      },
    ],
  },
  {
    title: 'Prepare application',
    sections: [
      {
        title: 'Company information',
        link: '/',
        status: TaskListStatus.COMPLETED,
      },
      {
        title: 'Your contact details',
        link: '/',
        status: TaskListStatus.IN_PROGRESS,
      },
      {
        title: 'List convictions',
        link: '/',
        status: TaskListStatus.NOT_STARTED,
      },
      {
        title: 'Provide financial evidence',
        link: '',
        status: TaskListStatus.CANNOT_START_YET,
      },
      {
        title: 'Give medical information',
        link: '',
        status: TaskListStatus.CANNOT_START_YET,
      },
    ],
  },
  {
    title: 'Apply',
    sections: [
      {
        title: 'Submit and pay',
        link: '/',
        status: TaskListStatus.CANNOT_START_YET,
      },
    ],
  },
];

export default {
  title: 'Lists/Task List',
  component: TaskList,
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  groups: defaultData,
};
