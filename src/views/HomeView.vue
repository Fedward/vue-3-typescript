<template>
  <div class="home">
    <router-link to="/add-new-task" class="home__add-new-task">
      Добавить новую заметку
    </router-link>

    <NotePreview
      v-for="note in notes"
      :note="note"
      :key="note.id"
    />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

import NotePreview from '@/components/NotePreview.vue';

const { notes } = useStore().state;
</script>

<style lang="less">
.home {
  &__add-new-task {
    margin-bottom: 20px;
    display: inline-block;
  }
}
</style>
