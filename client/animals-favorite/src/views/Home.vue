<template>
  <div>
    <Navbar></Navbar>

    <div class="home-container">
      <ListAnimals></ListAnimals>
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
  }
}
</script>
