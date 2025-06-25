// ejercicios_matrices.js

// 1. Crear una matriz 3x3 con números del 1 al 9 y mostrarla
const matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('Ejercicio 1 - Matriz 3x3:');
matriz1.forEach(fila => console.log(fila.join(' ')));
console.log('');

// 2. Imprimir los elementos fila por fila
console.log('Ejercicio 2 - Imprimir elementos fila por fila:');
for (let i = 0; i < matriz1.length; i++) {
  for (let j = 0; j < matriz1[i].length; j++) {
    console.log(matriz1[i][j]);
  }
}
console.log('');

// 3. Sumar todos los elementos de una matriz
let suma3 = 0;
for (let i = 0; i < matriz1.length; i++) {
  for (let j = 0; j < matriz1[i].length; j++) {
    suma3 += matriz1[i][j];
  }
}
console.log('Ejercicio 3 - Suma total:', suma3);
console.log('');

// 4. Encontrar el número mayor y menor en una matriz
let max4 = matriz1[0][0];
let min4 = matriz1[0][0];
for (let i = 0; i < matriz1.length; i++) {
  for (let j = 0; j < matriz1[i].length; j++) {
    if (matriz1[i][j] > max4) max4 = matriz1[i][j];
    if (matriz1[i][j] < min4) min4 = matriz1[i][j];
  }
}
console.log('Ejercicio 4 - Mayor:', max4, 'Menor:', min4);
console.log('');

// 5. Contar cuántos números pares e impares hay en una matriz
let pares5 = 0, impares5 = 0;
for (let i = 0; i < matriz1.length; i++) {
  for (let j = 0; j < matriz1[i].length; j++) {
    if (matriz1[i][j] % 2 === 0) pares5++;
    else impares5++;
  }
}
console.log('Ejercicio 5 - Pares:', pares5, 'Impares:', impares5);
console.log('');

// 6. Calcular la suma de cada fila y cada columna de una matriz
console.log('Ejercicio 6 - Suma por filas y columnas:');
const filas6 = matriz1.length;
const columnas6 = matriz1[0].length;
let sumaFilas6 = new Array(filas6).fill(0);
let sumaColumnas6 = new Array(columnas6).fill(0);

for (let i = 0; i < filas6; i++) {
  for (let j = 0; j < columnas6; j++) {
    sumaFilas6[i] += matriz1[i][j];
    sumaColumnas6[j] += matriz1[i][j];
  }
}
console.log('Suma filas:', sumaFilas6);
console.log('Suma columnas:', sumaColumnas6);
console.log('');

// 7. Transponer una matriz
function transponer(m) {
  const filas = m.length;
  const columnas = m[0].length;
  const t = [];
  for (let i = 0; i < columnas; i++) {
    t[i] = [];
    for (let j = 0; j < filas; j++) {
      t[i][j] = m[j][i];
    }
  }
  return t;
}
console.log('Ejercicio 7 - Matriz transpuesta:');
const transpuesta7 = transponer(matriz1);
transpuesta7.forEach(fila => console.log(fila.join(' ')));
console.log('');

// 8. Verificar si una matriz es simétrica (A == A^T)

/// NO VERIFICA LA CANTIDAD DE COLUMNAS POR ENDE NO VERIFICA Q SEA CUADRADA
/* function esSimetrica(m) {
  const n = m.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (m[i][j] !== m[j][i]) return false;
    }
  }
  return true;
}
const matrizSimetrica8 = [
  [1, 2, 3, 4],
  [2, 5, 6, 4],
  [3, 6, 9, 4]
];
console.log('Ejercicio 8 - ¿La matriz es simétrica?', esSimetrica(matrizSimetrica8));
console.log('');
 */

function esSimetrica(m) {
  const filas = m.length;

  // Verificar que sea cuadrada
  for (let i = 0; i < filas; i++) {
    if (m[i].length !== filas) {
      return false;
    }
  }

  // Verificar simetría
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < filas; j++) {
      if (m[i][j] !== m[j][i]) return false;
    }
  }

  return true;
}
/* const matrizSimetrica8 = [
  [1, 2, 3, 4],
  [2, 5, 6, 4],
  [3, 6, 9, 4]
]; FALSE*/
const matrizSimetrica8 = [
  [1, 2, 3],
  [2, 5, 6],
  [3, 6, 9]
]; //TRUE 
console.log('Ejercicio 8 - ¿La matriz es simétrica?', esSimetrica(matrizSimetrica8));
console.log('');


