const net = require('net');

const server = net.createServer((socket) => {
    console.log(`Nuevo cliente conectado`);

    // Evento 'data': Procesa los mensajes del cliente.
    socket.on('data', (data) => {
        const message = data.toString().trim().toLowerCase();;

        if (message === 'fecha') {
            const ahora = new Date().toLocaleString();
            socket.write(`Fecha y hora actual: ${ahora}\n`);
        } else if (message === 'ip') {
            //ipv6
            socket.write(`Tu dirección IP es: ${socket.remoteAddress}\n`);
        } else if (message === 'salir') {
            socket.write('Cerrando conexión...\n');
            socket.end(); // Cierra la conexión.
        }
        else {
            socket.write(`Comando no reconocido \n`);
        }

    }); socket.on('close', () => {
        contadorConexiones--;
        console.log(`Cliente desconectado. Total: ${contadorConexiones}`);
    });

    socket.on('error', (err) => {
        console.error(`Error en conexión: ${err.message}`);
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});