/* ● Ejercicio 3: Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto pueden usar forEach o investigar el método “findIndex()”
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
4. Verifique si existe un producto con precio mayor a 50. Para esto investigar el método “.some()” https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
5. Devuelva una cadena de nombres de productos separados por comas. */
// Array de productos
const productos = [
  { nombre: "Mermelada", precio: 10 },
  { nombre: "Pasta de Aceituna", precio: 35 },
  { nombre: "Dulce de Batata", precio: 60 },
  { nombre: "Chocolate en  Rama", precio: 100 }
];

// Función para normalizar texto (sin tildes, minúsculas, sin espacios extra)
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD") // descompone caracteres acentuados
    .replace(/[\u0300-\u036f]/g, "") // remueve los acentos
    .trim(); // elimina espacios al principio y al final
}

// Función que gestiona productos
function gestionarProductos(arreglo) {
  // 1. Añadir un nuevo producto
  const nuevoProducto = { nombre: "Salame", precio: 25 };
  arreglo.push(nuevoProducto);

  // 2. Eliminar el último producto del array
  arreglo.pop();

  // 3. Encontrar el índice de un producto específico
  const indexProducto = arreglo.findIndex(p =>
    normalizarTexto(p.nombre) === normalizarTexto("Pasta de Aceituna")
  );

  // 4. Verificar si hay algún producto con precio mayor a 50
  const mayor50 = arreglo.some(p => p.precio > 50);

  // 5. Generar cadena con nombres de productos separados por comas
  const nombreProductos = arreglo.map(p => p.nombre).join(", ");

  // Retornar un resumen
  return {
    indexProducto,
    mayor50,
    productosDisponibles: nombreProductos
  };
}

// Ejecutar y mostrar el resultado
const resultado = gestionarProductos(productos);
console.log("🛒 Resultado de la gestión de productos:");
console.table(resultado);
