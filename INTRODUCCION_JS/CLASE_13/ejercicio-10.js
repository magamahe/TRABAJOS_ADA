/* Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
Crea una función expresada llamada calcularFactorial que reciba un número 
y devuelva su factorial. 
Fórmula del factorial: 
n! = n * (n-1) * (n-2) * ... * 1

*/

const calcularFactorial = function(n) {
  if (n < 0) {
    return "El factorial no está definido para números negativos";
  }

  let resultado = 1;

  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
};


///////
console.log(`El factorial de 5 es ${calcularFactorial(5)}`);  // 120
console.log(`El factorial de 0 es ${calcularFactorial(0)}`);   // 1
console.log(`El factorial de 1 es ${calcularFactorial(1)}`);   // 1
console.log(`El factorial de -3 es ${calcularFactorial(-3)}`);  // "El factorial no está definido para números negativos"
