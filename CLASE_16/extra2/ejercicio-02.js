    /* Ejercicio 2: Calcular total de una factura
     */

    // Recibís un array de productos con cantidad y precio, devolvé el total de la factura.
const carrito = [
  { producto: "Mouse", cantidad: 2, precio: 1500 },
  { producto: "Teclado", cantidad: 1, precio: 3000 }
];
// Resultado esperado: 6000
function calcularTotal(carrito) {
  // tu código acá
  return carrito.reduce((acc, producto) => {
    return acc + producto.cantidad * producto.precio;
  }, 0);
}

console.log(calcularTotal(carrito));
