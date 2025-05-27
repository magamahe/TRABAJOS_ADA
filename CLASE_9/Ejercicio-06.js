/*Ejercicio 6:  
Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
edad. Muestra un mensaje personalizado según el caso.  */

const prompt = require('prompt-sync')();

// Pedimos la edad al usuario
let edad = parseInt(prompt("Ingrese su edad: "));

// Verificamos si es mayor o menor de edad
if (edad >= 18) {
  console.log(" Sos mayor de edad. ¡Bienvenido/a al sistema!");
} else if (edad >= 0) {
  console.log(" Sos menor de edad. El acceso está restringido.");
} else {
  console.log(" EEdad inválida. Por favor ingresá un número positivo.");
}