import { reactive } from "vue";

export const store = reactive({
    trendUrl: 'https://api.themoviedb.org/3/trending/all/day?api_key=dfa13031b80dd317ebfeae295f5282f6',
    baseUrlMovies: 'https://api.themoviedb.org/3/search/movie?api_key=dfa13031b80dd317ebfeae295f5282f6&query=',
    baseUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=dfa13031b80dd317ebfeae295f5282f6&query=',
    baseUrlFlags: 'https://flagsapi.com/IT/flat/64.png',
    searchName: '',
    movies : [],
    series : [], 
});
