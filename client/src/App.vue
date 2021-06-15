<template>
  <div id="app">
    <div id="nav" v-if="this.$store.state.isLoggedIn">
      <!--Navbar-->
      <div class="nav-left">
        <img
          src="https://mustopa28121992.github.io/projectt/img/fox--md5--a9e377ae39495073d0e66db163fc8d9b.png"
          alt="logo"
        />
        <h1>Animal Lover</h1>
      </div>
      <div class="nav-center">
        <router-link to="/">Animals</router-link>
        <router-link to="/favorites">My Favorites</router-link>
      </div>
      <div class="nav-right">
        <button>Logout</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style></style>
