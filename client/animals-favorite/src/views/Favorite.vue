<template>
  <div>
      <Navbar></Navbar>
      <div class="favorite">
      <h1>My Favorites Animals</h1>
      </div>
        <div class="favorite-container">
            <div class="card">
                <div class="card-image">
                <img
                    src="https://a-z-animals.com/media/animals/images/470x370/arctic_fox_11.jpg"
                    alt="card image"
                />
                </div>
                <div class="card-body">
                    <h3>Artic Fox</h3>
                    <p>Extremely thick winter fur!</p>
                </div>
                <button class="delete-btn">remove</button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Favorite',
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('getFavorite')
  }
}
</script>

<style>

</style>
