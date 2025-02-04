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

    deletemovie(id) {
        this.movies = this.movies.filter(movie => movie.id != id);
    }

    getTop10movies() {
        return this.movies.sort((a,b) => b.plays - a.plays).slice(0, 10);
    }

    getTotalmovies(){
        return this.movies.length;
    }
}

module.exports = MovieList;