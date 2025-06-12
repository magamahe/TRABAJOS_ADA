/* Ejercicio 4: Número par o impar 
Crea una función declarada llamada esPar que reciba un número y devuelva 
"Es par" si el número es par o "Es impar" si el número es impar. Usa una 
variable local para guardar el resultado.  */

function esPar(num) {
  // Variable local para guardar resultado
  let resultado;

  (num % 2 === 0) ? resultado = "Es par" : resultado = "Es impar";

  return resultado;
}


console.log(esPar(4));  // Es par
console.log(esPar(7));  // Es impar
console.log(esPar(0));  // Es par
console.log(esPar(-3)); // Es impar
