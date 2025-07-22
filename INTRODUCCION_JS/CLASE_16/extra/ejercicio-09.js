/* ## 🔸 Ejercicio 9: Verificá si todos los nombres tienen más de 3 letras

Con `['Eva', 'Juan', 'Sol', 'Leo', 'Martina']`, verificá si **todos** los nombres tienen **más de 3 letras**.
 */

const nombres = ['Eva', 'Juan', 'Sol', 'Leo', 'Martina'];

//.every() te dice si todos los elementos de un array cumplen una regla que vos definís.
const todosMayoresQueTres = nombres.every(nombre => nombre.length > 3);

console.log(todosMayoresQueTres); // false, porque 'Eva', 'Sol' y 'Leo' tienen 3 letras o menos

