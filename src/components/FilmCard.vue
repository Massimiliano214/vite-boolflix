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
    <li class="filmCard">
        <h3 v-if="title.toLowerCase() != originalTitle.toLowerCase()"> {{ title }}</h3>
        <h3> {{ originalTitle }}</h3>
        <h3 v-if="language == 'it'"> <img src="/download_itas.png" alt="bandiera italiana"></h3>
        <h3 v-else-if="language == 'en'"> <img src="/download.png" alt="bandiera inglese"></h3>
        <h3 v-else-if="language == 'pt'"> <img src="/download_porto.png" alt="bandiera portoghese"></h3>
        <h3 v-else> {{ language }}</h3>
        <h3 v-for="(score, index) in scoreCoverter()" :key="index"><i class="fa-solid fa-star"></i></h3>
        <h3 v-for="(score, index) in 5 - scoreCoverter()" :key="index"><i class="fa-regular fa-star"></i></h3>
        <img :src="image" alt="foto Film">
    </li>

</template>

<style scoped lang="scss">

</style>