// 9. Multiplicar dos matrices

/* Si tienes:
            A de tamaño m x n 3 X 4
            B de tamaño n x p 4 X 4 
            Entonces A × B es posible, y el resultado será una matriz de tamaño m x p.
            📌 Las columnas de A deben coincidir con las filas de B.*/


function multiplicarMatrices(m1, m2) {
  const filasM1 = m1.length;
  const columnasM1 = m1[0].length;
  const filasM2 = m2.length;
  const columnasM2 = m2[0].length;
  if (columnasM1 !== filasM2) {
    throw new Error('Dimensiones incompatibles para multiplicar matrices.');
  }
  const resultado = [];
  for (let i = 0; i < filasM1; i++) {
    resultado[i] = [];
    for (let j = 0; j < columnasM2; j++) {
      let suma = 0;
      for (let k = 0; k < columnasM1; k++) {
        suma += m1[i][k] * m2[k][j];
      }
      resultado[i][j] = suma;
    }
  }
  return resultado;
}
const A9 = [
  [1, 2, 4, 4],
  [3, 4, 2, 5],
  [2, 1, 4, 5]
];
const B9 = [
  [5, 6, 3, 2],
  [7, 8, 4, 3],
  [5, 6, 2, 1],
  [5, 6, 2, 2]
];
console.log('Ejercicio 9 - Producto de matrices:');
const producto9 = multiplicarMatrices(A9, B9);
producto9.forEach(fila => console.log(fila.join(' ')));
console.log('');

// 10. Crear una matriz identidad n x n
/*Matriz IDENTIDAD
        matriz cuadrada
        Diagonal principal con todos los valores 1
        Fuera de la diagonal, todos los valores son 0 
*/

///////////////////////crear matriz identidad/////////////////////
function matrizIdentidad(n) {
  const m = [];
   // Validar que sea cuadrada
  for (let i = 0; i < n; i++) {
    m[i] = [];
    for (let j = 0; j < n; j++) {
        // En diagonal debe ser 1, fuera de diagonal debe ser 0
      m[i][j] = (i === j) ? 1 : 0;
    }
  }
  return m;
}

console.log('Ejercicio 10 - Matriz identidad CREADA 4x4:');
const identidad10 = matrizIdentidad(4);
identidad10.forEach(fila => console.log(fila.join(' ')));
console.log('-------------');

//////////////////////verificar matriz identidad////////////////////////
function esIdentidad(matriz) {
  const n = matriz.length;

  // Validar que sea cuadrada
  for (let i = 0; i < n; i++) {
    if (matriz[i].length !== n) return false;

    for (let j = 0; j < n; j++) {
      // En diagonal debe ser 1, fuera de diagonal debe ser 0
      if (matriz[i][j] !== (i === j ? 1 : 0)) {
        return false;
      }
    }
  }

  return true;
}
const matriz_1 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
];

const matriz_2 = [
  [1, 0, 0],
  [0, 2, 0],
  [0, 0, 1]
];
matriz_1.forEach(fila => console.log(fila.join(' ')));
console.log(esIdentidad(matriz_1)); // true
console.log('-------');
matriz_2.forEach(fila => console.log(fila.join(' ')));
console.log(esIdentidad(matriz_2)); // false
console.log('');

// 11. Verificar si una matriz es diagonal
/* Matriz diagonal:
                    Es cuadrada (mismo número de filas y columnas).
                    Todos los elementos fuera de la diagonal principal son cero.
                    Los elementos sobre la diagonal principal (donde i === j) pueden tener cualquier valor (incluso cero).

 */

//////////////con verificacion si la matriz es cuadrada/////////
function esDiagonal_v(matriz) {
  const num = matriz.length;

  // Verificamos que la matriz sea cuadrada
  for (let i = 0; i < num; i++) {
    if (matriz[i].length !== num) return false;

    for (let j = 0; j < num; j++) {
      // Solo nos importa lo que está fuera de la diagonal
      if (i !== j && matriz[i][j] !== 0) {
        return false;
      }
    }
  }

  return true;
}


const diagonalValida = [
  [5, 0, 0],
  [0, 3, 0],
  [0, 0, 7]
];

const noDiagonal = [
  [1, 0, 2],
  [0, 1, 0],
  [0, 0, 1]
];

