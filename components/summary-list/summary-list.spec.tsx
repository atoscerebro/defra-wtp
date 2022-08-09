import { render } from '@testing-library/react';
import { SummaryList } from '.';

const rows = [
  {
    key: 'Waste code',
    value:
      'GC020: Electronic scrap (e.g. printed circuit boards, electronic components, wire, etc.)',
  },
  {
    key: 'EWC code',
    value: 'EWC code not provided',
  },
  { key: 'National code', value: 'National code not provided' },
  {
    key: 'Waste Description',
    value: 'Electronics including; wires and circuit boards',
  },
  {
    key: 'Collection date',
    value: 'Estimate, 14 July 2022',
    action: [{ title: 'Update', link: '/' }],
  },
];

describe('Summary Component', () => {
  it('should render all the row keys and values', () => {
    const { getByText } = render(<SummaryList rows={rows} />);

    rows.forEach((row) => {
      expect(getByText(row.key)).toBeInTheDocument();
      expect(getByText(row.value)).toBeInTheDocument();
    });
  });
});
