const { v4: uuid4 } = require("uuid");

class Movie {
    constructor(title, duration, releaseDate, director, synopsis){
        this.id = uuid4();
        this.title = title;
        this.director = director;
        this.releaseDate = releaseDate;
        this.synopsis = synopsis;
        this.duration = duration;
    }
}

module.exports = Movie;