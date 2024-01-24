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
            let queryMovie = this.store.searchName;

            let finalUrlString = this.store.baseUrlMovies + queryMovie

            axios.get(finalUrlString)
            .then((response)=>{
                this.store.movies = response.data.results;
                console.log(this.store.movies);
            });
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
            <ul v-for="(singleMovie, i) in this.store.movies">
                <li>{{singleMovie.title}}</li>
                <li>{{singleMovie.original_title}}</li>
                <li>{{singleMovie.original_language}}</li>
                <li>{{singleMovie.vote_average}}</li>
            </ul>
        </div>
    
    </header>
</template>

<style lang="scss" scoped>
</style>
