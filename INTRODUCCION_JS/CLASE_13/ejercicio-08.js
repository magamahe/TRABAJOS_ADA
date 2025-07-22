/* Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba 
una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. 
Fórmula:  

F = (C X 9/5) +32 
*/

const convertirCelsiusAFahrenheit = function(celsius) {
  return (celsius * 9/5) + 32;
};

console.log(convertirCelsiusAFahrenheit(0));   // 32
console.log(convertirCelsiusAFahrenheit(100)); // 212
console.log(convertirCelsiusAFahrenheit(20));  // 68

