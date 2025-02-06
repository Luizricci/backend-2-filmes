class MovieList {
    constructor() {
        this.movies = [];
    }
    addmovie(movie) {
        this.movies.push(movie);
    }
    getAllMovies(){
        return this.movies;
    }

    getMovieById(id){
        const movie = this.movies.find(movie => movie.id == id);
        if(!movie){
            throw new Error("Filme não encontrado");
        }
        return movie;
    }

    updateMovie(id, updateData) {
        const movie = getMovieById(id);
        Object.assign(movie, updateData);
        return movie;
    }

    deleteMovie(id) {
        this.movies = this.movies.filter(movie => movie.id != id);
    }
}

module.exports = MovieList;