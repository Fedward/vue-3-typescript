<template>
  <form class="note-edit-form" @submit.prevent="submit">
    <label class="note-edit-form__title-field" for="title">
      <span class="note-edit-form__label">Заголовок заметки</span>
      <input type="text" name="title" v-model="note.title">
    </label>

    <div class="note-edit-form__tasks-list">
      <div class="note-edit-form__label">Задачи</div>
      <div
        v-for="task in note.tasks"
        :key="task.id"
        class="note-edit-form__task"
      >
        <input type="text" v-model="task.text">
      </div>
    </div>

    <button class="note-edit-form__btn" type="submit">
      ОК
    </button>
  </form>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  computed,
  watch,
} from 'vue';
import { Note } from '@/types/Note';
import clone from '@/utils/clone';
import createNewTask from '@/utils/createNewTask';

const MIN_TASKS_COUNT = 3;

const props = defineProps<{initialData: Note}>();
const emit = defineEmits<{(e: 'submit', note: Note): void}>();

const note = clone(props.initialData);
while (note.tasks.length < MIN_TASKS_COUNT) {
  note.tasks.push(createNewTask());
}

const allTasksFilled = computed(() => note.tasks.every(({ text }) => Boolean(text.trim())));

watch(allTasksFilled, (filled) => {
  if (filled) {
    note.tasks.push(createNewTask());
  }
});

const submit = () => {
  note.tasks = note.tasks.filter(({ text }) => Boolean(text.trim()));

  emit('submit', note);
};
</script>

<style scoped lang="less">
.note-edit-form {
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  input {
    width: -webkit-fill-available;
  }

  &__title-field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 4px;
    padding: 10px;
  }

  &__label {
    display: block;
    text-align: left;
    font-size: 12px;
    color: #333;
    margin-bottom: 2px;
  }

  &__tasks-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 8px;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 6px;
    margin-bottom: 10px;
  }

  &__task {
    width: 100%;
  }

  &__btn  {

  }
}
</style>