const matriz_x = [
  [1, 0, 0],
  [0, 1],
  [0, 0, 1]
];
console.log('Ejercicio 11 - ¿La matriz es diagonal?');
console.log("¿Es diagonal?", esDiagonal_v(diagonalValida)); // true
console.log("¿Es diagonal?", esDiagonal_v(noDiagonal));     // false
console.log("¿Es diagonal?", esDiagonal_v(matriz_x));     // false

/////////SIN VERIFICACION SI ES CUADRADA/////////////
function esDiagonal(m) {
  const n = m.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && m[i][j] !== 0) return false;
    }
  }
  return true;
}
const matrizDiagonal11 = [
  [1, 0, 0],
  [0, 5, 0],
  [0, 0, 9]
];
console.log('Ejercicio 11 - ¿La matriz es diagonal?', esDiagonal(matrizDiagonal11));
console.log('');

// 12. Rotar una matriz 90° a la derecha

/*
    En general, el elemento en [i][j] pasa a [j][n-1-i], donde n es el tamaño de la matriz.  
    [[1,2,3]   => [[7, 4, 1]
     [4,5,6]   =>  [8, 5, 2]
     [7,8,9]]  =>  [9, 6, 3]]
    */ 
//////////////////PARA MATRIZ RECTANGULAR//////////////////////////////////////
function rotarMatriz90DerechaRectangular(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  const resultado_r = [];

  // Crear matriz vacía de columnas x filas
  for (let i = 0; i < columnas; i++) {
    resultado_r.push(new Array(filas));
  }

  // Rellenar resultado rotado
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      resultado_r[j][filas - 1 - i] = matriz[i][j];
    }
  }

  return resultado_r;
}
console.log('Ejercicio 12.Rectangular - Rotar matriz 90° a la derecha:');

const matriz12_r = [
  [1, 2, 3, 2],
  [4, 5, 6, 3],
  [7, 8, 9, 4]
];

const rotada12_r = rotarMatriz90DerechaRectangular(matriz12_r);
rotada12_r.forEach(fila => console.log(fila.join(' ')));



//////////PARA MATRIZ CUADRADA///////////////////////////////////////////////
function rotarMatriz90Derecha(matriz) {
  const n = matriz.length;
  const resultado = [];

  // Crear matriz vacía para resultado
  for (let i = 0; i < n; i++) {
    resultado.push(new Array(n));
  }

  // Llenar matriz resultado con valores rotados
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      resultado[j][n - 1 - i] = matriz[i][j];
    }
  }

  return resultado;
}

console.log('Ejercicio 12.1 - Rotar matriz 90° a la derecha:');
const matriz12_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const rotada12_1 = rotar90Derecha(matriz12_1);
rotada12_1.forEach(fila => console.log(fila.join(' ')));
console.log('');
///////OTRA FORMA/////////////////////////////////////////////////

function rotar90Derecha(m) {
  const n = m.length;
  const r = [];
  for (let i = 0; i < n; i++) {
    r[i] = [];
    for (let j = 0; j < n; j++) {
      r[i][j] = m[n - j - 1][i];
    }
  }
  return r;
}
console.log('Ejercicio 12 - Rotar matriz 90° a la derecha:');
const matriz12 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const rotada12 = rotar90Derecha(matriz12);
rotada12.forEach(fila => console.log(fila.join(' ')));
console.log('');

// 13. Verificar si una matriz es un cuadrado mágico
/*Un cuadrado mágico es una matriz cuadrada de números enteros positivos en la que:
            La suma de cada fila, cada columna y cada diagonal es igual.
            Esa suma se llama la constante mágica.

*/ 
function esCuadradoMagico(m) {
  const n = m.length;
  const sumaObjetivo = m[0].reduce((a,b) => a+b, 0);

  // Ver filas
  for (let i = 1; i < n; i++) {
    if (m[i].reduce((a,b) => a+b, 0) !== sumaObjetivo) return false;
  }

  // Ver columnas
  for (let j = 0; j < n; j++) {
    let sumaCol = 0;
    for (let i = 0; i < n; i++) {
      sumaCol += m[i][j];
    }
    if (sumaCol !== sumaObjetivo) return false;
  }

  // Ver diagonales
  let sumaDiag1 = 0, sumaDiag2 = 0;
  for (let i = 0; i < n; i++) {
    sumaDiag1 += m[i][i];
    sumaDiag2 += m[i][n - i - 1];
  }
  return (sumaDiag1 === sumaObjetivo) && (sumaDiag2 === sumaObjetivo);
}
const cuadradoMagico13 = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
];
console.log('Ejercicio 13 - ¿Es cuadrado mágico?', esCuadradoMagico(cuadradoMagico13));
console.log('');



