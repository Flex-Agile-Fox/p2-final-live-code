<template>
  <div>
    <!--Favorites-->
    <div class="favorite">
      <h1>My Favorites Animals</h1>
    </div>
    <div class="favorite-container">
      <FavAnimal
        v-for="fav in this.$store.state.favorites"
        :key="fav.id"
        :fav="fav"
      ></FavAnimal>
    </div>
  </div>
</template>

<script>
import FavAnimal from "../components/FavAnimal.vue";

export default {
  name: "Favorites",
  components: {
    FavAnimal,
  },
  mounted() {
    this.$store.dispatch("getFavorites");
  },
};
</script>

<style>
</style>