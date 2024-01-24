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
    <img v-if="serie.poster_path !== null"  :src="'https://image.tmdb.org/t/p/w780/'+serie.poster_path" :alt="serie.name">
    <div v-else class="bg-success w-25 ">
        <h2>pic not found</h2>
    </div>
    <ul>
        <li>{{serie.name}}</li>
        <li>{{serie.original_name}}</li>
        <li>{{serie.original_language}}</li>
        <li><img :src="'https://flagsapi.com/'+serie.original_language+'/flat/64.png'" alt=""></li>
        <li>{{serie.vote_average}}</li>
        <li class="d-inline-block" v-for="i in 5">
            <i :class="serie.vote_average >= i ? 'active' : '' " class="fa-solid fa-star"></i>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    .active{
        color: rgb(255, 0, 0);
    }
</style>
