import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const baseURL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    animals: []
  },
  mutations: {
    SET_ANIMALS (state, payload) {
      state.animals = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: baseURL + '/login',
        data: {
          email,
          password
        }
      }).then(({ data }) => {
        console.log(data.token)
        localStorage.setItem('access_token', data.token)
        router.push({ path: '/' })
      }).catch((err) => {
        console.log(err)
      })
    },

    logout () {
      localStorage.removeItem('access_token')
      router.push({ path: '/login' })
    },

    getAnimals (context, payload) {
      axios({
        method: 'GET',
        url: baseURL + '/animals',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        console.log(data.animals)
        context.commit('SET_ANIMALS', data.animals)
      }).catch((err) => {
        console.log(err)
      })
    }

  },
  modules: {
  }
})
