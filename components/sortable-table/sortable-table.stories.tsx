import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'govuk-react';
import { SortableTable } from '.';
import { Link } from '../link';

const defaultData = {
  headers: [
    {
      text: 'Name',
      sortable: true,
      type: 'ascending' as const,
    },
    {
      text: 'Elevation',
      sortable: true,
      type: 'none' as const,
      dataType: 'numeric' as const,
    },
    {
      text: 'Continent',
      sortable: true,
      type: 'none' as const,
    },
    {
      text: 'First Summit',
      sortable: true,
      type: 'none' as const,
      dataType: 'numeric' as const,
      formatType: 'numeric' as const,
    },
  ],
  rows: [
    [
      { text: 'Aconcagua', type: 'data' as const },
      { text: '6,961 meters', type: 'data' as const, sortValue: '6961' },
      { text: 'South America', type: 'data' as const },
      { text: '1897', type: 'data' as const, formatType: 'numeric' as const },
    ],
    [
      { text: 'Denali', type: 'data' as const },
      { text: '6,194 meters', type: 'data' as const, sortValue: '6194' },
      { text: 'North America', type: 'data' as const },
      { text: '1913', type: 'data' as const, formatType: 'numeric' as const },
    ],
    [
      { text: 'Elbrus', type: 'data' as const },
      { text: '5,642 meters', type: 'data' as const, sortValue: '5642' },
      { text: 'Europe', type: 'data' as const },
      { text: '1874', type: 'data' as const, formatType: 'numeric' as const },
    ],
  ],
};

export default {
  title: 'Tables/Sortable Table',
  component: SortableTable,
} as ComponentMeta<typeof SortableTable>;

const Template: ComponentStory<typeof SortableTable> = (args) => (
  <SortableTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headers: defaultData.headers,
  rows: defaultData.rows,
};

export const Actions = Template.bind({});
Actions.args = {
  headers: [
    ...defaultData.headers,
    { text: 'Link', type: 'none' },
    { text: 'Button', type: 'none' },
  ],
  rows: defaultData.rows.map((row) => [
    ...row,
    { text: 'Link', action: 'link' as const, type: 'action' as const },
    { text: 'Add', action: 'button' as const, type: 'action' as const },
  ]),
  children: ({ actionCell }) => (
    <>
      {actionCell.action === 'link' && <Link href="/">{actionCell.text}</Link>}
      {actionCell.action === 'button' && (
        <Button margin={0}>{actionCell.text}</Button>
      )}
    </>
  ),
};
