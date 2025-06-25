/*  Ejercicio 3: Mostrar nombres en mayúsculas para imprimir etiquetas */

// Recibís un array de clientes y devolvés sus nombres en mayúsculas.
const clientes = ["Ana", "Juan", "Pedro"];
// Resultado: ["ANA", "JUAN", "PEDRO"]

function etiquetasClientes(nombres) {
  // tu código acá
  return nombres.map(nombre => nombre.toUpperCase());
}

console.log(etiquetasClientes(clientes));


