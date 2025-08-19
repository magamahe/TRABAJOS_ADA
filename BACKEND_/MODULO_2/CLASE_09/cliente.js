// servidor.js
const net = require('net');

const server = net.createServer((socket) => {
    console.log('✅ Cliente conectado desde', socket.remoteAddress, socket.remotePort);

    // Mensaje de bienvenida al cliente
    socket.write('¡Bienvenido al servidor TCP!');

    // Escuchar datos del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        console.log(`📩 Cliente dice: ${mensaje}`);

        // Para probar el desafío 7: si llega CMD_EXIT, respondemos EXIT
        if (mensaje === 'CMD_EXIT') {
            socket.write('EXIT'); // le indica al cliente cerrar conexión
        } else {
            // Para los demás comandos o mensajes, devolvemos eco
            socket.write(`Recibido: ${mensaje}`);
        }
    });

    socket.on('close', () => {
        console.log('⚠️ Cliente desconectado.');
    });

    socket.on('error', (err) => {
        console.error('❌ Error en socket:', err.message);
    });
});

// Servidor escuchando en puerto 5000
server.listen(5000, () => {
    console.log('🚀 Servidor TCP escuchando en el puerto 5000');
});
