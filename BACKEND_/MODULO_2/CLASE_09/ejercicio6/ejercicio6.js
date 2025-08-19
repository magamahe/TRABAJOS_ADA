const net = require('net');

let intentosFallidos = 0; // Contador de intentos fallidos
const maxIntentos = 5; // Máximo de reintentos permitidos
const reintentos_ms = 2000; // Tiempo entre reintentos en milisegundos

function conectarCliente() {
    if (intentosFallidos >= maxIntentos) {
        console.log('❌ Se alcanzó el máximo de intentos. Saliendo del programa.');
        return;
    }

    const client = net.createConnection({ port: 5000 }, () => {
        console.log('✅ Conectado al servidor');
        client.write('¡Hola, servidor!');
        intentosFallidos = 0; // Resetear intentos si la conexión es exitosa
    });

    client.on('data', (data) => {
        console.log('📩 Datos recibidos:', data.toString());
    });

    client.on('error', (err) => {
        console.error('⚠️ Error en la conexión:', err.message);
    });

    client.on('close', () => {
        console.log(`⚠️ Conexión cerrada. Intentando reconectar... (${intentosFallidos + 1}/${maxIntentos})`);
        intentosFallidos++;
        setTimeout(conectarCliente, reintentos_ms);
    });
}

conectarCliente();
/* 
Explicación:
    Se usa una función conectarCliente() para poder reintentar la conexión automáticamente.
    Cada vez que se cierra (close), se incrementa el contador intentos.
    Si llega al máximo (MAX_INTENTOS), muestra un mensaje y no vuelve a reconectar.
    setTimeout(connect, REINTENTO_MS) permite esperar 2 segundos antes de reconectar. */


