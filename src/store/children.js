export const children = {
  state: () => ({
    person: [],
    children: [],
  }),

  actions: {
    clearState({ state }) {
      state.person = [];
      state.children = [];
      console.log(state);
    },
  },

  mutations: {
    createPerson(state, newPerson) {
      state.person = [];
      state.person.push(newPerson);
    },
    createChildren(state, child) {
      state.children.push(child);
    },
    delChildren(state, index) {
      state.children.splice(index, 1);
    },
  },

  getters: {
    getPerson(state) {
      return state.person;
    },
    getChildren(state) {
      return state.children;
    },
  },
};
