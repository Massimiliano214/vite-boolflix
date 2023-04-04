<script>

    import axios from "axios";
    import { store } from "../store.js";
    import CastTv from "./CastTv.vue";

    export default {
        name: "TvSeriesCard",
        props: {
            title: String,
            originalTitle: String,
            language: String,
            score: Number,
            image: String,
            id: Number
        },
        components: {
            CastTv
        },
        data() {
            return {
                store,
                newImage: "../../public/film.jpeg"
            }
        },
        methods: {
            scoreCoverter() {
                return Math.ceil(this.score / 2);
            },
            imageChange() {
                if (this.image == 'https://image.tmdb.org/t/p/w342null') {
                    return this.newImage;
                } else {
                    return this.image;
                }
            },
            getActorsTv() {
                let urlApiActorsTv = `https://api.themoviedb.org/3/tv/${this.id}/credits?api_key=4a8514f5e3a15bb52954d6f04549524a`;

                axios.get(urlApiActorsTv)
                .then(response => {
                this.store.castListTv = response.data.cast;
                console.log(this.store.castListTv);
                })
                
            },
            createList() {
                this.getActorsTv();              
            }
        }
    }

    
</script>


<template>
    <div class="sectionNoFlip">
        <div class="filmCard" :style ="`background-image: url(${imageChange()})`">
            <li class="liContainer" @mouseenter="createList()">
                <h3 v-if="title.toLowerCase() != originalTitle.toLowerCase()"> {{ title }}</h3>
                <h3> {{ originalTitle }}</h3>
                <div class="flag" v-if="language == 'it'"><span class="fi fi-it"></span></div>
                <div class="flag" v-else-if="language == 'en'"><span class="fi fi-gb"></span></div>
                <div class="flag" v-else-if="language == 'pt'"><span class="fi fi-pt"></span></div>
                <div v-else> {{ language }}</div> <br>
                <span v-for="(score, index) in scoreCoverter()" :key="index"><i class="fa-solid fa-star"></i></span>
                <span v-for="(score, index) in 5 - scoreCoverter()" :key="index"><i class="fa-regular fa-star"></i></span>
                <div v-for="(actor, index) in store.castListTv.slice(0,5)" :key="index">
                    <CastTv
                        :name="actor.name"
                        :character="actor.known_for_department"
                    ></CastTv>
                    
                </div>
            </li>
        </div>
    </div>
    

</template>

<style scoped lang="scss">
    @use "/node_modules/flag-icons/css/flag-icons.min.css";

    .flag {
        font-size: 2rem;
        padding: 1.5rem;
    }
    .filmCard {
        background-size: cover;
        width: 100%;
        height: 408px;
        background-color: black;
        border: 1px solid white;
        background-position: center;
        margin-bottom: 20px;
        color: white;
        list-style-type: none;

        .liContainer {
            display: none;
            background-color: rgba($color: #000000, $alpha: 0.9);
            height: 100%;
            padding: 20px;
            overflow-y: auto;
            
        }

        img {
            width: 100%;
        }
        * {
            padding: 5px;
        }
    }

    .sectionNoFlip {
        width: 100%;
    }

    .sectionNoFlip:hover {
        .filmCard {
            animation: ruota 1s;
        }

        .liContainer {
            display: block;
        } 
    }

    @keyframes ruota {
        50% {
            transform: rotateY(180deg);
        }
        100% {
            transform: rotateY(0);
        }
    }
</style>