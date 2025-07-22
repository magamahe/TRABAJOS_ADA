/* Ejercicio 7:  
Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
kg a libras, Pista: 2.20462) */

const prompt = require('prompt-sync')();

// Constante de conversión
const cte_conversion = 2.20462;

// Pedimos el peso en kilogramos
let pesoKg = parseFloat(prompt("Ingrese su peso en kilogramos: "));

// Verificamos que sea un número válido
if (!isNaN(pesoKg) && pesoKg > 0) {
  // Realizamos la conversión
  let pesoLibras = pesoKg * cte_conversion;

  // Mostramos el resultado con dos decimales
  console.log(`Su peso en libras es: ${pesoLibras.toFixed(2)} lb`);
} else {
  console.log("Ingrese un número válido mayor que 0.");
}
