<script>
import { store } from '../store.js';
import SingleMovie from './SingleMovie.vue';
import SingleSerie from './SingleSerie.vue';

export default {
    data() {
        return {
            store
        };
    },
    methods: {

    },
    components:{
        SingleMovie,
        SingleSerie
    }
}
</script>

<template>
    <main class="bg-black">
        <div class="container-fluid px-4">
            <div class="text-white">
                <h2 class="fw-bold py-4">Movies</h2>
                <hr>
                <div class="row justify-content-center">
                    <SingleMovie v-for="(movie, i) in this.store.movies" :key="i" :movie="movie"/>
                </div>
            </div>
    
    
            <div class="text-white">
                <h2 class="fw-bold pt-5 pb-4">Tv Series</h2>
                <hr>
                <div class="row justify-content-center ">
                    <SingleSerie v-for="(serie, j) in this.store.series" :key="j" :serie="serie"/>
                </div>
            </div>
        </div>
    </main>
    
</template>

<style lang="scss" scoped>
    hr{
        border: 1px solid white;
    }
</style>
