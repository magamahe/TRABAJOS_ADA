/*   Ejercicio 10: Verificar stock de un producto*/

// Dado un array de productos y un nombre, devolvé true si hay stock (>0).
const productos = [
  { nombre: "Impresora", stock: 0 },
  { nombre: "Router", stock: 5 }
];
// Ejemplo: verificarStock(productos, "Router") → true
function verificarStock(lista, nombreProducto) {
  // tu código acá
  return lista.some(p => p.nombre === nombreProducto && p.stock > 0)
}


console.log(verificarStock(productos, "Impresora"));
console.log(verificarStock(productos, "Router"));