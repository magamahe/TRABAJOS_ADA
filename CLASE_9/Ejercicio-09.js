/* Ejercicio 9:  
Define una constante PI con el valor de pi (3.14159). Pide al usuario 
que ingrese el radio de un círculo y calcula su área y perímetro 
utilizando la constante PI. */

const prompt = require('prompt-sync')();

// Constante PI
const PI = 3.14159;

// Pedir al usuario que ingrese el radio
let radio = parseFloat(prompt("Ingrese el radio del círculo: "));

// Validar que sea un número positivo
//isNaN es una función de JavaScript que verifica si un valor no es un número. Aca esta negado!!!
if (!isNaN(radio) && radio > 0) {
  // Calcular área y perímetro
  const area = PI * radio ** 2;
  const perimetro = 2 * PI * radio;


  //console.log(`Área del círculo: ${area}`); //sin redondeo
  
  //El método .toFixed(n) redondea un número a n decimales y lo convierte en una cadena de texto.
  console.log(`Área del círculo: ${area.toFixed(2)}`);
  console.log(`Perímetro del círculo: ${perimetro.toFixed(2)}`);
} else {
  console.log("Por favor, ingrese un número válido mayor que 0 para el radio.");
}
