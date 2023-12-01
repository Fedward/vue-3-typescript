import { Task } from '@/types/Task';

export type Note = {
  id: number,
  title: string,
  tasks: Array<Task>,
};
