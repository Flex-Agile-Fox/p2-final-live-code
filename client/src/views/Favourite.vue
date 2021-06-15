<template>
  <div>
    <div class="favorite">
      <h1>My Favorites Animals</h1>
    </div>
    <div v-for="favourite in favourites" :key="favourite.id" class="favorite-container">
      <div class="card">
        <div class="card-image">
          <img
            :src="favourite.Animal.imageUrl"
            :alt="favourite.Animal.name"
          />
        </div>
        <div class="card-body">
          <h3>{{ favourite.Animal.name }}</h3>
          <p>{{ favourite.Animal.description }}</p>
        </div>
        <button class="delete-btn">remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favourite',
  computed: {
    favourites () {
      return this.$store.state.favourites
    }
  },
  created () {
    this.$store.dispatch('fetchFavourites')
  }
}
</script>

<style>

</style>
