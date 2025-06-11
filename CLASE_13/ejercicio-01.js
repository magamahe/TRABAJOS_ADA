/* Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) 
Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
parámetros: la base y la altura de un triángulo. La función debe devolver el 
área del triángulo. 
Pista: Usa la fórmula: 
AREA = (BASE X ALTURA)/2 */

function calcularAreaTriangulo(base, altura) {
  // Validar si base o altura no son números
  if (typeof base !== 'number' || typeof altura !== 'number') {
    return "Error: La base y la altura deben ser números.";
  }

  // Validar si base o altura son menores o iguales a cero
  if (base <= 0 || altura <= 0) {
    return "Error: La base y la altura deben ser mayores que cero.";
  }

  // Si todo está bien, calcular el área
  const area = (base * altura) / 2;
  return area;
}
console.log(`El área del triángulo es ${calcularAreaTriangulo(5, 10)}`);
console.log(calcularAreaTriangulo(5, '10')); // Error: La base y la altura deben ser números.
console.log(calcularAreaTriangulo(5, -10)); // Error: La base y la altura deben ser mayores que cero.   
console.log(calcularAreaTriangulo(0, 10)); // Error: La base y la altura deben ser mayores que cero.    
console.log(calcularAreaTriangulo(5, 0)); // Error: La base y la altura deben ser mayores que cero.

