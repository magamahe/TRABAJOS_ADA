/* ● Ejercicio 1: Crea un nuevo array con los cuadrados de los números 
Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es 
crear una nueva lista donde cada número de la lista original se haya 
transformado en su cuadrado. Por ejemplo, el número 2 debería convertirse 
en 4, el número 4 en 16, y así sucesivamente. Al final, imprime la nueva lista. 

 */

const numeros = [2, 4, 6, 8];

const numerosCuadrados = numeros.map(numero => numero ** 2);

console.log(numerosCuadrados); // [4, 16, 36, 64]
