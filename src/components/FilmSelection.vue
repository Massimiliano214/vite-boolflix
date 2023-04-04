<script>
    import axios from "axios";
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
        methods: {
            getActorsFilms() {
                let urlApiActorsFilms = `https://api.themoviedb.org/3/movie/${this.store.filmList.cast.id}/credits?api_key=4a8514f5e3a15bb52954d6f04549524a`;

                axios.get(urlApiActorsFilms)
                .then(response => {
                this.store.castListFilm = response.data.cast;
                console.log(this.store.castListFilm);
                })
            },

            getActorsTv() {
                let urlApiActorsTv = `https://api.themoviedb.org/3/tv/${this.store.tvShowList.cast.id}/credits?api_key=4a8514f5e3a15bb52954d6f04549524a`;

                axios.get(urlApiActorsTv)
                .then(response => {
                this.store.castListTv = response.data.cast;
                console.log(this.store.castListTv);
                })
               
            },
            createList() {
                this.getActorsFilms();
                this.getActorsTv();
            }
        }
    }   

</script>

<template>
    <div class="section" v-if="store.filmList.length > 0 && store.tvShowList.length > 0">
        <h2>FILMS</h2>
        <div class="container">
            
            <ul @mouseover="createList()" v-for="(film, index) in store.filmList" :key="film.id">
                <FilmCard 
                    :title="film.title"
                    :originalTitle="film.original_title"
                    :language="film.original_language"
                    :score="film.vote_average"
                    :image="'https://image.tmdb.org/t/p/w342' + film.poster_path"
                ></FilmCard>
            </ul>

            
            
        </div>
        
        <h2>TV SERIES</h2>

        <div class="container">
            <ul @mouseover="createList()" v-for="(series, index) in store.tvShowList" :key="series.id">
                <TvSeriesCard
                    :title="series.name"
                    :originalTitle="series.original_name"
                    :language="series.original_language"
                    :score="series.vote_average"
                    :image ="'https://image.tmdb.org/t/p/w342' + series.poster_path"
                ></TvSeriesCard>
                
            </ul>
        </div>
    </div>
    <div class="section" v-else>
        <h2>Nessun Risultato</h2>
    </div>
    

</template>

<style scoped lang="scss">
    .section {
        width: 1170px;
        margin: auto;
        padding: 20px;

        h2 {
            font-size: 3rem;
        }
    }
    .container {
        flex-wrap: wrap;

        ul {
            display: flex;
            flex-wrap: wrap;
            width: calc(100% / 4 - 20px);
        }
    }
</style>