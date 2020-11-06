import { createStore } from 'vuex';

const store = {
  state: {},
  mutations: {},
  actions: {},
  modules: {},
};

export default createStore(store);

export const createVuexStore = (customStore) => {
  const defaultStore = {
    state() {
      return {
        username: 'alice',
        firstName: 'Alice',
        lastName: 'Doe',
      };
    },

    getters: {
      fullname: (state) => state.firstName + ' ' + state.lastName,
    },
  };
  const newStore = customStore || defaultStore;

  return createStore({ ...newStore });
};
