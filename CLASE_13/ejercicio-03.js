/* Ejercicio 3: Mensaje global y local 
Declara una variable global llamada saludoGlobal con el valor "Hola desde el 
scope global". Luego, crea una función llamada mostrarMensaje que declare 
una variable local llamada saludoLocal con el valor "Hola desde el scope 
local" y que imprima ambos mensajes.  */

// Variable global
const saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() {
  // Variable local
  const saludoLocal = "Hola desde el scope local";
  
  // Imprimir ambos mensajes
  console.log(saludoGlobal);
  console.log(saludoLocal);
}

// Ejecutar función
mostrarMensaje();

