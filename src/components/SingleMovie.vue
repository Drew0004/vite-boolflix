<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        manageFlagLanguage(){
            this.movie.original_language = this.movie.original_language.toUpperCase();
            if(this.movie.original_language == 'EN'){
                this.movie.original_language = 'US'
            }
            if(this.movie.original_language == 'JA'){
                this.movie.original_language = 'JP'
            }
        },
        voteMathFloor(x){
            return Math.round(x);
        }
    },
    props:{
        movie: Object
    },
    mounted(){
        this.manageFlagLanguage();
        this.movie.vote_average = this.voteMathFloor(this.movie.vote_average);
    }
}
</script>

<template>
    <img v-if="movie.backdrop_path !== null" :src="'https://image.tmdb.org/t/p/w780/'+movie.backdrop_path" :alt="movie.title">
    <div v-else class="bg-success w-25 ">
        <h2>pic not found</h2>
    </div>
    <ul>
        <li>{{movie.title}}</li>
        <li>{{movie.original_title}}</li>
        <li>{{movie.original_language}}</li>
        <li><img :src="'https://flagsapi.com/'+movie.original_language+'/flat/64.png'" alt=""></li>
        <li>{{movie.vote_average}}</li>
    </ul>

</template>

<style lang="scss" scoped>
</style>
