/*  Ejercicio 10:  
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error. */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número del 1 al 7: "));

const diasSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
];

if (numero >= 1 && numero <= 7) {
  console.log(`El día correspondiente al número ${numero} es: ${diasSemana[numero - 1]}`);
} else {
  console.log("Error: Número fuera de rango. Por favor ingrese un número entre 1 y 7.");
}
