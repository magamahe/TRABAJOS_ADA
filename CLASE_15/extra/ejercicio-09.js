/* 
Dado un array de palabras ["oso", "perro", "reconocer", "gato"], 
mostrar solo las palabras que son palíndromos (se leen igual al revés).
*/
const palabras = ["oso", "perro", "reconocer", "gato"];

// Función para saber si una palabra es palíndromo
function esPalindromo(palabra) {
  const palabraMinuscula = palabra.toLowerCase();
  const reverso = palabraMinuscula.split("").reverse().join("");
  return palabraMinuscula === reverso;
}

// Filtrar solo palíndromos
const palindromos = palabras.filter(esPalindromo);

console.log("Palíndromos encontrados:");
palindromos.forEach(p => console.log(`- ${p}`));
