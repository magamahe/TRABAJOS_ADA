const net = require('net');

// Variable global para contar conexiones
let contadorConexiones = 0; 

const server = net.createServer((socket) => {
    contadorConexiones++;
    console.log(`Nuevo cliente conectado. Total: ${contadorConexiones}`);

    // Enviar mensaje al cliente
    socket.write(`Bienvenido! Actualmente hay ${contadorConexiones} cliente(s) conectado(s).\n`);

    // Evento de desconexión
    socket.on('close', () => {
        contadorConexiones--;
        console.log(`Cliente desconectado. Total: ${contadorConexiones}`);
    });

    // Evento de error para evitar que el servidor se caiga
    socket.on('error', (err) => {
        console.error(`Error en conexión: ${err.message}`);
    });
});

// Arrancar el servidor
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});