/////////////////////////////////////////////////////////////////
function esCuadradoMagico(matriz) {
  const n = matriz.length; // cant de filas

  // ✅ Paso 1: Verificar que sea cuadrada
  for (let fila of matriz) {
    if (fila.length !== n) return false; // fila.length cantidad de columnas !== cantidad de filas
  }

  // ✅ Paso 2: Crear un array con todos los números
  const numeros = matriz.flat(); //.flat = Convierte una matriz 2D en una lista 1D

  // Verificar que tenga todos los números del 1 al n^2 sin repetir
  const numerosCorrectos = new Set(numeros); // new Set = Crea un conjunto de valores únicos (sin repetir)
  if (numerosCorrectos.size !== n * n) return false; //.size Se usa en Set y Map

  for (let i = 1; i <= n * n; i++) {
    if (!numerosCorrectos.has(i)) return false; //.has = Pregunta si un Set contiene ese valor
  }

  // ✅ Paso 3: Calcular la suma mágica (constante mágica)
  const sumaMagica = matriz[0].reduce((a, b) => a + b, 0); //.reduce = Reduce un array a un solo valor

  // ✅ Paso 4: Verificar filas
  for (let fila of matriz) {
    const sumaFila = fila.reduce((a, b) => a + b, 0);
    if (sumaFila !== sumaMagica) return false;
  }

  // ✅ Paso 5: Verificar columnas
  for (let j = 0; j < n; j++) {
    let sumaColumna = 0;
    for (let i = 0; i < n; i++) {
      sumaColumna += matriz[i][j];
    }
    if (sumaColumna !== sumaMagica) return false;
  }

  // ✅ Paso 6: Verificar diagonales
  let sumaDiagonal1 = 0;
  let sumaDiagonal2 = 0;
  for (let i = 0; i < n; i++) {
    sumaDiagonal1 += matriz[i][i];
    sumaDiagonal2 += matriz[i][n - 1 - i];
  }

  if (sumaDiagonal1 !== sumaMagica || sumaDiagonal2 !== sumaMagica) return false;

  // ✅ Si pasó todo, ¡es cuadrado mágico!
  return true;
}

////////////////////////////////////////////////////////////////

// 14. Encontrar el determinante de una matriz 3x3
/*El determinante es un número que se asocia a una matriz cuadrada (es decir, con el mismo número de filas y columnas).
    📌 Sirve para:
                    Saber si una matriz tiene inversa.
                    Resolver sistemas de ecuaciones lineales.
                    Determinar el volumen de ciertos espacios geométricos.
                    Ver si un conjunto de vectores es linealmente independiente.
                    A =[
                        [a, b, c],
                        [d, e, f],
                        [g, h, i]
                    ]
                    
                    det(A)=aei+bfg+cdh−ceg−bdi−afh
*/
function determinante3x3(m) {
  return m[0][0]*(m[1][1]*m[2][2] - m[1][2]*m[2][1]) -
         m[0][1]*(m[1][0]*m[2][2] - m[1][2]*m[2][0]) +
         m[0][2]*(m[1][0]*m[2][1] - m[1][1]*m[2][0]);
}

function determinantes3x3(m) {
    const a =m[0][0], b= m[0][1], c= m[0][2];
    const d = m[1][0], e= m[1][1], f= m[1][2];
    const g = m[2][0], h= m[2][1], i= m[2][2];

    return a*e*i + b*f*g + c*d*h - c*e*g - b*d*i - a*f*h;
}
const matriz_14 = [
  [1, 2, 3],
  [0, 1, 4],
  [5, 6, 0]
];
console.log('Ejercicio 14 - Determinante:', determinante3x3(matriz_14));
console.log('Ejercicio 14 - Determinante:', determinantes3x3(matriz_14));
console.log('');

// 15. Buscar un valor dentro de una matriz y devolver su posición
function buscarValor(m, valor) {
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] === valor) return [i, j];
    }
  }
  return null;
}
const matriz15 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];
const valorBuscado15 = 50;
const posicion15 = buscarValor(matriz15, valorBuscado15);
console.log('Ejercicio 15 - Posición del valor', valorBuscado15, ':', posicion15);
