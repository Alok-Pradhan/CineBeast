const TMDB_BASE_API_URL = "https://api.themoviedb.org/3" 
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWEyM2EwMjkzNDY3ODY3ODcwYTNmOTZhYTdiOGU1MyIsIm5iZiI6MTcyOTk2NTU4Mi42NTkxMjIsInN1YiI6IjYxYjcwNGZmMjIzZTIwMDA2MzQxOTJlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TNwoxalZ9WQ9KU1h5zjI6TXianmtiQPXD7jHxP_qVdI"
const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w780"
const ENDPOINT_COLLECTION={
    carousel:"/discover/movie?include_adult=true&include_video=false&language=in-HI&page=1&primary_release_year=2024&region=IN&sort_by=popularity.desc&with_origin_country=IN&with_original_language=hi",
}
export { ENDPOINT_COLLECTION,TMDB_BASE_API_URL,TMDB_TOKEN,TMDB_IMG_URL}