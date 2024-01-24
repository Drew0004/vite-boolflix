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
            <!-- <img src="../../public/LogoNetflix.png" alt="Logo Netflix"> -->
        </div>
        
        <form @submit.prevent="getDataFromAPi()">
            <input v-model="this.store.searchName" type="text" placeholder="Cerca un film...">
            <button>Cerca</button>
        </form>
    
    </header>
</template>

<style lang="scss" scoped>
</style>
