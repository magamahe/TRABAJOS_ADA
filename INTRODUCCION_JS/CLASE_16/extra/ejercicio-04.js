/* 
## 🔸 Ejercicio 4: Encontrá la palabra más larga

Dada la lista `['luz', 'montaña', 'sol', 'universo']`, encontrá la palabra que tenga **más letras**.
 */

 const lista = ['luz', 'montaña', 'sol', 'universo'];

 const mas_letras = lista.reduce((másLarga, palabraActual) => {
  return palabraActual.length > másLarga.length ? palabraActual : másLarga;
});

console.log(mas_letras)