/* Ejercicio 5: Ordenar lista de productos alfabéticamente*/

// Ordená un array de productos por nombre alfabéticamente.
const productos = ["Teclado", "Mouse", "Auriculares"];
// Resultado: ["Auriculares", "Mouse", "Teclado"]


function ordenarProductos(lista) {
  // tu código acá
  return [...lista].sort(); //practica de [...]

}

console.log(`original: ${productos}`)

console.log(`ordenado alfabeticamente: ${ordenarProductos(productos)}`);

console.log(`original despues de ordenar: ${productos}`)


