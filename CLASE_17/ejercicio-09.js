/* Ejercicio 9: Desafío extra! Orden, lugar y números
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo
mismo del ejercicio anterior (buscar la posición de un número en un array), pero partiendo de esta lista:
Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100? */

let list = [12, 3, 5, 7, 1, 22, 47, 100];

// 1️⃣ Algoritmo de ordenamiento Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Intercambiar
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// 2️⃣ Búsqueda binaria
function busquedaBinaria(array, valorBuscado) {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (array[medio] === valorBuscado) {
      return medio;
    } else if (array[medio] < valorBuscado) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1;
}

// Ordenamos la lista primero
const listaOrdenada = bubbleSort([...list]); // usamos [...list] para no modificar la original
console.log("📊 Lista ordenada:", listaOrdenada);

// 3️⃣ Buscar los valores indicados
const numerosABuscar = [12, 5, 22, 100];

numerosABuscar.forEach(numero => {
  const posicion = busquedaBinaria(listaOrdenada, numero);
  if (posicion !== -1) {
    console.log(`🔍 El número ${numero} está en la posición ${posicion +1} del array ordenado.`);
  } else {
    console.log(`❌ El número ${numero} no se encuentra en el array.`);
  }
});

