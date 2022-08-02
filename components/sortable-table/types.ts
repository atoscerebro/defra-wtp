export type SortType = 'ascending' | 'descending' | 'none';
export type CellType = 'data' | 'action';

export interface IHeader {
  type: SortType;
  text: string;
  sortable?: boolean;
  numeric?: boolean;
}

export type IRow<T extends string> = ICell<T>[];

export interface ICell<T extends string> {
  type: CellType;
  text: string;
  action?: T;
  sortValue?: string;
  numeric?: boolean;
}
