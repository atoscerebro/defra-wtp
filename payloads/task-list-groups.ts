import { TaskListStatus } from '../components/task-list/types';

export const taskListGroups = [
  {
    title: 'About the waste',
    sections: [
      {
        title: 'Waste codes and descriptions',
        link: 'submit-an-export/about-the-waste/waste-codes-descriptions',
        status: TaskListStatus.COMPLETED,
      },
      {
        title: 'Quantity of waste',
        link: 'quantity-of-waste',
        status: TaskListStatus.COMPLETED,
      },
      {
        title: 'Collection date',
        link: 'collection-date',
        status: TaskListStatus.COMPLETED,
      },
    ],
  },
  {
    title: 'Exporter and importer',
    sections: [
      {
        title: 'Exporter details',
        link: '/submit-an-export/exporter-and-importer/exporter-details/exporter-address',
        status: TaskListStatus.IN_PROGRESS,
      },
      {
        title: 'Importer details',
        link: '/submit-an-export/exporter-and-importer/importer-details/importer-address',
        status: TaskListStatus.IN_PROGRESS,
      },
    ],
  },
  {
    title: 'Journey of waste',
    sections: [
      {
        title: 'Waste carriers',
        link: 'submit-an-export/journey-of-waste/waste-carriers/waste-carrier',
        status: TaskListStatus.NOT_STARTED,
      },
      {
        title: 'Waste collection details',
        link: '',
        status: TaskListStatus.NOT_STARTED,
      },
      {
        title: 'Location waste leaves the UK',
        link: '',
        status: TaskListStatus.NOT_STARTED,
      },
      {
        title: 'Countries waste will travel through',
        link: '',
        status: TaskListStatus.NOT_STARTED,
      },
    ],
  },
  {
    title: 'Treatment of waste',
    sections: [
      {
        title: 'Recovery facility or laboratory',
        link: '',
        status: TaskListStatus.CANNOT_START_YET,
      },
    ],
  },
];
