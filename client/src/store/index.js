import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import router from '../router';

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
    goLogin(context, payload) {
      const { email, password } = payload;

      axios({
        method: 'POST',
        url: '/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { email, password },
      })
        .then(({ data }) => {
          console.log(data);
          // router.push({ name: 'Home' });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchAnimals(context) {
      axios({
        method: 'GET',
        url: '/animals',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(({ data }) => {
          console.log(data.data, 'dattaaaa');
          context.commit('SET_ANIMALS', data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // fetchFavorites(context, payload) {
    //   console.log('fetchFavorites');
    // },
  },
  modules: {},
});
