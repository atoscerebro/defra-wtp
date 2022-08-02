import type { NextPage } from 'next';
import { TaskList } from '../components/task-list';
import { TaskListStatus } from '../components/task-list/types';
import { GridRow, GridCol, Main } from 'govuk-react';
import { SummaryList } from '../components/summary-list';
import { SortableTable } from '../components/sortable-table';
import { IRow } from '../components/sortable-table/types';

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

const headers = [
  { text: 'Your reference number', type: 'none' as const, formatType: 'numeric' as const
},
  {
    text: 'Collection date',
    sortable: true,
    type: 'none' as const,
    formatType: 'numeric' as const
  },
  { text: 'Waste code', type: 'none' as const, formatType: 'text' as const },
  { text: 'Link', type: 'none' as const },
  { text: 'Button', type: 'none' as const },
];

const tableRows = [
  [
    { text: '01546', type: 'data' as const, formatType: 'numeric' as const },
    { text: '5 July 2022', type: 'data' as const, sortValue: '220705' },
    {
      text: 'B1010: Metal and metal-alloy wastes in metallic, non-dispersible form',
      type: 'data' as const,
    },
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Button', action: 'button' as const, type: 'action' as const },
  ],
  [
    { text: '01546', type: 'data' as const },
    { text: '20 July 2022', type: 'data' as const, sortValue: '220720' },
    {
      text: 'GC050: Spent fluid catalytic cracking (FCC) catalysts (e.g. aluminium oxide, zeolites)',
      type: 'data' as const,
    },
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Button', action: 'button' as const, type: 'action' as const },
  ],
  [
    { text: '01546', type: 'data' as const },
    { text: '16 July 2022', type: 'data' as const, sortValue: '220716' },
    {
      text: 'B1010: Metal and metal-alloy wastes in metallic, non-dispersible form',
      type: 'data' as const,
    },
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Button', action: 'button' as const, type: 'action' as const },
  ],
  [
    { text: '01546', type: 'data' as const },
    { text: '22 July 2022', type: 'data' as const, sortValue: '220722' },
    {
      text: 'B1010: Metal and metal-alloy wastes in metallic, non-dispersible form',
      type: 'data' as const,
    },
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Button', action: 'button' as const, type: 'action' as const },
  ],
  [
    { text: '01546', type: 'data' as const },
    { text: '18 July 2022', type: 'data' as const, sortValue: '220718' },
    {
      text: 'B1010: Metal and metal-alloy wastes in metallic, non-dispersible form',
      type: 'data' as const,
    },
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Button', action: 'button' as const, type: 'action' as const },
  ],
];

const Home: NextPage = () => {
  return (
    <Main>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <TaskList groups={groups} />
          <SummaryList rows={rows} />
          <SortableTable headers={headers} rows={tableRows}>
            {({ actionCell }) => (
              <>
                {actionCell.action === 'link' && <a>{actionCell.text}</a>}
                {actionCell.action === 'button' && (
                  <button>{actionCell.text}</button>
                )}
              </>
            )}
          </SortableTable>
        </GridCol>
      </GridRow>
    </Main>
  );
};

export default Home;
