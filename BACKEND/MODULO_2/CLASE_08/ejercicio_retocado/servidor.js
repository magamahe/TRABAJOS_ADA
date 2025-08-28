// servidor.js
const net = require('net');

const server = net.createServer((socket) => {
    console.log('✅ Cliente conectado');

    // Enviar un mensaje de bienvenida
    socket.write('¡Hola, cliente!');

    // Escuchar datos del cliente
    socket.on('data', (data) => {
        console.log('📩 Mensaje recibido del cliente:', data.toString());

        // Para Ejercicio 5: cerrar la conexión después de recibir "¿Sigues ahí, servidor?"
        if (data.toString().includes('¿Sigues ahí, servidor?')) {
            console.log('🔌 Cerrando conexión con el cliente...');
            socket.end();
        }
    });

    // Detectar desconexión del cliente
    socket.on('end', () => {
        console.log('❌ Cliente desconectado');
    });

    socket.on('error', (err) => {
        console.log('⚠️ Error en el socket:', err.message);
    });
});

server.listen(5000, () => {
    console.log('🚀 Servidor escuchando en localhost:5000');
});
