<template>
  <div class="login-container">
    <div class="left-login-page">
      <h3>Please Login First</h3>
      <form>
        <input
          class="input-form"
          type="email"
          placeholder="your email here"
          :email="login.email"
          required
        />
        <input
          class="input-form"
          type="password"
          placeholder="your password here"
          :password="login.password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
    <div class="right-login-page">
      <h1>Welcome to Animal Lovers</h1>
      <img src="" alt="login image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
};
</script>

<style></style>
