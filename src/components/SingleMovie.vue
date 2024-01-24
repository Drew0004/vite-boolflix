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
    <div class="single-card-container">
        <img v-if="movie.poster_path !== null" :src="'https://image.tmdb.org/t/p/w780/'+movie.poster_path" :alt="movie.title">
        <div v-else class="single-card-container">
            <h2>pic not found</h2>
        </div>
        <ul class="my-info-text text-start px-4">
            <li class="mb-2">Titolo: {{movie.title}}</li>
            <li class="mb-2">Titolo originale: {{movie.original_title}}</li>
            <li>Lingua: {{movie.original_language}}</li>
            <li class="mb-2"><img class="country-flag" :src="'https://flagsapi.com/'+movie.original_language+'/flat/64.png'" alt=""></li>
            <li class="mb-2 d-inline-block pe-2">Rating: {{movie.vote_average}}</li>
            <li class="d-inline-block" v-for="i in 5">
                <i :class="movie.vote_average >= i ? 'active' : '' " class="px-1 fa-solid fa-star"></i>
            </li>
            <li class="fs-em pb-3">Overview: {{ movie.overview }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .fs-em{
        font-size: 0.8em;
    }
    .single-card-container{
        width: calc((100% / 4) - 30px);
        border: 0.5px solid #E50C14;
        border-radius: 20px;
        margin: 15px 15px;
        padding: 0;
        position: relative;
        overflow: hidden;

        &:hover .single-card-container{

        }

        &:hover .my-info-text{
            display: block;
            background-color: rgba($color: #000000, $alpha: 0.8);
            padding-top: 100%;
        }

        img{
            display: block;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }

        .my-info-text{
            position: absolute;
            bottom: 0px;
            display: none;
        }

        .country-flag{
            width: 70px;
            height: 70px;
        }
        .active{
            color: #E50C14;
        }
    }
</style>
