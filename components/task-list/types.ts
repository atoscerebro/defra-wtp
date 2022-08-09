export enum TaskListStatus {
  CANNOT_START_YET = 'CANNOT START YET',
  NOT_STARTED = 'NOT STARTED',
  IN_PROGRESS = 'IN PROGRESS',
  COMPLETED = 'COMPLETED',
}

export interface ITaskListGroup {
  title: string;
  sections: ITaskListSection[];
}

export interface ITaskListSection {
  title: string;
  link: string;
  status: {
    label: string;
    value: TaskListStatus;
  };
}
