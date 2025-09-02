const fs = require('fs');
const path = require('path');

// Ruta del archivo JSON con la lista de hoteles
const filePath = path.join(__dirname, '../data/hotels.json');

// Función para obtener la disponibilidad de un hotel por su ID
const getHotelById = (id) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const hotels = JSON.parse(data);
        return hotels.find(hotel => hotel.id === id) || null;
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return null;
    }
};

module.exports = { getHotelById };