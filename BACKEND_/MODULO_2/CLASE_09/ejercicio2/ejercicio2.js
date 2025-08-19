/* DESAFÍO 2: Cliente con Pausa y Reanudación de Datos */


const net = require('net');

const client = net.createConnection({ port: 5000 }, () => {
    console.log('✅ Conectado al servidor');
    client.write('¡Hola, servidor!');
});

client.on('data', (data) => {
    console.log('📩 Servidor dice:', data.toString());
});

// Pausar recepción a los 3 segundos
setTimeout(() => {
    console.log('⏸️ Pausando recepción de datos...');
    client.pause();
}, 3000);

// Reanudar recepción a los 8 segundos
setTimeout(() => {
    console.log('▶️ Reanudando recepción de datos...');
    client.resume();
}, 8000);

// Cerrar conexión tras 15 segundos
setTimeout(() => {
    console.log('🔚 Cerrando conexión...');
    client.end();
}, 15000);

/* 
Explicación:
    client.pause() detiene temporalmente la recepción de datos.
    client.resume() vuelve a recibir datos.
    Los setTimeout() permiten programar estas acciones después de ciertos segundos.
    client.end() cierra la conexión de manera controlada. */