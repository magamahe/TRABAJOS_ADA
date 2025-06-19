/* ● Ejercicio 4: Convertir una lista de palabras en una frase 
Tienes un array de palabras ["JavaScript", "es", "divertido"]. Une todas las 
palabras en una sola frase, separadas por un espacio, y muestra el 
resultado.  */

const oracion_array = ["JavaScript", "es", "divertido"];
console.log(`Array original: [${oracion_array}]`);
const oracion_string = oracion_array.join(" ");
console.log(`Pasado a String: "${oracion_string}"`);

