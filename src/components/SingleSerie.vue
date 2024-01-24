<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    props:{
        serie: Object
    }
}
</script>

<template>
    <ul>
        <li>{{serie.name}}</li>
        <li>{{serie.original_name}}</li>
        <li>{{serie.original_language}}</li>
        <li>{{serie.vote_average}}</li>
    </ul>
</template>

<style lang="scss" scoped>
</style>
