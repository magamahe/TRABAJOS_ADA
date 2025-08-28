const net = require('net');

const client = net.createConnection({ port: 5000 }, () => {
    console.log('✅ Conectado al servidor');
    client.write('¡Hola, servidor!');
});

const interval = setInterval(() => {
    console.log('📤 Enviando mensaje automático...');
    client.write('Mensaje automático');// Enviar mensaje cada 5 segundos
}, 5000);

setTimeout(() => {
    console.log('🔚 Cerrando conexión...');
    clearInterval(interval); // Detener envío de mensajes
    client.end(); // Cerrar conexión a los 20 segundos
}, 20000);

/* 
Explicación:
    setInterval() permite enviar mensajes repetidos cada cierto tiempo.
    clearInterval() detiene el envío cuando ya no es necesario.
    client.end() cierra la conexión limpiamente. */

