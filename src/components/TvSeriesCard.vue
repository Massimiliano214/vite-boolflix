<script>
    export default {
        name: "TvSeriesCard",
        props: {
            title: String,
            originalTitle: String,
            language: String,
            score: Number
        }
    }
</script>


<template>
    
    <div class="tvSeriesCard">
        <h3> {{ title }}</h3>
        <h3> {{ originalTitle }}</h3>
        <h3 v-if="language == 'it'"> <img src="/download_itas.png" alt="bandiera italiana"></h3>
        <h3 v-else-if="language == 'en'"> <img src="/download.png" alt="bandiera inglese"></h3>
        <h3 v-else-if="language == 'pt'"> <img src="/download_porto.png" alt="bandiera portoghese"></h3>
        <h3 v-else> {{ language }}</h3>
        <h3> {{ score }}</h3>
    </div>

</template>

<style scoped lang="scss">

</style>