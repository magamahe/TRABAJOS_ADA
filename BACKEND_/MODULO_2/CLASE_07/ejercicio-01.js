const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado.');

    // Evento 'data': Recibe datos del cliente y los devuelve (eco).
    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data.toString()}`);
        socket.write(data); // Envía los datos de vuelta al cliente.
    });

    // Evento 'end': El cliente cerró la conexión.
    socket.on('end', () => {
        console.log('El cliente se ha desconectado.');
    });

    // Evento 'close': La conexión se cerró.
    socket.on('close', () => {
        console.log('Conexión cerrada.');
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});




