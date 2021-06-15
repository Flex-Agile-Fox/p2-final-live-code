<template>
  <div class="home-container"><Animal></Animal></div>
</template>

<script>
// @ is an alias to /src
import Animal from "../components/Animal.vue";

export default {
  name: "Home",
  components: {
    Animal,
  },
};
</script>
