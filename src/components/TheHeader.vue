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
    <header>
        <div class="container">
            <h1>BOOLFLIX</h1>
            <div class="searchSector">
                <input v-model="store.search" type="text" placeholder="Inserisci Titolo...">
                <button @click="$emit('activateResearch')">Cerca</button>
            </div>
            
        </div>
        
    </header>  
</template>

<style scoped lang="scss">
    header {
        background-color: black;
        height: 80px;

        .container {
            height: 100%;
            display: flex;
            width: 1170px;
            justify-content: space-between;
            margin: auto;
            align-items: center;

            h1 {
                color: red;
            }

            input {
                padding: 5px;
                margin-right: 8px;
            }

            button {
                padding: 5px;
            }
        }
    }


</style>