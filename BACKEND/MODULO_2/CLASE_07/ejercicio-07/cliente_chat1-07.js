const net = require('net');
const readline = require('readline');

// Crear interfaz para leer desde consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Mensaje> '
});

const client = net.createConnection({ port: 3000 }, () => {
    console.log('✅ Conectado al servidor de chat.');
    console.log('Escribí un mensaje y presioná ENTER para enviarlo.');
    rl.prompt();
});

// Escuchar mensajes del servidor
client.on('data', (data) => {
    console.log('\n📩 Mensaje recibido:', data.toString().trim());
    rl.prompt();
});

// Manejo de desconexión
client.on('end', () => {
    console.log('❌ Desconectado del servidor');
    process.exit();
});

// Manejo de errores
client.on('error', (err) => {
    console.error('Error de conexión:', err.message);
});

rl.on('line', (input) => {
    if (input.trim().toLowerCase() === 'exit') {
        console.log('Desconectando del chat...');
        client.end();
        rl.close();
    } else {
        client.write(input);
    }
});

rl.on('close', () => {
    console.log('Interfaz cerrada. ¡Hasta luego!');
    process.exit(0);
});

