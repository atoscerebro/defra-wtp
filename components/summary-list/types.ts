export interface IRow {
  key: string;
  value: string | string[];
  action?: {
    title: string;
    link: string;
  };
}
