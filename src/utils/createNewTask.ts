import { Task } from '@/types/Task';
import uid from '@/utils/uid';
import { reactive } from 'vue';

export default function createNewTask(): Task {
  return reactive({
    id: uid(),
    text: '',
    done: false,
  });
}
