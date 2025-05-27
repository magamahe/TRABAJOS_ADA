/*Ejercicio 6:  
Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
edad. Muestra un mensaje personalizado según el caso.  */

const prompt = require('prompt-sync')();

// Pedimos la edad al usuario
let edad = parseInt(prompt("Ingrese su edad: "));
const edad_promedio = 18;

// Verificamos si es mayor o menor de edad
if (edad >= edad_promedio) {
  console.log(" Sos mayor de edad. ¡Bienvenido/a al sistema!");
} else if (edad > 0 && edad < edad_promedio) {
  console.log(" Sos menor de edad. El acceso está restringido.");
} else {
  console.log(" Edad inválida. Por favor ingresá un número positivo.");
}