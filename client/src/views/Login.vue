<template>
  <div class="login-container">
    <div class="left-login-page">
      <h3>Please Login First</h3>
      <form @submit.prevent="login">
        <input
          class="input-form"
          type="email"
          placeholder="your email here"
          v-model="email"
          required
        />
        <input
          class="input-form"
          type="password"
          placeholder="your password here"
          v-model="password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
    <div class="right-login-page">
      <h1>Welcome to Animal Lovers</h1>
      <img src="../assets/login.png" alt="login image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
    }
  }
}
</script>

<style>

</style>
