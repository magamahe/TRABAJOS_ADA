// Ejercicio 2: Menú Interactivo con keyInSelect (usando Cancel automático)

const readlineSync = require('readline-sync');
const crypto = require('crypto');

const opciones = ['Ver mensaje de bienvenida', 'Generar hash de un texto'];

let salir = false;

while (!salir) {
  console.log("\n=== MENÚ PRINCIPAL ===");
  const indice = readlineSync.keyInSelect(opciones, 'Elige una opcion:');

  switch (indice) {
    case 0: // Ver mensaje
      console.log("\n¡Bienvenida al programa interactivo con Node.js!");
      break;

    case 1: // Generar hash
      const texto = readlineSync.question("Ingresa el texto que deseas convertir en hash: ");
      const hash = crypto.createHash('sha256').update(texto).digest('hex');
      console.log(`Hash SHA-256: ${hash}`);
      break;

    case -1: // Cancel automático de keyInSelect
      console.log("\nSaliendo del programa... ¡Hasta luego!");
      salir = true;
      break;
  }
}
