<script>
    export default {
        name: "TvSeriesCard",
        props: {
            title: String,
            originalTitle: String,
            language: String,
            score: Number,
            image: String
        },
        data() {
            return {
                newScore: null,
            }
        },
        methods: {
            scoreCoverter() {
                return Math.ceil(this.score / 2);
            }
        }
    }

    
</script>


<template>
    <div class="filmCard" :style ="`background-image: url(${image})`">
        <li class="liContainer">
            <h3 v-if="title.toLowerCase() != originalTitle.toLowerCase()"> {{ title }}</h3>
            <h3> {{ originalTitle }}</h3>
            <div class="flag" v-if="language == 'it'"><span class="fi fi-it"></span></div>
            <div class="flag" v-else-if="language == 'en'"><span class="fi fi-gb"></span></div>
            <div class="flag" v-else-if="language == 'pt'"><span class="fi fi-pt"></span></div>
            <div v-else> {{ language }}</div> <br>
            <span v-for="(score, index) in scoreCoverter()" :key="index"><i class="fa-solid fa-star"></i></span>
            <span v-for="(score, index) in 5 - scoreCoverter()" :key="index"><i class="fa-regular fa-star"></i></span>
        </li>
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
        margin-bottom: 20px;
        color: white;
    
        list-style-type: none;

        .liContainer {
            display: none;
            background-color: black;
            height: 100%;
            padding: 20px;
            
        }

        img {
            width: 100%;
        }
        * {
            padding: 5px;
        }
    }

    .filmCard:hover {
        
       .liContainer {
        display: block;
        
       } 
    }
</style>