const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado.');

    // Evento 'error': Maneja errores en la conexión.
    socket.on('error', (err) => {
        console.error(`Error en la conexión: ${err.message}`);
        socket.destroy(); // Cierra la conexión.
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});



