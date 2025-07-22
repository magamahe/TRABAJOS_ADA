/* Ejercicio 2: Calcular promedio de calificaciones 
Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
el promedio.  */

const prompt = require('prompt-sync')(); 

const calificaciones = [];

for (i = 0; i < 5; i++){
    let calificacion = parseFloat(prompt(`Ingresar 5 calificaciones, calificación ${i+1}: `));
    calificaciones.push(calificacion);
}

const promedio = calificaciones => {
    const suma = calificaciones.reduce((acc, val) => acc + val, 0);
    return suma / calificaciones.length;
}

const promedios = promedio(calificaciones);

console.log(`el Promedio de las notas es: ${promedios}`);

