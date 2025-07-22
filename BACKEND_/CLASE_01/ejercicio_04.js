/* Ejercicio 4: Contando vocales 🅰️🅾️
Crea una función que reciba una cadena de texto y devuelva cuántas
vocales contiene.
Consigna:
• Usa un bucle for y condicionales.
• Considera vocales mayúsculas y minúsculas (a, e, i, o, u). */

function contarVocales(texto) {
    let contador = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

// Ejemplo de uso:
let texto = "¡Hola Mundo!";
const totalVocales = contarVocales(frase);

console.log("Cantidad de vocales:", totalVocales);
