/* ● Encuentra los nombres más cortos y transforma su formato 
Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 
'Pablo']. Queremos realizar varias tareas con esta lista: 
o Primero, filtra los nombres que tengan menos de 5 letras. 
o Luego, transforma los nombres resultantes para que estén en 
mayúsculas. 
o Finalmente, construye una frase que diga: "Los nombres 
seleccionados son: [nombres]", donde [nombres] sea la lista resultante 
unida por comas. 
Al final, imprime la frase en la consola. 
 */

const nombres = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

// 1. Filtrar nombres con menos de 5 letras
const nombresCortos = nombres.filter(nombre => nombre.length < 5);

// 2. Transformar esos nombres a mayúsculas
const nombresMayus = nombresCortos.map(nombre => nombre.toUpperCase());

// 3. Construir la frase uniendo los nombres con comas
const frase = `Los nombres seleccionados son: ${nombresMayus.join(', ')}`;

// 4. Imprimir la frase
console.log(frase);
