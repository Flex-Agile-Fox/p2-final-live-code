<template>
  <div class="home-container">
      <div v-for="animal in animals" :key="animal.id" class="card">
        <div class="card-image">
          <img
            :src="animal.imageUrl"
            :alt="animal.name"
          />
        </div>
        <div class="card-body">
          <h3>{{ animal.name }}</h3>
          <p>{{ animal.description }}</p>
        </div>
        <button @click.prevent="addFav(animal.id)">Add To Favorites</button>
      </div>
    </div>

</template>

<script>
export default {
  name: 'AnimalCard',
  props: ['animals'],
  methods: {
    addFav (animalId) {
      this.$store.dispatch('addFavourite', animalId)
    }
  }
}
</script>

<style>

</style>
