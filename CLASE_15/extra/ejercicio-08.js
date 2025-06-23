/* 
Dado un array de productos: ["jugo de naranja", "agua mineral", "jugo de manzana"], 
mostrar los que contengan la palabra "jugo".
*/
const productos = ["jugo de naranja", "agua mineral", "jugo de manzana", "gaseosa", "JUGO detox"];

// Filtrar productos que contienen la palabra "jugo" (sin distinguir mayúsculas)
const productosConJugo = productos.filter(producto =>
  producto.toLowerCase().includes("jugo")
);

console.log("Productos que contienen la palabra 'jugo':");
productosConJugo.forEach(producto => console.log(`- ${producto}`));
