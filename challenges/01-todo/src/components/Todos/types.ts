export type Task = {
  id: number;
  title: string;
  status: boolean;
};

export interface ITasks {
  tasks: Task[];
}
