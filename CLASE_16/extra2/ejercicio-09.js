/* Ejercicio 9: Agrupar ventas por vendedor */

// Tenés un array de ventas con nombre del vendedor. Sumá cuántas ventas hizo cada uno.
const ventas = [
  { vendedor: "Ana" },
  { vendedor: "Luis" },
  { vendedor: "Ana" },
  { vendedor: "Pedro" },
  { vendedor: "Pablo" },
  { vendedor: "Pedro" }
];
// Resultado: { Ana: 2, Luis: 1 }
function contarVentasPorVendedor(lista) {
  return lista.reduce((acc, venta) => {
    acc[venta.vendedor] = (acc[venta.vendedor] || 0) + 1;
    return acc;
  }, {}); // inicia {}
}

console.log(contarVentasPorVendedor(ventas));