// Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. La fórmula de conversión es: 
// Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
// 	Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse asi: 
// let fahrenheit = celsius * 9 / 5 + 32; 

const prompt = require("prompt-sync")({ sigint: true });
let temp_celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
let temp_fahrenheit = temp_celsius * 9 / 5 + 32;
console.log(`La temperatura ${temp_celsius}°C en grados Fahrenheit es: ${temp_fahrenheit.toFixed(1)}°F`);