/*Ejercicio 2:  
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
valores numéricos de tu elección. Pide al usuario que ingrese un 
número y verifica si está dentro del rango definido por las constantes.  */

const prompt = require('prompt-sync')();

// Definimos los valores del rango
const rango_min = 10;
const rango_max = 100;

// Pedimos un número al usuario
const numero = parseInt(prompt("Ingrese un número para verificar si está dentro del rango: "));

// Verificamos si está dentro del rango
if (numero >= rango_min && numero <= rango_max) {
  console.log(` El número ${numero} está dentro del rango (${rango_min} - ${rango_max}).`);
} else {
  console.log(` El número ${numero} está fuera del rango (${rango_min} - ${rango_max}).`);
}
