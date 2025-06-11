/* Ejercicio 9: Contar hasta un número 
Crea una función declarada llamada contarHasta que reciba un número y 
use un bucle para imprimir todos los números desde 1 hasta ese número.  */

function contarHasta(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}

contarHasta(5);
// Imprime:
// 1
// 2
// 3
// 4
// 5
