<script>
    import { store } from "../store.js";

    export default {
        name: "TheHeader",
        emits: ["activateResearch"],
        data() {
            return {
               store,
            }
        },
        methods: {
            
        }
    }
</script>

<template>
    <input v-model="store.search" type="text">
    <button @click="$emit('activateResearch')">Cerca</button>
</template>

<style scoped lang="scss">

</style>