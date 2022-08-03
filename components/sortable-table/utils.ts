import { ICell, IRow, SortType } from './types';

export const resolveCellValue = (cell: ICell<string>) =>
  cell.sortValue ?? cell.text;

export const getRowKey = (row: IRow<string>) =>
  row.reduce((out, cell) => `${out}-${cell.text}`, '').slice(1);

export const getNextSortType = (current: SortType) =>
  ((
    {
      ascending: 'descending',
      descending: 'ascending',
      none: 'ascending',
    } as const
  )[current]);
