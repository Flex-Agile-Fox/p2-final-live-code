<template>
  <div class="home-container">
    <Animal
      v-for="animal in this.$store.state.animals"
      :key="animal.id"
      :animal="animal"
    ></Animal>
  </div>
</template>

<script>
// @ is an alias to /src
import Animal from "../components/Animal.vue";

export default {
  name: "Home",
  components: {
    Animal,
  },
  mounted() {
    this.$store.dispatch("getAnimals");
  },
};
</script>
