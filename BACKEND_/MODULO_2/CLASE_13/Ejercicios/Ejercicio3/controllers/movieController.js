const { getMovieByTitle } = require('../models/movieModel');
const { formatMovieResponse } = require('../views/movieView');

// Función para manejar la solicitud del cliente
const handleMovieRequest = (movieTitle) => {
    const movie = getMovieByTitle(movieTitle);
    return formatMovieResponse(movie);
};

module.exports = { handleMovieRequest };