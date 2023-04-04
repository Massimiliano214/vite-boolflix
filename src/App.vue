<script>
  import axios from "axios";
  import { store } from "./store.js";
  import TheHeader from "./components/TheHeader.vue";
  import FilmSelection from "./components/FilmSelection.vue";

  export default {
    components: {
      TheHeader,
      FilmSelection,
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getLists() {
        this.getFilmsList();
        this.getTvSeriesList();
      },
      getFilmsList() {
        let urlApiFilm = `https://api.themoviedb.org/3/search/movie?api_key=4a8514f5e3a15bb52954d6f04549524a&query=${store.search.replace(" ","+")}&language=it-IT`;
  
        axios.get(urlApiFilm)
        .then(response => {
          this.store.filmList = response.data.results;
        });
      },
      getTvSeriesList() {
        let urlApiTv = `https://api.themoviedb.org/3/search/tv?api_key=4a8514f5e3a15bb52954d6f04549524a&query=${store.search.replace(" ","+")}&language=it-IT`;

        axios.get(urlApiTv)
        .then(response => {
          this.store.tvShowList = response.data.results;
        });
      }
    } 
  }
</script>

<template>
  <TheHeader @activateResearch="getLists"></TheHeader>

  <FilmSelection></FilmSelection>
</template>

<style lang="scss">
  @use "./styles/general.scss";

  .container {
    height: 100%;
    display: flex;
    width: 1170px;
    justify-content: space-between;
    margin: auto;
    align-items: center;
  }
</style>
