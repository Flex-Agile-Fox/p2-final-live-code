import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: []
  },
  mutations: {
    setAnimals (state, payload) {
      state.animals = payload
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
    }
  },
  modules: {
  }
})
