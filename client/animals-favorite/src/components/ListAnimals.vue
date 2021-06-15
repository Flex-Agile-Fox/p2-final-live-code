<template>
    <div class="card">
        <div class="card-image">
          <img
            :src="animal.imageUrl"
            alt="card image"
          />
        </div>
        <div class="card-body">
          <h3>{{animal.name}}</h3>
          <p>{{animal.description}}</p>
        </div>
        <button>Add To Favorites</button>
     </div>
</template>

<script>
export default {
  name: 'ListAnimals',
  props: ['animal']
}
</script>

<style>

</style>
