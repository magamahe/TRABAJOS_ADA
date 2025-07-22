/* Ejercicio 8: Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con un ejemplo simple. Quiero que se familiaricen con la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la solución.
Dada la siguiente lista:
Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
o ¿Cuál es la posición del número 1?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 6?
o ¿Cuál es la posición del número 9?
o ¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya que podemos leer el array, y determinar con un cálculo visual la posición de cada elemento, pero, la propuesta que les hago es que codeen un algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el 6, y nos indique por consola la posición del mismo.
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra. */

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Función de búsqueda binaria
function busquedaBinaria(array, valorBuscado) {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    if (array[medio] === valorBuscado) {
      return medio; // Posición encontrada
    } else if (array[medio] < valorBuscado) {
      inicio = medio + 1; // Buscar a la derecha
    } else {
      fin = medio - 1; // Buscar a la izquierda
    }
  }

  return -1; // Si no lo encuentra
}

// Pruebas solicitadas
const numerosABuscar = [1, 5, 6, 9, 11];

numerosABuscar.forEach(numero => {
  const posicion = busquedaBinaria(list, numero);
  if (posicion !== -1) {
    console.log(`El número ${numero} está en la posición ${posicion} del array.`);
  } else {
    console.log(`El número ${numero} no se encuentra en el array.`);
  }
});
