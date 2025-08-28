/* DESAFÍO 1: Cliente con Reconexión Automática */

// Importa el módulo de TCP de Node.js
const net = require('net');

function conectarCliente() {
    const client = net.createConnection({ port: 5000 }, () => {
        console.log('✅ Conectado al servidor');
        client.write('¡Hola, servidor!');// Mensaje inicial
    });

    // Manejar datos recibidos
    client.on('data', (data) => {
        console.log('📩 Servidor dice:', data.toString());// Mostrar datos del servidor
    });

    // Manejar errores
    client.on('error', (err) => {
        console.error('❌ Error en la conexión:', err.message);// Manejo de errores
    });

    // Manejar cierre de conexión y reconectar
    client.on('close', () => {
        console.log('⚠️ Conexión cerrada. Reintentando en 3 segundos...');
        setTimeout(conectarCliente, 3000);// Reintenta la conexión cada 3 segundos
    }); 
}

conectarCliente();
/* 
Explicación paso a paso:
    net.createConnection() crea un cliente TCP conectado al puerto 5000.
    client.write() envía un mensaje inicial al servidor.
    client.on('data') escucha datos entrantes del servidor.
    client.on('error') muestra errores de conexión en consola.
    client.on('close') se activa si la conexión se cierra; setTimeout(connect, 3000) permite reconectar automáticamente cada 3 segundos.

Por qué usamos función:
    El objetivo es reconectar automáticamente cada vez que se cierra la conexión.
    Cuando la conexión se cierra (close), necesitamos volver a crear un cliente nuevo.
    Usar una función permite llamarla de nuevo dentro de setTimeout y repetir todo el proceso de conexión sin duplicar código.
    
                       ┌────────────────────────────┐
                       │      Inicio del cliente    │
                       └─────────────┬─────────────┘
                                     │
                                     ▼
                     ┌────────────────────────────┐
                     │ ¿Necesitas reconexión      │
                     │ automática si se cierra?   │
                     └───────┬───────────────┬────┘
                             │ Sí            │ No
                             ▼                ▼
                  ┌─────────────────┐   ┌─────────────────┐
                  │ Crear función   │   │ Crear cliente   │
                  │ connect() que   │   │ una sola vez    │
                  │ se llama de     │   │ y manejar eventos│
                  │ nuevo en close  │   │ con setTimeout/ │
                  │ y error         │   │ setInterval     │
                  └─────────────────┘   └─────────────────┘
                             │
                             ▼
                 ┌─────────────────────────┐
                 │ Reconexión automática   │
                 │ cada vez que se cierre  │
                 └─────────────────────────┘


    */





