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

        let urlApi = `https://api.themoviedb.org/3/search/movie?api_key=4a8514f5e3a15bb52954d6f04549524a&query=${store.search.replace(" ","+")}&language=it-IT`;

        console.log(urlApi);

        axios.get(urlApi)
        .then(response => {
          this.store.filmList = response.data.results;
          console.log(this.store.filmList);
        })
        
        
      }
    }
  }
</script>

<template>
  <TheHeader @activateResearch="getFilms"></TheHeader>
</template>

<style lang="scss">

</style>
