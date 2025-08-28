const net = require("net");
const readline = require("readline");

// Crear interfaz para leer desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir datos al usuario
rl.question("Ingresa el puerto del servidor (8080 / 8081 / 8082): ", (puerto) => {
  const client = net.createConnection({ port: parseInt(puerto) }, () => {
    console.log(`Conectado al servidor en puerto ${puerto}`);
    preguntarRuta();
  });

  // Mostrar respuesta del servidor
  client.on("data", (data) => {
    console.log("Respuesta del servidor:\n" + data.toString());
    preguntarRuta();
  });

  client.on("end", () => {
    console.log("Desconectado del servidor");
    rl.close();
  });

  function preguntarRuta() {
    rl.question("Ingresa una ruta (o 'exit' para salir): ", (ruta) => {
      if (ruta.toLowerCase() === "exit") {
        client.end();
      } else {
        client.write(ruta);
      }
    });
  }
});
