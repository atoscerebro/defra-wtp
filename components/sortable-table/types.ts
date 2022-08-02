export type SortType = 'ascending' | 'descending' | 'none';
export type CellType = 'data' | 'action';
export type FormatType = 'numeric' | 'text';
export type DataType = 'numeric' | 'text';

export interface IHeader {
  type: SortType;
  text: string;
  sortable?: boolean;
  formatType?: FormatType;
  dataType?: DataType;
}

export type IRow<T extends string> = ICell<T>[];

export interface ICell<T extends string> {
  type: CellType;
  text: string;
  action?: T;
  sortValue?: string;
  formatType?: FormatType;
}
