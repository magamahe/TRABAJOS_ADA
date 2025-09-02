// Función para formatear la respuesta del hotel en formato JSON
const formatHotelResponse = (hotel) => {
    if (!hotel) {
        return JSON.stringify({ error: 'Hotel no encontrado' });
    }
    return JSON.stringify(hotel, null, 2);
};

module.exports = { formatHotelResponse };