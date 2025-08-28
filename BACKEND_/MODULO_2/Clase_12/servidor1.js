/* Valida RUTAS */

const net = require("net");
const path = require("path");

// Crear el servidor TCP
const server = net.createServer((socket) => {
  console.log("Cliente conectado.");

  socket.on("data", (data) => {
    // Convertir datos recibidos a una cadena y eliminar espacios en blanco
    const ruta = data.toString().trim();
    
    // Verificar si la ruta es absoluta
    const esAbsoluta = path.isAbsolute(ruta);

    // Crear la respuesta basada en el tipo de ruta
    const response =esAbsoluta
        ? `✅ La ruta "${ruta}" es ABSOLUTA\n`
        : `📂 La ruta "${ruta}" es RELATIVA\n`;

    // Enviar la respuesta al cliente
    socket.write(response);
  });

  // Manejar la desconexión del cliente
  socket.on("end", () => console.log("Cliente desconectado."));
});

// Configurar el puerto en el que el servidor escuchará
server.listen(8080, () => {
  console.log("Servidor escuchando en puerto 8080...");
});
