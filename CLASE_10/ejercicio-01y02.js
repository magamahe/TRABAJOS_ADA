// Ejercicio 1: declarar dos variables: una con el nombre, edad y la otra con el nombre peso. 
let nombre;
let edad;
let peso;

// Ejercicio 2: Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso.
const prompt = require("prompt-sync")();

nombre = prompt("Por favor, ingresa tu nombre:");
edad = prompt("Por favor, ingresa tu edad:");
peso = prompt("Por favor, ingresa tu peso:");

console.log(`Hola ${nombre}, tienes ${edad} años y pesas ${peso} kg.`);
console.log(`----------------`);

