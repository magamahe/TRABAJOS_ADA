/* Ejercicio 8: Contador de letras
Crea una función que reciba una cadena de texto y una letra, y devuelva cuántas veces aparece esa letra en la cadena.
Consigna:
•
Usa un bucle for y condicionales.
•
Haz que la búsqueda no distinga entre mayúsculas y minúsculas. */

function contarLetra(texto, letraBuscada) {
    let contador = 0;
    let textoMinuscula = texto.toLowerCase();
    let letraMinuscula = letraBuscada.toLowerCase();

    for (let i = 0; i < textoMinuscula.length; i++) {
        if (textoMinuscula[i] === letraMinuscula) {
            contador++;
        }
    }

    return contador;
}

// Ejemplo de uso:
const frase = "AProgramar es divertido";
const letra = "r";
console.log(`La letra "${letra}" aparece ${contarLetra(frase, letra)} veces.`);
