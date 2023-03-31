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
        <h3> {{ language }}</h3>
        <h3> {{ score }}</h3>
    </div>

</template>

<style scoped lang="scss">

</style>