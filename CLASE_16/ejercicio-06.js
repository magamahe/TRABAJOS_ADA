/* ● Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra 
Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. 
Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un 
sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!". 
 */

let palabras = ['hola', 'mundo', 'javascript'];

let palabrasConSignos = palabras.map(palabra => `¡${palabra}!`);

console.log(palabrasConSignos);


/////////OTRA OPCION

/* let palabras = ['hola', 'mundo', 'javascript'];

let resultado = palabras.map(palabra => {
  let letras = palabra.split('');     // ['h', 'o', 'l', 'a']
  letras.unshift('¡');                // ['¡', 'h', 'o', 'l', 'a']
  letras.push('!');                   // ['¡', 'h', 'o', 'l', 'a', '!']
  return letras.join('');             // '¡hola!'
});

console.log(resultado);
// ["¡hola!", "¡mundo!", "¡javascript!"] */
