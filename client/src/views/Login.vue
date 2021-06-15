<template>
  <!--Login-->
  <div class="login-container">
    <div class="left-login-page">
      <h3>Please Login First</h3>
      <form>
        <input
          class="input-form"
          type="email"
          placeholder="your email here"
          required
          v-model="email"
        />
        <input
          class="input-form"
          type="password"
          placeholder="your password here"
          required
          v-model="password"
        />
        <button @click.prevent="login" type="submit">Login</button>
      </form>
    </div>
    <div class="right-login-page">
      <h1>Welcome to Animal Lovers</h1>
      <img src="@/assets/login.png" alt="login image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style>
</style>