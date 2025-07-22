/* 
Dado un array con nombres de productos vendidos ["pan", "leche", "huevo", "pan"], 
mostrar cuántas veces se vendió cada uno. 
Usar un objeto acumulador.
*/
const productosVendidos = ["pan", "leche", "huevo", "pan", "leche", "pan"];

const contadorVentas = {};

// Recorremos el array y vamos contando
productosVendidos.forEach(producto => {
  if (contadorVentas[producto]) {
    contadorVentas[producto]++;
  } else {
    contadorVentas[producto] = 1;
  }
});

// Mostrar resultados
console.log(`Productos: ${productosVendidos}`)
console.log("Cantidad de ventas por producto:");
for (let producto in contadorVentas) {
  console.log(`- ${producto}: ${contadorVentas[producto]}`);
}
