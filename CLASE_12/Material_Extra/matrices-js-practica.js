// 1. Crear una matriz 3x3 manualmente
let matriz = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

// 2. Recorrer e imprimir todos los valores
for (let i = 0; i < matriz.length; i++) { // fila
  for (let j = 0; j < matriz[i].length; j++) { // columna
    console.log(`matriz[${i}][${j}] =`, matriz[i][j]);
  }
}

// 3. Sumar todos los valores de la matriz
let suma = 0;
for (let fila of matriz) {
  for (let valor of fila) {
    suma += valor;
  }
}
console.log("Suma total:", suma);

// 4. Crear matriz vacía de 3x3 y llenarla con números del 1 al 9
let contador = 1;
let nuevaMatriz = [];

for (let i = 0; i < 3; i++) {
  let fila = [];
  for (let j = 0; j < 3; j++) {
    fila.push(contador++);
  }
  nuevaMatriz.push(fila);
}
console.log("Matriz del 1 al 9:", nuevaMatriz);

// 5. Encontrar el valor máximo y su posición
let max = matriz[0][0];
let filaMax = 0;
let colMax = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > max) {
      max = matriz[i][j];
      filaMax = i;
      colMax = j;
    }
  }
}

console.log(`Máximo valor: ${max} en posición [${filaMax}][${colMax}]`);
