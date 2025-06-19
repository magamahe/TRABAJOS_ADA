/* ● Clasificación de palabras según su longitud 
Tienes una lista de palabras en una oración. Debes: 
1. Dividir la oración en palabras individuales. 
2. Clasificar las palabras en dos categorías: 
▪ Cortas (menos de 5 letras) 
▪ Largas (5 letras o más) 
3. Mostrar ambas listas de palabras clasificadas. 
4. La oración es: "JavaScript es un lenguaje poderoso y versátil".  */

const oracion = "JavaScript es un lenguaje poderoso y versátil";
console.log(`String original: ${oracion}`);
console.log("----------------------------------");

// 1. Dividir la oración en palabras
const lista = oracion.split(" ");
console.log(`String dividido en palabras individuales: [${lista.join(", ")}]`);
console.log("----------------------------------");

// 2. Clasificar palabras según longitud
const palabrasCortas = [];
const palabrasLargas = [];

for (let palabra of lista) {
    (palabra.length < 5) 
    ? palabrasCortas.push(palabra)
    :palabrasLargas.push(palabra)
}

// 3. Mostrar las listas clasificadas
console.log(`Palabras cortas (menos de 5 letras): [${palabrasCortas.join(", ")}]`);
console.log(`Palabras largas (5 letras o más): [${palabrasLargas.join(", ")}]`);
