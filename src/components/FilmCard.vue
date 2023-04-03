<script>
    export default {
        name: "FilmCard",
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
    <li class="filmCard" :style = "`background-image: url(${image})`">
        <div class="liContainer">
            <h3 v-if="title.toLowerCase() != originalTitle.toLowerCase()"> {{ title }}</h3>
            <h3> {{ originalTitle }}</h3>
            <h3 v-if="language == 'it'"> <span class="fi fi-it"></span> <span class="fi fi-it fis"></span></h3>
            <h3 v-else-if="language == 'en'"> <span class="fi fi-eg"></span> <span class="fi fi-eg fis"></span></h3>
            <h3 v-else-if="language == 'pt'"> <span class="fi fi-es"></span> <span class="fi fi-es fis"></span></h3>
            <h3 v-else> {{ language }}</h3>
            <span v-for="(score, index) in scoreCoverter()" :key="index"><i class="fa-solid fa-star"></i></span>
            <span v-for="(score, index) in 5 - scoreCoverter()" :key="index"><i class="fa-regular fa-star"></i></span>
        </div>
        
    </li>

</template>

<style scoped lang="scss">
    li {
        background-size: cover;
        width: 100%;
        height: 420px;
        margin-bottom: 20px;
        color: white;
    
        list-style-type: none;

        .liContainer {
            display: none;
        }

        img {
            width: 100%;
        }
        * {
            padding: 5px;
        }
    }

    li:hover {
        filter: opacity(10%);
       background-color: black;
       .liContainer {
        display: block;
        opacity: 1;
        filter: opacity(100%);
       } 
    }
</style>