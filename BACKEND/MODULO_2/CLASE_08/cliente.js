// Ejercicio 1: Conectar y enviar un mensaje al servidor
const net = require('net');
const client = net.createConnection({ port: 5000, host: 'localhost' });

client.on('connect', () => {
    console.log('✅ Conectado al servidor');
    client.write('¡Hola, servidor!');
});

client.on('data', (data) => {
    console.log('📩 Datos recibidos:', data.toString());
});



// Ejercicio 2: Implementar un timeout en la conexión
client.setTimeout(5000, () => {
    console.log('⏳ Tiempo de espera agotado');
    client.end();
});


// Ejercicio 3: Pausar y reanudar la recepción de datos
client.on('data', (data) => {
    console.log('📩 Recibido:', data.toString());
    client.pause();
    setTimeout(() => {
        console.log('▶️ Reanudando recepción de datos');
        client.resume();
    }, 3000);
});


// Ejercicio 4: Manejo de errores en la conexión
client.on('error', (err) => {
    console.log('❌ Error:', err.message);
});

client.on('close', () => {
    console.log('⚠️ Conexión cerrada inesperadamente');
});

// Ejercicio 5: Detectar cuando el servidor cierra la conexión
client.on('end', () => {
    console.log('🔌 Servidor cerró la conexión');
});

