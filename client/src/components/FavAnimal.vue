<template>
  <div class="card">
    <div class="card-image">
      <img :src="fav.animal.imageUrl" alt="card image" />
    </div>
    <div class="card-body">
      <h3>{{ fav.animal.name }}</h3>
      <p>{{ fav.animal.description }}</p>
    </div>
    <button @click="deleteFavorite(fav.id)" class="delete-btn">remove</button>
  </div>
</template>

<script>
export default {
  name: "FavAnimal",
  props: ["fav"],
  methods: {
    deleteFavorite(id) {
      this.$store.dispatch("deleteFavorite", id);
    },
  },
};
</script>

<style>
</style>