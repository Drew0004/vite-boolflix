<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        manageFlagLanguage(){
            this.serie.original_language = this.serie.original_language.toUpperCase();
            if(this.serie.original_language == 'EN'){
                this.serie.original_language = 'US'
            }
            if(this.serie.original_language == 'JA'){
                this.serie.original_language = 'JP'
            }
            if(this.serie.original_language == 'KO'){
                this.serie.original_language = 'KR'
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
        serie: Object
    },
    mounted(){
        this.manageFlagLanguage();
        this.serie.vote_average = this.voteMathFloor(this.serie.vote_average);
    }
}
</script>

<template>
    <div class="single-card-container">
        <img v-if="serie.poster_path !== null" :src="'https://image.tmdb.org/t/p/w780/'+serie.poster_path" :alt="serie.name">
        <div v-else>
            <h2 class="text-center mt-4 text-decoration-underline">Pic not found</h2>
        </div>
        <ul class="my-info-text text-start px-4">
            <li class="mb-2">Titolo: {{serie.name}}</li>
            <li class="mb-2">Titolo originale: {{serie.original_name}}</li>
            <li>Lingua: {{serie.original_language}}</li>
            <li class="mb-2"><img class="country-flag" :src="'https://flagsapi.com/'+serie.original_language+'/flat/64.png'" alt=""></li>
            <li class="mb-2 d-inline-block pe-2">Rating: {{serie.vote_average}}</li>
            <li class="d-inline-block" v-for="i in 5">
                <i :class="serie.vote_average >= i ? 'active' : '' " class="px-1 fa-solid fa-star"></i>
            </li>
            <li class="fs-em pb-3">Overview: {{ serie.overview }}</li>
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
        cursor: pointer;

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
