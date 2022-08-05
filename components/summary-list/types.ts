export interface IAction {
  title: string;
  link: string;
}

export interface IRow {
  key: string;
  value: string | (string | string[])[];
  action?: IAction[];
}
