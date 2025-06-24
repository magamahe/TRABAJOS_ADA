/* Ejercicio 3: Filtra productos en oferta

Dado este array de productos:

```js
const productos = [
  { nombre: 'Camisa', precio: 300 },
  { nombre: 'Pantalón', precio: 800 },
  { nombre: 'Gorra', precio: 150 },
  { nombre: 'Zapatos', precio: 1200 }
];
```

Filtrá los productos que cuesten **menos de $500** y guardá solo sus nombres. */

const productos = [
  { nombre: 'Camisa', precio: 300 },
  { nombre: 'Pantalón', precio: 800 },
  { nombre: 'Gorra', precio: 150 },
  { nombre: 'Zapatos', precio: 1200 }
];

const menos_500 = productos.filter(prod => prod.precio < 500)
                            . map (prod => prod.nombre)

console.log(menos_500);
