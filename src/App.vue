<script>
  import axios from "axios";
  import { store } from "./store.js";
  import TheHeader from "./components/TheHeader.vue";

  export default {
    components: {
      TheHeader,
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getFilms() {
        let urlApi = "`https://api.themoviedb.org/3/search/movie?api_key=4a8514f5e3a15bb52954d6f04549524a&query=ritorno+al+futuro&language=it-IT`";

        console.log(urlApi);
      }
    }
  }
</script>

<template>
  <TheHeader @activateResearch="getFilms"></TheHeader>
</template>

<style lang="scss">

</style>
