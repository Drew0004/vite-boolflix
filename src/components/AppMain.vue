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
    <div>
        <h2>FILMS</h2>
        <SingleMovie v-for="(movie, i) in this.store.movies" :key="i" :movie="movie"/>
    </div>

    <hr>

    <div>
        <h2>SERIES</h2>
        <SingleSerie v-for="(serie, j) in this.store.series" :key="j" :serie="serie"/>
    </div>
    
</template>

<style lang="scss" scoped>
</style>
