/* Ejercicio 5: Generador de iniciales 🅰️
Escribe una función que reciba un nombre completo y devuelva las
iniciales en mayúsculas.
Consigna:
• Usa el método split() para dividir el nombre.
• Usa un bucle for y métodos de string. */

function obtenerIniciales(nombreCompleto) {
    const partes = nombreCompleto.split(" ");
    let iniciales = "";

    for (let i = 0; i < partes.length; i++) {
        if (partes[i].length > 0) {
            iniciales += partes[i][0].toUpperCase();
        }
    }

    return iniciales;
}

// Ejemplo de uso:
const nombre = "maría gabriela martinez";
const resultado = obtenerIniciales(nombre);

console.log("Iniciales:", resultado);
