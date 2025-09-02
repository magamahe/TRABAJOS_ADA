const net = require('net');
const { handleMovieRequest } = require('./controllers/movieController');

const PORT = 4002;

// Creación del servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        const movieTitle = data.toString().trim();
        console.log(`Solicitud recibida para la película: ${movieTitle}`);

        const response = handleMovieRequest(movieTitle);
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

// Servidor escucha en el puerto 4002
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});