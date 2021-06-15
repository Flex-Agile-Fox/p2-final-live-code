<template>
  <div>
    <Navbar></Navbar>

    <div class="home-container">
      <ListAnimals
        v-for="animal in animals"
        :key="animal.id"
        :animal="animal"
      ></ListAnimals>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ListAnimals from '../components/ListAnimals.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    ListAnimals
  },
  computed: {
    animals () {
      return this.$store.state.animals
    }
  },
  created () {
    this.$store.dispatch('getAnimals')
  }
}
</script>
