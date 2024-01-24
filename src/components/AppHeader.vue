<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        getDataFromAPi(){
            let queryString = this.store.searchName;

            let finalUrlStringMovie = this.store.baseUrlMovies + queryString;
            let finalUrlStringSerie = this.store.baseUrlSeries + queryString;

            axios.get(finalUrlStringMovie)
            .then((response)=>{
                this.store.movies = response.data.results;
                console.log('Array film',this.store.movies);
            });

            axios.get(finalUrlStringSerie)
            .then((response)=>{
                this.store.series = response.data.results;
                console.log('Array serie',this.store.series);
            });

            this.store.searchName = '';
        }

    }
}
</script>

<template>
    <header>
        
        <div>
            logo
        </div>
        
        <form @submit.prevent="getDataFromAPi()">
            <input v-model="this.store.searchName" type="text" placeholder="Cerca un film...">
            <button>Cerca</button>
        </form>

        <div>
            <h2>FILMS</h2>
            <ul v-for="(singleMovie, i) in this.store.movies">
                <li>{{singleMovie.title}}</li>
                <li>{{singleMovie.original_title}}</li>
                <li>{{singleMovie.original_language}}</li>
                <li>{{singleMovie.vote_average}}</li>
            </ul>
        </div>

        <hr>

        <div>
            <h2>SERIES</h2>
            <ul v-for="(singleSerie, j) in this.store.series">
                <li>{{singleSerie.name}}</li>
                <li>{{singleSerie.original_name}}</li>
                <li>{{singleSerie.original_language}}</li>
                <li>{{singleSerie.vote_average}}</li>
            </ul>
        </div>
    
    </header>
</template>

<style lang="scss" scoped>
</style>
