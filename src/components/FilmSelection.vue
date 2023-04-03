<script>
    import { store } from "../store.js";
    import FilmCard from "./FilmCard.vue";
    import TvSeriesCard from "./TvSeriesCard.vue";

    export default {
        name: "FilmSelection",
        data() {
            return {
                store
            }
        },
        components: {
            FilmCard,
            TvSeriesCard
        },
        
    }
</script>

<template>
    <h2>FILMS</h2>
    <ul v-for="(film, index) in store.filmList" :key="index">
        <FilmCard 
            :title="film.title"
            :originalTitle="film.original_title"
            :language="film.original_language"
            :score="film.vote_average"
            :image="'https://image.tmdb.org/t/p/w500/' + film.poster_path"
        ></FilmCard>
    </ul>

    <h2>TV SERIES</h2>
    <ul v-for="(series, index) in store.tvShowList" :key="index">
        <TvSeriesCard
            :title="series.name"
            :originalTitle="series.original_name"
            :language="series.original_language"
            :score="series.vote_average"
            :image ="'https://image.tmdb.org/t/p/w500/' + series.poster_path"
        ></TvSeriesCard>
        
    </ul>
    

</template>

<style scoped lang="scss">

</style>