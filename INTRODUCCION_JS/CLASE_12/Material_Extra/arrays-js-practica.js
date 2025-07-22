// 1. Crear un array
let colores = ["rojo", "verde", "azul"];



// 2. Agregar y quitar elementos
colores.push("amarillo");
colores.unshift("negro");
colores.shift();
colores.pop();

// 3. Recorrer el array
for (let i = 0; i < colores.length; i++) {
  console.log("for:", colores[i]);
}

for (let color of colores) {
  console.log("for...of:", color);
}

colores.forEach(function(color) {
  console.log("forEach:", color);
});

// 4. Buscar elementos
let frutas = ["manzana", "banana", "pera", "manzana"];
console.log(frutas.includes("banana")); // true
console.log(frutas.indexOf("pera")); // 2
let veces = frutas.filter(f => f === "manzana").length;
console.log("Manzanas:", veces);

// 5. Filtrar elementos
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = numeros.filter(n => n % 2 === 0);
let impares_mayores_5 = numeros.filter(n => n % 2 !== 0 && n > 5);

// 6. Transformar elementos
let dobles = numeros.map(n => n * 2);

// 7. Unir y cortar
console.log(colores.join(" - "));
let primeros_tres = colores.slice(0, 3);
colores.splice(1, 1, "violeta");

// 8. Ordenar
let letras = ["d", "a", "c", "b"];
letras.sort();
letras.reverse();

// Extra: Desafío combinado
const prompt = require('prompt-sync')();
let num = parseInt(prompt("Ingrese un número: "));
let impares = [];

for (let i = 1; i <= num; i++) {
  if (i % 2 !== 0) {
    impares.push(i);
  }
}

console.log("Cantidad de impares:", impares.length);
console.log("Números impares:", impares.join(", "));
