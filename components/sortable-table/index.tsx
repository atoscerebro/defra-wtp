import { Table } from 'govuk-react';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import { SortHeader } from './sort-header';
import { ICell, IHeader, IRow, SortType } from './types';
import { getRowKey, resolveCellValue } from './utils';

export interface ISortableTableProps<T extends string> {
  caption?: string;
  headers: IHeader[];
  rows: IRow<T>[];
  children: (renderProps: { actionCell: ICell<T> }) => ReactNode;
}

export const SortableTable = <T extends string>({
  caption,
  headers,
  rows,
  children,
}: ISortableTableProps<T>) => {
  const [localHeaders, setLocalHeaders] = useState(headers);

  const sortedRows = useMemo(() => {
    const sortIndex = localHeaders.findIndex(
      (header) => header.type !== 'none',
    );
    if (sortIndex === -1) {
      return rows;
    }
    const { numeric, type } = localHeaders[sortIndex];
    return [...rows].sort((a, b) => {
      const cellA = resolveCellValue(a[sortIndex]);
      const cellB = resolveCellValue(b[sortIndex]);
      if (numeric) {
        if (type === 'ascending') {
          return parseInt(cellA) - parseInt(cellB);
        } else {
          return parseInt(cellB) - parseInt(cellA);
        }
      } else {
        if (type === 'ascending') {
          return cellA.localeCompare(cellB);
        } else {
          return cellB.localeCompare(cellA);
        }
      }
    });
  }, [rows, localHeaders]);

  const handleSort = useCallback((header: IHeader, order: SortType) => {
    setLocalHeaders((headers) =>
      headers.map((_header) => ({
        ..._header,
        type: _header.text === header.text ? order : 'none',
      })),
    );
  }, []);

  return (
    <Table
      caption={caption}
      head={
        <Table.Row>
          {localHeaders.map((header) =>
            header.sortable ? (
              <SortHeader key={header.text} onSort={handleSort} {...header} />
            ) : (
              <Table.CellHeader key={header.text}>
                {header.text}
              </Table.CellHeader>
            ),
          )}
        </Table.Row>
      }
    >
      {sortedRows.map((row) => (
        <Table.Row key={getRowKey(row)}>
          {row.map((cell) => (
            <Table.Cell key={cell.text}>
              {cell.type === 'data'
                ? cell.text
                : children({ actionCell: cell })}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table>
  );
};
