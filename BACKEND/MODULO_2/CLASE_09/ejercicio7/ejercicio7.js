const net = require('net');
const readline = require('readline');

// Configurar la lectura de la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = net.createConnection({ port: 5000 }, () => {
    console.log('✅ Conectado al servidor. Escribe un comando:');
});

client.on('data', (data) => {
    const mensaje = data.toString().trim();
    console.log(`📩 Servidor dice: ${mensaje}`);

    // Si el servidor envía "EXIT", cerrar conexión y terminar
    if (mensaje === 'EXIT') {
        console.log('🔚 El servidor ha solicitado la desconexión. Cerrando cliente...');
        client.end();
        rl.close();
    }
});

client.on('error', (err) => {
    console.error('❌ Error en la conexión:', err.message);
});

client.on('close', () => {
    console.log('⚠️ Conexión cerrada.');
    rl.close();
});

// Expresión regular para validar comandos: debe empezar con CMD_ y tener letras, números o _
const regex = /^CMD_\w+$/;

// Leer comandos desde la terminal
rl.on('line', (input) => {
    const comando = input.trim().toUpperCase();

    // Validar que el comando comience con "CMD_"
    if (regex.test(comando)) {
        client.write(comando);
    } else {
        console.log('⚠️ Comando no válido. Usa el formato: CMD_ALGO');
    }
});
/* 
Explicación paso a paso:
    Se usa readline para capturar la entrada del usuario.
    La RegExp /^CMD_\w+$/ asegura que solo se envíen comandos válidos (CMD_HOLA, CMD_TEST_123).
    Si el servidor responde "EXIT", se cierra la conexión con client.end() y se cierra readline. */
