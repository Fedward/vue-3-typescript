import { createStore } from 'vuex';
import { Note } from '@/types/Note';
import Mutations from '@/store/mutation-types';
import uid from '@/utils/uid';

type State = {
  notes: Array<Note>
};

export default createStore<State>({
  state: {
    notes: [
      {
        id: uid(),
        title: 'Note 1',
        tasks: [
          {
            id: uid(),
            text: 'task 1',
            done: false,
          },
          {
            id: uid(),
            text: 'task 2',
            done: true,
          },
          {
            id: uid(),
            text: 'task 3',
            done: false,
          },
          {
            id: uid(),
            text: 'task 4',
            done: true,
          },
        ],
      },
      {
        id: uid(),
        title: 'Note 2',
        tasks: [
          {
            id: uid(),
            text: 'task 1',
            done: false,
          },
          {
            id: uid(),
            text: 'task 2',
            done: true,
          },
        ],
      },
    ],
  },
  mutations: {
    [Mutations.ADD_NEW_NOTE]({ notes }, note) {
      notes.push(note);
    },

    [Mutations.REMOVE_NOTE_BY_ID]({ notes }, removableNote) {
      const noteIndex = notes.findIndex(({ id }) => id === removableNote.id);

      if (noteIndex === -1) return;

      notes.splice(noteIndex, 1);
    },
  },
  actions: {
    addNewNote({ commit }, note) {
      commit(Mutations.ADD_NEW_NOTE, note);
    },

    removeNote({ commit }, note) {
      commit(Mutations.REMOVE_NOTE_BY_ID, note);
    },
  },
});
