// Ejercicio 4: Validación de Contraseña

const readlineSync = require('readline-sync');

// Definimos la contraseña correcta
const PASSWORD = "secreto123";

// Solicitamos la contraseña al usuario
const pass = readlineSync.question("Ingresa tu contrasena: ", {
  hideEchoBack: true // oculta lo que escribe el usuario en consola
});

// Validamos
if (pass === PASSWORD) {
  console.log("✅ Acceso concedido. Bienvenida!");
} else {
  console.log("❌ Acceso denegado. Contraseña incorrecta.");
}
