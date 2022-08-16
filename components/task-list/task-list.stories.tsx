import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TaskList } from '.';
import { TaskListStatus } from './types';

const defaultData = [
  {
    title: 'Check before you start',
    sections: [
      {
        title: 'Check eligibility',
        link: '/',
        status: {
          label: TaskListStatus.COMPLETED,
          value: TaskListStatus.COMPLETED,
        },
      },
      {
        title: 'Read declaration',
        link: '/',
        status: {
          label: TaskListStatus.COMPLETED,
          value: TaskListStatus.COMPLETED,
        },
      },
    ],
  },
  {
    title: 'Prepare application',
    sections: [
      {
        title: 'Company information',
        link: '/',
        status: {
          label: TaskListStatus.COMPLETED,
          value: TaskListStatus.COMPLETED,
        },
      },
      {
        title: 'Your contact details',
        link: '/',
        status: {
          label: TaskListStatus.IN_PROGRESS,
          value: TaskListStatus.IN_PROGRESS,
        },
      },
      {
        title: 'List convictions',
        link: '/',
        status: {
          label: TaskListStatus.NOT_STARTED,
          value: TaskListStatus.NOT_STARTED,
        },
      },
      {
        title: 'Provide financial evidence',
        link: '',
        status: {
          label: TaskListStatus.CANNOT_START_YET,
          value: TaskListStatus.CANNOT_START_YET,
        },
      },
      {
        title: 'Give medical information',
        link: '',
        status: {
          label: TaskListStatus.CANNOT_START_YET,
          value: TaskListStatus.CANNOT_START_YET,
        },
      },
    ],
  },
  {
    title: 'Apply',
    sections: [
      {
        title: 'Submit and pay',
        link: '/',
        status: {
          label: TaskListStatus.CANNOT_START_YET,
          value: TaskListStatus.CANNOT_START_YET,
        },
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
