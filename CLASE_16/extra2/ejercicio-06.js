/* Ejercicio 6: Filtrar productos en oferta */

// De un array de productos, devolvé solo los que tengan el campo `enOferta: true`.
const stock = [
  { nombre: "Monitor", enOferta: false },
  { nombre: "Cable HDMI", enOferta: true }
];
// Resultado: [{ nombre: "Cable HDMI", enOferta: true }]
function productosEnOferta(lista) {
  // tu código acá
  return lista.filter(p => p.enOferta === true) 
}

console.log(productosEnOferta(stock));
