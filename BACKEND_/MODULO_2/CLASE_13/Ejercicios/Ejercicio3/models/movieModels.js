const fs = require('fs');
const path = require('path');

// Ruta del archivo JSON con la lista de películas
const filePath = path.join(__dirname, '../data/movies.json');

// Función para obtener una película por título (ignorando mayúsculas y minúsculas)
const getMovieByTitle = (title) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const movies = JSON.parse(data);
        return movies.find(movie => movie.titulo.toLowerCase() === title.toLowerCase()) || null;
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return null;
    }
};

module.exports = { getMovieByTitle };