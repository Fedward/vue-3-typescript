import { Task } from '@/types/Task';

export default function firstUnfinishedSorter(a: Task, b: Task): number {
  return Number(a.done) - Number(b.done);
}
