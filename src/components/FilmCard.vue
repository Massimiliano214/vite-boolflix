<script>
    export default {
        name: "FilmCard",
        props: {
            title: String,
            originalTitle: String,
            language: String,
            score: Number
        }
    }
</script>

<template>

    <div>
        <h3> {{ title }}</h3>
        <h3> {{ originalTitle }}</h3>
        <h3 v-if="language == 'it'"> <img src="../../public/download_itas.png" alt="bandiera italiana"></h3>
        <h3 v-else-if="language == 'en'"> <img src="../../public/download.png" alt="bandiera inglese"></h3>
        <h3 v-else-if="language == 'pt'"> <img src="../../public/download_porto.png" alt="bandiera portoghese"></h3>
        <h3 v-else> {{ language }}</h3>
        <h3> {{ score }}</h3>
    </div>

</template>

<style scoped lang="scss">

</style>