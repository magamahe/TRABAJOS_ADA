/* ●	Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su desarrollo)
 */

const prompt = require('prompt-sync')();
let nombres = [];

// Solicitar al usuario ingresar 5 nombres
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingrese el nombre ${i + 1}: `);
   nombres.push(nombre.trim().toLowerCase());
}
// Solicitar al usuario ingresar un nombre para buscar
let nombreABuscar = prompt("Ingresá un nombre para buscar:").trim().toLowerCase(); 
console.log("----------------");
// Verificar si el nombre se encuentra en el array
if (nombres.includes(nombreABuscar)) {
    console.log(`El nombre "${nombreABuscar}" se encuentra en el array.`);
}else {
  console.log(`El nombre "${nombreABuscar}" NO está en la lista.`);
}
// (Opcional) Mostrar todos los nombres ingresados
console.log("----------------");
console.log("Nombres en la lista:", nombres);