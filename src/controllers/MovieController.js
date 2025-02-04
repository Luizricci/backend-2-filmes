const Movie = require('../models/movie');
const MovieList = require('../models/movieList');

const lista = new MovieList();

const filme1 = new Movie('Queer', '2h 16m', '12/12/2024', 'Luca Guadagnino', 'William Lee, um americano que vive na Cidade do México, passa a maior parte dos dias completamente só, com exceção de alguns contatos com outros membros da comunidade. Seu encontro com Eugene Allerton, um ex-soldado expatriado, faz com que ele acredite que é possível ter uma conexão íntima.');

lista.addMovie(filme1);

const router = {
    addMovie: (req, res) => {
        try {
            const { title, duration, releaseDate, director, synopsis } =  req.body;
            if(!title || !releaseDate || !duration || !director || !synopsis) {
                throw new Error('Preencha todos os campos!')
            }
            const filme = new Movie (title, duration, releaseDate, director, synopsis)
            lista.addMovie(filme);
            res.status(201).json({message: "Criado com sucesso"});
        } catch (error) {
            res.status(400).json({message: "Erro ao criar o filme", error});
        }
    },

    getAllMovies: (req, res) => {
        try {
            const Movies = lista.getAllMovies();
            res.status(200).json(Movies);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar o filme', error});
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({
                message: 'Erro ao buscar o filme por id', error });
        }
    },

    updateMovie: (req, res) => {
        try {
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json('Erro ao atualizar o filme', error)
        }
    },

    deleteMovie: (req, res) => {
        try {
            lista.deleteMovie(req.params.id);
            res.status(200).json({
                message: 'FIlme deletado com sucesso'
            })
        } catch (error) {
            res.status(404).json('Erro ao deletar o filme', error);
        }
    },
};

module.exports = router;