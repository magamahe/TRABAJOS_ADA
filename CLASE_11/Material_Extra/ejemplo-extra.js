//  Operador Ternario
//Una forma corta de escribir un if/else.

let edad = 20;
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
//console.log(mensaje); // "Mayor de edad"

let par_impar = (edad % 2 == 0)? `${edad} es un numero par`: "es un numero impar";
//console.log(par_impar);

//🔁 Switch :Sirve para comparar una variable con varios valores posibles.

let dia = "viernes";

switch (dia) {
  case "lunes":
    //console.log("Inicio de semana");
    break;
  case "viernes":
    //console.log("Fin de semana");
    break;
  default:
    //console.log("Día común");
}


//🔁 While: Repite el bloque mientras la condición sea verdadera.
let i = 0;
while (i < 5) {
  //console.log("Contando: " + i);
  i++;
}

// Do While: Primero ejecuta el bloque y luego evalúa la condición.
let j = 0;
do {
  //console.log("Contando: " + j);
  j++;
} while (j > 5);
/*


///// Arrays: Un array es una colección ordenada de valores (números, cadenas, etc.).
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[1]); // "manzana"
frutas.push("uva");     // Agrega al final
frutas.push("limon");   
console.log(frutas.length); // 4
console.log(frutas);
frutas.reverse();
console.log(frutas);
frutas.splice(2,1); // elimina posicion2 desde el principio
console.log(frutas);
frutas.pop();       // borra el ultimo
console.log(frutas);
frutas.shift();     //borra el primero
console.log(frutas);

let index = frutas.indexOf("banana"); // Busca la posición de "banana"
if (index !== -1) {
  frutas.splice(index, 1); // Elimina "banana"
}
console.log(frutas); // ["manzana", "pera"]
*/

//////. Matrices: Una matriz es un array de arrays, útil para representar tablas o grillas.

let matriz = [
  [1, 2, 3, 5],
  [4, 5, 6, 7],
  [7, 8, 9, 8]
];
console.log(matriz);
console.log(matriz[0][1]); // 2
matriz[1][2] = 10;
console.log(matriz[1]); // [4, 5, 10]

console.log(matriz.length); // cantidad de filas
console.log(matriz[0].length); // cant de columnas

//Mostar columna 1
let matriz_1 = [
  [1, 2, 3],
  [4, 5, 10],
  [7, 8, 9]
];

console.log("Columna 1:");
for (let fila = 0; fila < matriz_1.length; fila++) {
  console.log(matriz_1[fila][1]);
}
///////////////////////////////////

let columna1 = [];

for (let fila = 0; fila < matriz_1.length; fila++) {
  columna1.push(matriz_1[fila][1]);
}

console.log(columna1); // [2, 5, 8]


