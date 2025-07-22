/* Ejercicio 6: Autos y más autos…
Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida de marcas de autos:
1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()” */

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos(cadena) {
    const marcas = cadena.split(",").map(m => m.trim()); // 1. Separar por comas y quitar espacios alrededor de cada marca
    const existeTesla = marcas.map(m => m.toLowerCase()).includes("tesla"); // 2. Verificar si existe la marca "Tesla" (sin importar mayúsculas)
    const marcasReemplazadas = marcas.map(m => m.toLowerCase() === "ford" ? "BMW" : m);   // 3. Reemplazar todas las marcas "Ford" por "BMW"
    const indexChevrolet = marcasReemplazadas.findIndex(m => m.toLowerCase() === "chevrolet");   // 4. Encontrar el índice de "Chevrolet" (ignorando mayúsculas)
    const marcasOrdenadas = [...marcasReemplazadas].sort().join(".");   // 5. Devolver una cadena en orden alfabético separada por puntos
    
    // Resultado
    return {
        existeTesla,
        indexChevrolet,
        marcasOrdenadas
    };
}

// Ejecutar y mostrar el resultado
const resultado = gestionarAutos(entrada);
console.log(entrada);
console.log("🚗 Resultado del análisis de autos:");
console.log(resultado);
