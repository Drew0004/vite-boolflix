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
        }
    },
    props:{
        movie: Object
    },
    mounted(){
        this.manageFlagLanguage();
    }
}
</script>

<template>

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
