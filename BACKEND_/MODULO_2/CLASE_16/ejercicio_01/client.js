/* const net = require('net');
const readline = require('readline');

// Crear interfaz para recibir datos desde la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creamos nuestro cliente y lo conectamos al servidor
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor TCP.');
    console.log('Escribe un mensaje o utiliza el comando "/historial" para ver los mensajes guardados.');
});

// Escuchamos el evento 'data' para recibir la informacion del servidor
client.on('data', (data) => {
    console.log(`Mensaje del servidor: ${data.toString()}`);
});

// Manejamos la desconexion
client.on('end', () => {
    console.log('Desconectado del servidor.');
    rl.close();
});

// Leer mensajes desde la terminal y enviarlos al servidor
rl.on('line', (input) => {
    if (input.trim().toLowerCase() === '/salir') {
        client.end();
    } else {
        client.write(input);
    }
}); */

// client.js
import net from "net";
import readline from "readline";

// Crear interfaz para recibir datos desde la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Creamos nuestro cliente y lo conectamos al servidor
const client = net.createConnection({ port: 3000 }, () => {
  console.log("Conectado al servidor TCP.");
  console.log('Escribe un mensaje o utiliza el comando "/historial" para ver los mensajes guardados.'); 
});

// Escuchamos el evento 'data' para recibir la información del servidor
client.on("data", (data) => {
  console.log(`Mensaje del servidor: ${data.toString()}`);
});

// Manejamos la desconexión
client.on("end", () => {
  console.log("Desconectado del servidor.");
  rl.close();
});

// Leer mensajes desde la terminal y enviarlos al servidor
rl.on("line", (input) => {
  if (input.trim().toLowerCase() === "/salir") {
    client.end();
  } else {
    client.write(input);
  }
});
