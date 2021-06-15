<template>
<div>
    <Navbar></Navbar>
    <div class="login-container">
      <div class="left-login-page">
        <h3>Please Login First</h3>
        <form v-on:submit.prevent="login">
          <input
            class="input-form"
            type="email"
            placeholder="your email here"
            v-model="inputLogin.email"
            required
          />
          <input
            class="input-form"
            type="password"
            placeholder="your password here"
            v-model="inputLogin.password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div class="right-login-page">
        <h1>Welcome to Animal Lovers</h1>
        <!-- <img src="./assets/login.png" alt="login image" /> -->
      </div>
    </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Login',
  data () {
    return {
      inputLogin: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    Navbar
  },
  methods: {
    login () {
      const email = this.inputLogin.email
      const password = this.inputLogin.password
      this.$store.dispatch('login', { email, password })
    }
  }
}
</script>

<style>

</style>
