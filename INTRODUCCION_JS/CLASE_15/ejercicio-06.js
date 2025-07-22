/* ● Ejercicio 6: Buscar la última posición de un elemento repetido 
Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última 
posición en la que aparece el número 7.  */

const numeros = [2, 5, 7, 2, 8, 7];
const num = 2;
const indice = numeros.lastIndexOf(num);

console.log (`lista: ${numeros.join(", ")}`);
console.log(`Numero a buscar su ultima posicion: ${num}`);

(indice === -1)
    ? console.log("el numero no se encuentra en la lista")
    : console.log(`Su ultima aparicion es en la posicion ${indice + 1}`)
    
    