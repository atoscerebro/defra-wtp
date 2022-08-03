import { fireEvent, render, within } from '@testing-library/react';
import { SortableTable } from '.';

jest.mock('./styled-components', () => {
  const originalModule = jest.requireActual('./styled-components');
  return {
    ...originalModule,
    SortTableCell: ({ children }: { children: any }) => (
      <td data-testid="sort-table-cell">{children}</td>
    ),
  };
});

const headers = [
  {
    text: 'Elevation',
    sortable: true,
    type: 'none' as const,
    dataType: 'numeric' as const,
  },
  {
    text: 'ID',
    sortable: true,
    type: 'none' as const,
  },
];

const tableRows = [
  [
    { text: '1,000 meters', type: 'data' as const, sortValue: '1000' },
    { text: 'C', type: 'data' as const },
  ],
  [
    { text: '3,000 meters', type: 'data' as const, sortValue: '3000' },
    { text: 'B', type: 'data' as const },
  ],
  [
    { text: '2,000 meters', type: 'data' as const, sortValue: '2000' },
    { text: 'A', type: 'data' as const },
  ],
];

describe('Sortable-Table Component', () => {
  it('should render all text', () => {
    const { getByText } = render(
      <SortableTable headers={headers} rows={tableRows} />,
    );

    tableRows.forEach((row) => {
      row.forEach((cell) => {
        expect(getByText(cell.text)).toBeInTheDocument();
      });
    });

    headers.forEach((header) => {
      expect(getByText(header.text)).toBeInTheDocument();
    });
  });

  it('should sort text cells correctly', () => {
    const expectedText = [...tableRows]
      .sort((a, b) => a[1].text.localeCompare(b[1].text))
      .reduce((out: string[], curr) => {
        out.push(curr[0].text, curr[1].text);
        return out;
      }, []);

    const { getByText, getAllByTestId } = render(
      <SortableTable headers={headers} rows={tableRows} />,
    );

    const idSortButton = getByText('ID');

    fireEvent.click(idSortButton);

    const cells = getAllByTestId('sort-table-cell');

    cells.forEach((cell, i) => {
      expect(within(cell).getByText(expectedText[i])).toBeInTheDocument();
    });
  });

  it('should sort numeric cells correctly', () => {
    const expectedText = [...tableRows]
      .sort((a, b) =>
        a[0].sortValue!.localeCompare(b[0].sortValue!, undefined, {
          numeric: true,
        }),
      )
      .reduce((out: string[], curr) => {
        out.push(curr[0].text, curr[1].text);
        return out;
      }, []);

    const { getByText, getAllByTestId } = render(
      <SortableTable headers={headers} rows={tableRows} />,
    );

    const idSortButton = getByText('Elevation');

    fireEvent.click(idSortButton);

    const cells = getAllByTestId('sort-table-cell');

    cells.forEach((cell, i) => {
      expect(within(cell).getByText(expectedText[i])).toBeInTheDocument();
    });
  });

  it('should render action columns', () => {
    const actionHeader = { text: 'Action', type: 'none' as const };
    const action = { text: 'Test Action', type: 'action' as const };

    const actionHeaders = [...headers, actionHeader];
    const actionRows = tableRows.map((row) => [...row, action]);

    const { getAllByText } = render(
      <SortableTable headers={actionHeaders} rows={actionRows}>
        {({ actionCell }) => <button>{actionCell.text}</button>}
      </SortableTable>,
    );

    const actions = getAllByText(action.text);

    expect(actions.length).toBe(actionRows.length);
  });
});
