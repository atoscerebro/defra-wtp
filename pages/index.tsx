import type { NextPage } from 'next';
import { TaskList } from '../components/task-list';
import { TaskListStatus } from '../components/task-list/types';
import { GridRow, GridCol, Main } from 'govuk-react';

const groups = [
  {
    title: 'About the waste',
    sections: [
      {
        title: 'Waste codes and descriptions',
        link: '',
        status: TaskListStatus.COMPLETED,
      },
      {
        title: 'Quantity of waste',
        link: '',
        status: TaskListStatus.COMPLETED,
      },
      {
        title: 'Collection date',
        link: '',
        status: TaskListStatus.COMPLETED,
      },
    ],
  },
  {
    title: 'Exporter and importer',
    sections: [
      {
        title: 'Exporter details',
        link: '',
        status: TaskListStatus.IN_PROGRESS,
      },
      {
        title: 'Importer details',
        link: '',
        status: TaskListStatus.IN_PROGRESS,
      },
    ],
  },
  {
    title: 'Journey of waste',
    sections: [
      {
        title: 'Waste carriers',
        link: '',
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

const Home: NextPage = () => {
  return (
    <Main>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <TaskList groups={groups} />
        </GridCol>
      </GridRow>
    </Main>
  );
};

export default Home;
