/* Ejercicio 2: Número mayor (función expresada) 
Crea una función expresada llamada encontrarMayor que reciba dos 
números como parámetros y devuelva el número mayor. */

const encontrarMayor = function(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "Error: Ambos parámetros deben ser números.";
  }

  return num1 > num2 ? num1 : num2;
};

console.log(`El número mayor es ${encontrarMayor(10, 20)}`); // 20
console.log(encontrarMayor(10, '20')); // Error: Ambos parámetros deben ser números.
console.log(encontrarMayor(10, 10)); // 10
console.log(encontrarMayor(5, 3)); // 5
console.log(encontrarMayor(-5, -10)); // -5
console.log(encontrarMayor(0, 0)); // 0
