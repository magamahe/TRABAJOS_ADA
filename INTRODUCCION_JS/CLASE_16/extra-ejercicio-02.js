/* ● Calcula el total de ventas de productos seleccionados 
Supón que tienes una lista de productos con sus precios en formato de 
objeto: 
const products = [ 
{ name: 'Laptop', price: 1000 }, 
{ name: 'Mouse', price: 25 }, 
{ name: 'Teclado', price: 50 }, 
{ name: 'Monitor', price: 200 }, 
{ name: 'Audífonos', price: 75 } 
]; 
Queremos: 
o Seleccionar los productos cuyo precio sea mayor o igual a 50. 
o Obtener solo los nombres de esos productos. 
o Calcular el precio total sumando los precios de los productos 
seleccionados. 
o Imprime el total y los nombres de los productos seleccionados en la 
consola. 
 */

const products = [ 
  { name: 'Laptop', price: 1000 }, 
  { name: 'Mouse', price: 25 }, 
  { name: 'Teclado', price: 50 }, 
  { name: 'Monitor', price: 200 }, 
  { name: 'Audífonos', price: 75 } 
];

// 1. Filtrar productos con precio >= 50
const productosSeleccionados = products.filter(producto => producto.price >= 50);

// 2. Obtener solo los nombres de esos productos
const nombresProductos = productosSeleccionados.map(producto => producto.name);

// 3. Calcular el precio total sumando los precios de los seleccionados
const totalPrecio = productosSeleccionados.reduce((acum, producto) => acum + producto.price, 0);

// 4. Mostrar resultado
console.log('Productos seleccionados:', nombresProductos.join(', '));
console.log('Precio total:', totalPrecio);
