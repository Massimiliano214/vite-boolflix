<script>
    export default {
        name: "CastFilm",
        props: {
            name: String,
            character: String
        }
    }
</script>


<template>
    <span> {{ name }}</span> <br>
    <span> {{ character }}</span>

</template>

<style scoped lang="scss">

</style>