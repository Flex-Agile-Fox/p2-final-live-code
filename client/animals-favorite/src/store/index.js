import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const  baseURL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      const {email, password} = payload
      axios({
        method: 'POST',
        url: baseURL + '/login',
        data: {
          email,
          password
        }
      }).then(({ data }) => {
        console.log(data)
      }).catch((err) => {
         console.log(err)
      })
    }
  },
  modules: {
  }
})
