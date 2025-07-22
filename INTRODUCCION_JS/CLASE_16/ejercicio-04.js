/* ● Ejercicio 4: Calcula la suma total de los números 
Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de 
sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, 
imprime el total en la consola. 
 */

const { errorMonitor } = require("prompt");

const numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acum, actual) => acum + actual, 0);

console.log(suma);