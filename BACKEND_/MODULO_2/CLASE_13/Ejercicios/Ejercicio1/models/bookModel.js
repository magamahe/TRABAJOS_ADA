const fs = require('fs');
const path = require('path');

// Ruta del archivo JSON que contiene la lista de libros
const filePath = path.join(__dirname, '../data/books.json');

// Función para obtener un libro por su ID
const getBookById = (id) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const books = JSON.parse(data);
        return books.find(book => book.id === id) || null;
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return null;
    }
};

module.exports = { getBookById };