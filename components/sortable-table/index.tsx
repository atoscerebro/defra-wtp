import { Table } from 'govuk-react';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import { SortHeader } from './sort-header';
import { ICell, IHeader, IRow, SortType } from './types';
import { getRowKey, resolveCellValue } from './utils';
import * as StyledComponents from './styled-components';

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
    const { dataType, type } = localHeaders[sortIndex];
    return [...rows].sort((a, b) => {
      const cellA = resolveCellValue(a[sortIndex]);
      const cellB = resolveCellValue(b[sortIndex]);

      if (type === 'ascending') {
        return cellA.localeCompare(cellB, undefined, {
          numeric: !isNaN(parseInt(cellA)) && !isNaN(parseInt(cellB)),
        });
      } else {
        return cellB.localeCompare(cellA, undefined, { numeric: true });
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
              <StyledComponents.SortTableCellHeader key={header.text}>
                {header.text}
              </StyledComponents.SortTableCellHeader>
            ),
          )}
        </Table.Row>
      }
    >
      {sortedRows.map((row) => (
        <Table.Row key={getRowKey(row)}>
          {row.map((cell) => (
            <StyledComponents.SortTableCell
              key={cell.text}
              datatype={cell.datatype}
            >
              {cell.type === 'data'
                ? cell.text
                : children({ actionCell: cell })}
            </StyledComponents.SortTableCell>
          ))}
        </Table.Row>
      ))}
    </Table>
  );
};
