import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex);

axios.defaults.baseURL = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    isLogin: false,
    animals: [],
    favorites: [],
  },
  mutations: {
    SET_LOGIN(state, payload) {
      state.isLogin = payload;
    },
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
        .then(() => {
          context.commit('SET_LOGIN', true);
          router.push({ name: 'Home' });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // fetchAnimals(context, payload) {
    //   console.log('fetchAnimals');
    // },
    // fetchFavorites(context, payload) {
    //   console.log('fetchFavorites');
    // },
  },
  modules: {},
});
