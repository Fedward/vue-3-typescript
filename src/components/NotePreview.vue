<template>
  <div class="note">
    <div class="note__title">
      {{ note.title }}
    </div>

    <ul class="note__tasks-list">
      <li
        v-for="task in visibleSortedTasks"
        :key="task.id"
        class="note__task"
        :class="{ 'note__task_done': task.done }"
      >
        - {{ task.text }}
      </li>
    </ul>

    <div class="note__buttons">
      <button class="note__btn">Редактировать</button>
      <button class="note__btn" @click="removeNote">Удалить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useStore } from 'vuex';

import { Note } from '@/types/Note';

import firstUnfinishedSorter from '@/utils/firstUnfinishedSorter';

const MAX_VISIBLE_TASKS = 3;

const props = defineProps<{ note: Note }>();

const visibleSortedTasks = props.note.tasks
  .slice(0, MAX_VISIBLE_TASKS)
  .sort(firstUnfinishedSorter);

const store = useStore();

const removeNote = () => {
  if (!window.confirm('Удалить заметку?')) return;

  store.dispatch('removeNote', props.note);
};
</script>

<style scoped lang="less">
.note {
  padding: 10px;
  border: 1px solid #333;
  border-radius: 6px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__task {
    margin-bottom: 4px;

    &_done {
      color: lightgray;
    }
  }

  &__buttons {
    display: flex;
    column-gap: 8px;
    padding-top: 4px;
  }
}
</style>
