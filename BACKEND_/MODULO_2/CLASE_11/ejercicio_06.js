// Ejercicio 6: Lista de Compras

const readlineSync = require('readline-sync');

const listaCompras = [];

console.log("🛒 Bienvenida al gestor de Lista de Compras");

let agregarMas = true;

while (agregarMas) {
  const item = readlineSync.question("Ingresa un producto para agregar a la lista: ");
  listaCompras.push(item);

  // Preguntamos si quiere agregar más
  agregarMas = readlineSync.keyInYNStrict("¿Deseas agregar otro producto? (Y/N) ");
}

// Mostramos la lista completa
console.log("\n📋 Tu lista de compras completa:");
listaCompras.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto}`);
});
