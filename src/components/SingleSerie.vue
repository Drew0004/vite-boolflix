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
        }

    },
    props:{
        serie: Object
    },
    mounted(){
        this.manageFlagLanguage();
    }
}
</script>

<template>
    <ul>
        <li>{{serie.name}}</li>
        <li>{{serie.original_name}}</li>
        <li>{{serie.original_language}}</li>
        <li><img :src="'https://flagsapi.com/'+serie.original_language+'/flat/64.png'" alt=""></li>
        <li>{{serie.vote_average}}</li>
    </ul>
</template>

<style lang="scss" scoped>
</style>
