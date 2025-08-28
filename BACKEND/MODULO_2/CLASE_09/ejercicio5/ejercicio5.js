const net = require('net');

const client = net.createConnection({ port: 5000 }, () => {
    console.log('✅ Conectado al servidor');
    client.write('¡Hola, servidor!');
});

client.on('data', (data) => console.log('📩 Datos recibidos:', data.toString()));
client.on('end', () => console.log('🔚 Servidor cerró la conexión.'));
client.on('close', () => console.log('🚪 Conexión cerrada.'));
client.on('error', (err) => console.error('❌ Error:', err.message));

setTimeout(() => {
    console.log('🛠️ Llamando a unref()...');
    client.unref();// Permite que el proceso de Node termine si no hay nada pendiente
}, 10000);

setTimeout(() => {
    console.log('🔄 Llamando a ref()...');
    client.ref(); // Mantiene el proceso activo nuevamente
}, 15000);

setTimeout(() => {
    console.log('🔚 Finalizando conexión...');
    client.end();
}, 20000);

/* 
Explicación:
    unref() indica a Node.js que no espere esta conexión para terminar el proceso.
    ref() revierte esto y mantiene el proceso activo.
    Esto permite controlar si el proceso debe continuar ejecutándose aun cuando haya temporizadores activos. */