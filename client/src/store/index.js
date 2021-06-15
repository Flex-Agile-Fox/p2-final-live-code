import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

axios.defaults.baseURL = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    animals: [],
    favorites: [],
  },
  mutations: {
    SET_ANIMALS(state, payload) {
      state.animals = payload;
    },
    SET_FAVORITES(state, payload) {
      state.favorites = payload;
    },
  },
  actions: {
    // fetchAnimals(context, payload) {
    //   console.log('fetchAnimals');
    // },
    // fetchFavorites(context, payload) {
    //   console.log('fetchFavorites');
    // },
  },
  modules: {},
});
