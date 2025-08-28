// cliente.js
const net = require('net');
const readline = require('readline');

let timeout;

// Función para crear un cliente
function crearCliente() {
    const client = net.createConnection({ port: 5000, host: 'localhost' });

    // Ejercicio 1 y 6: conexión y cliente interactivo
    client.on('connect', () => {
        console.log('✅ Conectado al servidor');
        client.write('¡Hola, servidor!');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        function enviarMensaje() {
            rl.question('Escribe un mensaje: ', (msg) => {
                if (msg === 'salir') {
                    client.end();
                    rl.close();
                } else {
                    client.write(msg);
                    enviarMensaje();
                }
            });
        }

        enviarMensaje();
    });

    // Ejercicio 3 y 10: recepción de datos con pausa y timeout
    client.on('data', (data) => {
        console.log('📩 Datos recibidos:', data.toString());

        // Pausar recepción por 3s
        client.pause();
        setTimeout(() => {
            console.log('▶️ Reanudando recepción de datos');
            client.resume();
        }, 3000);

        // Timeout de 10s sin datos
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log('⚠️ No hay datos del servidor, cerrando conexión');
            client.end();
        }, 10000);
    });

    // Ejercicio 2: timeout inicial de 5s si no hay respuesta
    client.setTimeout(5000, () => {
        console.log('⏳ Tiempo de espera agotado');
        client.end();
    });

    // Ejercicio 4 y 7: manejo de errores y destrucción
    client.on('error', (err) => {
        console.log('🚫 Error o conexión destruida:', err.message);
        client.destroy();
        setTimeout(crearCliente, 3000); // Ejercicio 9: reconectar automáticamente
    });

    // Ejercicio 5: detectar cuando el servidor cierra la conexión
    client.on('end', () => {
        console.log('🔌 Servidor cerró la conexión');
    });

    // Ejercicio 9: reconectar al cerrar
    client.on('close', () => {
        console.log('⚠️ Conexión cerrada, reintentando...');
        setTimeout(crearCliente, 3000);
    });

    // Ejercicio 8: unref/ref
    client.unref();
    setTimeout(() => {
        console.log('🔄 Manteniendo proceso activo con ref()');
        client.ref();
    }, 5000);

    return client;
}

// Crear el primer cliente
crearCliente();
