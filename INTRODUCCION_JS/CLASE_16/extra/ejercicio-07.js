/* ## 🔸 Ejercicio 7: Calculá el precio total con IVA

Dado:

```js
const items = [
  { producto: 'Libro', precio: 100 },
  { producto: 'Agenda', precio: 200 }
];

Sumá el precio total con **21% de IVA** incluido. Mostrá el resultado final en consola.
 */

const items = [
  { producto: 'Libro', precio: 100 },
  { producto: 'Agenda', precio: 200 }
];

const total = items.reduce((acum, item) => acum + item.precio * 1.21, 0);

console.log(total);
