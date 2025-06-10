# Arrays en JavaScript

## ¿Qué es un array?

Un **array** es una colección ordenada de valores. Puede contener diferentes tipos de datos:

```javascript
let frutas = ["manzana", "banana", "pera"];
let numeros = [1, 2, 3, 4, 5];
```

---

## Propiedades principales

### `.length`
Devuelve la cantidad de elementos del array.

```javascript
let frutas = ["manzana", "banana"];
console.log(frutas.length); // 2
```

---

## Métodos comunes

### ➕ Agregar y quitar elementos

| Método         | Descripción                             |
|----------------|------------------------------------------|
| `push()`       | Agrega al final del array                |
| `pop()`        | Elimina el último elemento               |
| `unshift()`    | Agrega al inicio del array               |
| `shift()`      | Elimina el primer elemento               |

```javascript
let colores = ["rojo", "azul"];
colores.push("verde");
colores.pop();
colores.unshift("amarillo");
colores.shift();
```

---

### 🔁 Recorrer arrays

```javascript
let colores = ["rojo", "verde", "azul"];

for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

for (let color of colores) {
  console.log(color);
}

colores.forEach(function(color) {
  console.log(color);
});
```

---

### 🔍 Buscar y filtrar

```javascript
let numeros = [1, 2, 3, 4, 5];

numeros.includes(3);      // true
numeros.indexOf(4);       // 3
numeros.find(n => n > 3); // 4
numeros.filter(n => n % 2 === 0); // [2, 4]
```

---

### 🔧 Transformar

```javascript
let nums = [1, 2, 3];
nums.map(n => n * 2);     // [2, 4, 6]
nums.join(" - ");         // "1 - 2 - 3"
nums.concat([4, 5]);      // [1, 2, 3, 4, 5]
nums.slice(1, 3);         // [2, 3]
nums.splice(1, 1, 99);    // [1, 99, 3]
```

---

### 🔄 Ordenar

```javascript
let letras = ["c", "a", "b"];
letras.sort();   // ["a", "b", "c"]
letras.reverse(); // ["c", "b", "a"]
```

---

## Arrays mixtos

```javascript
let mixto = [42, "texto", true, [1, 2], {nombre: "Ana"}];
```
