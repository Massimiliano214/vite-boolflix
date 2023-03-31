<script>
    import { store } from "../store.js";
    import FilmCard from "./FilmCard.vue";

    export default {
        name: "FilmSelection",
        data() {
            return {
                store
            }
        },
        components: {
            FilmCard,
        },
    }
</script>

<template>
    <div v-for="(film, index) in store.filmList" :key="index">
        <FilmCard 
            :title="film.title"
            :originalTitle="film.original_title"
            :language="film.original_language"
            :score="film.vote_average"  
        ></FilmCard>
    </div>
    

</template>

<style scoped lang="scss">

</style>