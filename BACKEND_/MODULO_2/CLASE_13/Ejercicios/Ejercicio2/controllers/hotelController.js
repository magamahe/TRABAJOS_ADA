const { getHotelById } = require('../models/hotelModel');
const { formatHotelResponse } = require('../views/hotelView');

// Función para manejar la solicitud del cliente
const handleHotelRequest = (hotelId) => {
    const hotel = getHotelById(hotelId);
    return formatHotelResponse(hotel);
};

module.exports = { handleHotelRequest };