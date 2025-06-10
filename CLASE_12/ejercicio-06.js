/* ●	Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.

 let matriz = [
[10,3,2,1,4,7],
[5,5,10,100,4],
[5,125,10,1020,4],
[5,5,5097,100,4] 
 ]
 */
let matriz = [
[10,3,2,1,4,7],
[5,5,10,100,4],
[5,125,10,1020,4],
[5,5,5097,100,4] 
]

let suma = 0;

// Recorremos cada fila
for (let i = 0; i < matriz.length; i++) {
  // Recorremos cada elemento dentro de la fila
  for (let j = 0; j < matriz[i].length; j++) {
    let numero = matriz[i][j];
    console.log("Número actual:", numero);
    // Verificamos si cumple la condición
    if (numero >= 10 && numero < 1000) {
        console.log("Número válido para sumar:", numero);
        suma += numero;
    }
  }
}

console.log("La suma de los números >= 10 y < 1000 es:", suma); 