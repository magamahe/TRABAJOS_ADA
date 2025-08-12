const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado.');

    // Establece un timeout de 10 segundos.
    socket.setTimeout(10000);

    // Evento 'timeout': Cierra la conexión si no se reciben datos.
    socket.on('timeout', () => {
        console.log('Tiempo de espera agotado. Cerrando conexión.');
        socket.end();
    });

    // Evento 'data': Reinicia el timeout cada vez que se reciben datos.
    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data.toString()}`);
        socket.setTimeout(10000); // Reinicia el timeout.
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});
