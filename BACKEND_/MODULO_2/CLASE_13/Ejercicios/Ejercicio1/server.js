const net = require('net');
const { handleBookRequest } = require('./controllers/bookController');

const PORT = 4000;

// Creación del servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const bookId = data.toString().trim();
        console.log(`Solicitud recibida para el libro con ID: ${bookId}`);

        const response = handleBookRequest(bookId);
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

// Servidor escucha en el puerto 4000
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});