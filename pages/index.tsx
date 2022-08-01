import type { NextPage } from 'next';
import { TaskList } from '../components/task-list';
import { TaskListStatus } from '../components/task-list/types';
import { GridRow, GridCol, Main } from 'govuk-react';
import { SummaryList } from '../components/summary-list';

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

const rows = [
  {
    key: 'Waste code',
    value:
      'GC020: Electronic scrap (e.g. printed circuit boards, electronic components, wire, etc.)',
  },
  {
    key: 'EWC code',
    value: 'Not provided',
  },
  { key: 'National code', value: 'Not provided' },
  {
    key: 'Waste Description',
    value: 'Electronics including; wires and circuit boards',
  },
  {
    key: 'Waste quantity',
    value: ['Estimate', '22 tonnes', ['something', 'else'], ['test', 'test2']],
    action: { title: 'Update', link: '/' },
  },
  {
    key: 'Collection date',
    value: 'Estimate, 14 July 2022',
    action: { title: 'Update', link: '/' },
  },
];

const Home: NextPage = () => {
  return (
    <Main>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <TaskList groups={groups} />
          <SummaryList rows={rows} />
        </GridCol>
      </GridRow>
    </Main>
  );
};

export default Home;
