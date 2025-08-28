const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado.');

    // Evento 'data': Procesa los mensajes del cliente.
    socket.on('data', (data) => {
        const message = data.toString().trim();

        if (message === 'Hola') {
            socket.write('¡Bienvenido!\n');
        } else if (message === 'Adios') {
            socket.write('¡Hasta luego!\n');
            socket.end(); // Cierra la conexión.
        } else {
            socket.write(`Mensaje recibido: ${message}\n`);
        }
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});

