/* // Imporatamos los modulos que vamos a utilizar
const net = require('net');
const fs = require('fs');
const path = require('path');

// Creamos una ruta al archivo JSON donde se almacenaran los mensajes
const rutaMensajes = path.join(__dirname, 'mensajes.json');

// Creamos el servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    // Escuchamos mensajes del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();

        if (mensaje === '/historial') {
            // Leemos y enviamos el historial de mensajes almacenado en el JSON
            const historial = fs.readFileSync(rutaMensajes, 'utf-8');
            socket.write(`Historial de mensajes:\n${historial}\n`);
        } else {
            // Guardar el mensaje en el archivo JSON
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8'));
            mensajes.push({ fecha: new Date().toISOString(), mensaje });
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2));

            // Le enviamos una confirmacion al cliente de que se mensaje se guardo con exito
            socket.write('Mensaje guardado con exito!\n');
        }
    });

    // Manejo de evento 'end' (desconexion)
    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

// Iniciamos el servidor
server.listen(3000, () => {
    console.log('Servior esuchando en el puerto 3000.');
}); */
// server.js
import net from "net";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Reconstruimos __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rutaMensajes = path.join(__dirname, "mensajes.json");

// Creamos el archivo si no existe
if (!fs.existsSync(rutaMensajes)) {
  fs.writeFileSync(rutaMensajes, JSON.stringify([]));
}

const server = net.createServer(socket => {
  console.log("Cliente conectado.");

  socket.on("data", data => {
    const mensaje = data.toString().trim();

    if (mensaje === "/historial") {
      const historial = fs.readFileSync(rutaMensajes, "utf-8");
      socket.write(`Historial de mensajes:\n${historial}\n`);
    } else {
      const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, "utf-8"));
      mensajes.push({ fecha: new Date().toISOString(), mensaje });
      fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2));
      socket.write("Mensaje guardado con éxito!\n");
    }
  });

  socket.on("end", () => {
    console.log("Cliente desconectado.");
  });
});

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000.");
});
