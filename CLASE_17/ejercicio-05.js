/* Ejercicio 5: Manipulación de Arrays y Cadenas
A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este punto.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena separada por espacios.
5. Devuelva un nuevo array con las frases modificadas. */

// Array original de frases
const frases = [
  "El clima es MALO hoy",
  "Este libro es muy MALO",
  "El servicio aqui es MALO"
];

// Función para procesar las frases
function procesarFrases(orac) {
    const frasesProcesadas = orac.map(frase => {
        const fraseMinuscula = frase.toLowerCase(); // 1. Convertir a minúsculas
        const palabras = fraseMinuscula.split(" "); // 2. Dividir en palabras
        const palabrasModificadas = palabras.map(palabra =>
        palabra === "malo" ? "bueno" : palabra              // 3. Reemplazar "malo" por "bueno"
        );
        const nuevaFrase = palabrasModificadas.join(" "); // 4. Combinar nuevamente en una cadena
        return nuevaFrase; // 5. Devolver la nueva frase
    });
    return frasesProcesadas;
}

// Ejecutar y mostrar el resultado
console.log("Frases originales:");
console.log(frases);
const resultado = procesarFrases(frases);
console.log("Frases procesadas:");
console.log(resultado);
