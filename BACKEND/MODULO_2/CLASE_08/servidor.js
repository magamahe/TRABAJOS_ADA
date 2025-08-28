// servidor.js modificado para probar Ejercicio 5
const net = require('net');

const server = net.createServer((socket) => {
    console.log('✅ Cliente conectado');

    socket.on('data', (data) => {
        console.log('📩 Mensaje recibido del cliente:', data.toString());

        // Responder al cliente
        socket.write('¡Hola, cliente!');

        // Cerrar la conexión para probar Ejercicio 5
        console.log('🔌 Cerrando conexión con el cliente...');
        socket.end(); // <-- esto provoca el evento 'end' en el cliente
    });

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



// Ejercicio 6: Cliente interactivo con la usuaria
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function enviarMensaje() {
    readline.question('Escribe un mensaje: ', (msg) => {
        if (msg === 'salir') {
            client.end();
            readline.close();
        } else {
            client.write(msg);
            enviarMensaje();
        }
    });
}
client.on('connect', enviarMensaje);

// Ejercicio 7: Cliente que destruye el socket al fallar
client.on('error', () => {
    console.log('🚫 Conexión destruida');
    client.destroy();
});

// Ejercicio 8: Cliente con unref/ref para control de procesos
client.unref();
setTimeout(() => {
    console.log('🔄 Manteniendo proceso activo con ref()');
    client.ref();
}, 5000);

// Ejercicio 9: Cliente que reconecta automáticamente
function reconectar() {
    setTimeout(() => {
        console.log('🔄 Reintentando conexión...');
        client.connect(5000, 'localhost');
    }, 3000);
}
client.on('error', reconectar);
client.on('close', reconectar);

// Ejercicio 10: Cliente que detecta pérdida de conexión
let timeout = setTimeout(() => {
    console.log('⚠️ No hay datos del servidor, cerrando conexión');
    client.end();
}, 10000);
client.on('data', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('⚠️ No hay datos del servidor, cerrando conexión');
        client.end();
    }, 10000);
});