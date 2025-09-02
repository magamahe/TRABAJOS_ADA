const net = require('net');
const { handleHotelRequest } = require('./controllers/hotelController');

const PORT = 4001;

// Creación del servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const hotelId = data.toString().trim();
        console.log(`Solicitud recibida para el hotel con ID: ${hotelId}`);

        const response = handleHotelRequest(hotelId);
        socket.write(response);
        socket.end(); // Cierra la conexión después de responder
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
        console.error('Error en el servidor:', err);
    });
});

// Servidor escucha en el puerto 4001
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});