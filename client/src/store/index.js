import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: [],
    favourites: []
  },
  mutations: {
    setAnimals (state, payload) {
      state.animals = payload
    },
    setFavourites (state, payload) {
      state.favourites = payload
    }
  },
  actions: {
    login (_, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email,
          password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.token)
          router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    fetchAnimal ({ commit }) {
      axios({
        method: 'GET',
        url: 'animals',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('setAnimals', data.animals)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    fetchFavourites ({ commit }) {
      axios({
        method: 'GET',
        url: 'favourites',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('setFavourites', data.favourites)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    addFavourite (_, payload) {
      axios({
        method: 'POST',
        url: `favourites/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          animalId: payload
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
