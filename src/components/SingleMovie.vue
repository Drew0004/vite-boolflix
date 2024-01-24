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
            x = Math.round(x);
            x = x / 2;
            x = Math.ceil(x);
            return x
             
        },
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
    <img v-if="movie.poster_path !== null" :src="'https://image.tmdb.org/t/p/w780/'+movie.poster_path" :alt="movie.title">
    <div v-else class="bg-success w-25 ">
        <h2>pic not found</h2>
    </div>
    <ul>
        <li>{{movie.title}}</li>
        <li>{{movie.original_title}}</li>
        <li>{{movie.original_language}}</li>
        <li><img :src="'https://flagsapi.com/'+movie.original_language+'/flat/64.png'" alt=""></li>
        <li>{{movie.vote_average}}</li>
        <li class="d-inline-block" v-for="i in 5">
            <i :class="movie.vote_average >= i ? 'active' : '' " class="fa-solid fa-star"></i>
        </li>
    </ul>

</template>

<style lang="scss" scoped>
    .active{
        color: rgb(255, 0, 0);
    }
</style>
