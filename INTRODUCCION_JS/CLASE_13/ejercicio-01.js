/* Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) 
Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
parámetros: la base y la altura de un triángulo. La función debe devolver el 
área del triángulo. 
Pista: Usa la fórmula: 
AREA = (BASE X ALTURA)/2 */


function calcularAreaTriangulo(base, altura){
  if ( isNaN(base)  || isNaN(altura)) {
    return "Error: La base y la altura deben ser números.";
  }
  if (base <= 0 || altura <= 0) {
    return "Error: La base y la altura deben ser mayores que cero.";
  }
    return (base * altura) /2;
}

console.log(`El área del triángulo es ${calcularAreaTriangulo(5, 10)}`); // El área del triángulo es 25
console.log(calcularAreaTriangulo(5, '10')); // Error: La base y la altura deben ser números.
console.log(calcularAreaTriangulo(5, -10)); // Error: La base y la altura deben ser mayores que cero. 
console.log(calcularAreaTriangulo(0, 10)); // Error: La base y la altura deben ser mayores que cero.
console.log(calcularAreaTriangulo(5, 0)); // Error: La base y la altura deben ser mayores que cero.




