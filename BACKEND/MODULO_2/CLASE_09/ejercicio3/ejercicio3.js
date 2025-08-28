/* const net = require('net');

const client = net.createConnection({ port: 5000 }, () => {
    console.log('✅ Conectado al servidor');
    client.write('¡Hola, servidor!');
});

let timeout = setTimeout(() => {
    console.log('⏳ No se recibió respuesta en 10 segundos. Destruyendo conexión...');
    client.destroy();
}, 10000);

client.on('data', (data) => {
    console.log('📩 Datos recibidos:', data.toString());
    clearTimeout(timeout); // Cancela el timeout si llegan datos
}); */
/* 
Explicación:
    setTimeout() crea un límite de 10 segundos.
    Si no llega información, client.destroy() cierra la conexión inmediatamente.
    clearTimeout(timeout) cancela el cierre si los datos llegan a tiempo.

 */
