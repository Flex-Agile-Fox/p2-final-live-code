<template>
  <div>
    <AnimalCard :animals="animals"/>
  </div>
</template>

<script>
import AnimalCard from '../components/AnimalCard'
export default {
  name: 'Home',
  components: {
    AnimalCard
  },
  computed: {
    animals () {
      return this.$store.state.animals
    }
  },
  created () {
    this.$store.dispatch('fetchAnimal')
  }
}
</script>
