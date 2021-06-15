<template>
  <div>
    <!--Favorites-->
    <div class="favorite">
      <h1>My Favorites Animals</h1>
    </div>
    <div class="favorite-container">
      <FavAnimal></FavAnimal>
    </div>
  </div>
</template>

<script>
import FavAnimal from "../components/FavAnimal.vue";

export default {
  name: "Home",
  components: {
    FavAnimal,
  },
};
</script>

<style>
</style>