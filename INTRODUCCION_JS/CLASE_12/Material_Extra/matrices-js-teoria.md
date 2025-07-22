# Matrices en JavaScript

## ¿Qué es una matriz?

Una **matriz** es un array bidimensional: un array que contiene otros arrays como elementos.

```javascript
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

---

## Acceder a elementos

```javascript
console.log(matriz[0][0]); // 1
console.log(matriz[1][2]); // 6
console.log(matriz[2][1]); // 8
```

---

## Recorrer una matriz con for anidado

```javascript
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Elemento [${i}][${j}]:`, matriz[i][j]);
  }
}
```

---

## Usar forEach y map

```javascript
matriz.forEach(fila => {
  fila.forEach(col => console.log(col));
});

let dobles = matriz.map(fila => fila.map(n => n * 2));
```

---

## Tamaño de la matriz

```javascript
let filas = matriz.length;
let columnas = matriz[0].length;
```

---

## Arrays irregulares

También es posible que no todas las filas tengan la misma cantidad de columnas:

```javascript
let irregular = [
  [1, 2],
  [3, 4, 5],
  [6]
];
```
