<template>
  <div class="home">
    <router-link to="/" class="home__add-new-task">
      Назад
    </router-link>

    <NoteEditForm
      :initial-data="emptyNote"
      @submit="addNewNote"
    />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { Note } from '@/types/Note';
import uid from '@/utils/uid';
import NoteEditForm from '@/components/NoteEditForm.vue';

const emptyNote: Note = {
  id: uid(),
  title: '',
  tasks: [],
};

const store = useStore();
const router = useRouter();

const addNewNote = async (note: Note) => {
  await store.dispatch('addNewNote', note);
  router.back();
};
</script>

<style lang="less">
.home {
  &__add-new-task {
    margin-bottom: 20px;
    display: inline-block;
  }
}
</style>
