/* 
Dada una lista de productos con precios, mostrar solo los que tienen un precio menor a 100. 
Usar una función de array para filtrar y mostrarlos.
Ejemplo: [{nombre: "Camisa", precio: 80}, {nombre: "Pantalón", precio: 150}, ...]
*/

const productos = [
  { nombre: "Camisa", precio: 80 },
  { nombre: "Pantalón", precio: 150 },
  { nombre: "Medias", precio: 50 },
  { nombre: "Zapatos", precio: 200 },
  { nombre: "Gorra", precio: 90 }
];

// Filtrar productos con precio menor a 100
const productosMenores100 = productos.filter(producto => producto.precio < 100);

// Mostrar los productos filtrados
console.log("Productos en oferta:");
productosMenores100.forEach(producto => {
  console.log(`- ${producto.nombre}: $${producto.precio}`);
});
