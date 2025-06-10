📘 **Guía Visual Didáctica: Diferencia entre ************`while`************, ************`do...while`************, arrays y matrices en JavaScript**

---

## 🔄 ¿Qué son los bucles?

Un bucle repite una acción mientras se cumpla una condición.

Pero hay dos formas principales de hacerlo:

### 🔁 `while`

```js
while (condición) {
  // Código a repetir si la condición es verdadera
}
```

👉 *Primero evalúa la condición, luego ejecuta el código.*

### 🔁 `do...while`

```js
do {
  // Código a ejecutar al menos una vez
} while (condición);
```

👉 *Ejecuta el código al menos una vez, luego evalúa la condición.*

---

## 🧠 Analogía para bucles: "La fiesta y la comida"

### 🍽️ `while`: "¿Tenés hambre? Entonces comé."

* Si no tenés hambre desde el inicio, **no comés nada**.

### 🍽️ `do...while`: "Probá una vez el plato, ¡después decidís si querés más!"

* Aunque no tengas hambre, **probás una vez sí o sí**.

---

## 💻 Ejemplos Prácticos de bucles

### ✅ `while`: Verifica antes

```js
let numero = 5;

while (numero < 5) {
  console.log("Hola"); // No se ejecuta nunca
}
```

### ✅ `do...while`: Ejecuta al menos una vez

```js
let numero = 5;

do {
  console.log("Hola"); // Se ejecuta UNA VEZ
} while (numero < 5);
```

---

## 🧪 Actividad en clase: “Adivinanza secreta”

```js
let secreto = 7;
let intento;

do {
  intento = parseInt(prompt("Adiviná el número (1 al 10):"));
} while (intento !== secreto);

alert("¡Correcto!");
```

🎯 Siempre permite al menos un intento. Ideal para comprender `do...while`.

### ✨ Actividad sencilla:

Crear un programa que pida la edad de una persona con `do...while` y repita el pedido hasta que ingrese un número mayor a 0.

---

## 📝 Frase clave para recordar

> "`while` pregunta antes de actuar. `do...while` actúa primero, y pregunta después."

| Situación                             | ¿Cuál usar?  | ¿Por qué?                                 |
| ------------------------------------- | ------------ | ----------------------------------------- |
| Verificar login antes de continuar    | `while`      | Solo actúa si hay login válido            |
| Pedir datos obligatorios (ej: nombre) | `do...while` | El usuario debe escribir al menos una vez |

---

## 🧩 Arrays: ¿Qué son?

Un **array** es una lista de elementos, ordenados por índices.

```js
let frutas = ["manzana", "banana", "naranja"];
```

👉 Cada elemento tiene una posición (índice): `0`, `1`, `2`, etc.

### 🎯 Ejercicio:

Crea un array con tus 3 colores favoritos e imprimilos con un bucle `for`.

### ✨ Actividad sencilla:

Crear un array con 5 nombres de personas. Mostrar por consola todos los nombres que empiecen con la letra "M".

---

## 🎲 Matrices: ¿Qué son?

Una **matriz** es un array de arrays (una tabla de filas y columnas).

```js
let edades = [
  [10, 12, 14],
  [20, 22, 24],
  [30, 32, 34]
];
```

👉 `edades[1][2]` accede a la fila 1, columna 2 → devuelve `24`

### 🧠 Analogía:

Imaginá una **sala de cine**: filas y butacas.
Cada posición en la matriz representa una butaca (ocupada o libre).

---

## 🔄 Recorrer una matriz

### 🔹 Por fila:

```js
for (let i = 0; i < matriz[fila].length; i++) {
  console.log(matriz[fila][i]);
}
```

### 🔹 Por columna:

```js
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i][columna]);
}
```

### 🔹 Toda la matriz (doble `for`):

```js
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
```

---

## 🧪 Actividad práctica con matriz:

### 1. Crear una matriz que represente butacas de cine:

```js
let cine = [
  ["L", "O", "L"],
  ["O", "O", "L"],
  ["L", "L", "O"]
];
```

> L = Libre | O = Ocupada

### 2. Mostrar todas las butacas ocupadas:

```js
for (let i = 0; i < cine.length; i++) {
  for (let j = 0; j < cine[i].length; j++) {
    if (cine[i][j] === "O") {
      console.log(`Butaca ocupada en fila ${i}, columna ${j}`);
    }
  }
}
```

### 3. Mostrar si hay butacas libres en la fila 2:

```js
let libres = 0;
for (let j = 0; j < cine[2].length; j++) {
  if (cine[2][j] === "L") {
    libres++;
  }
}

if (libres > 0) {
  console.log("Hay butacas libres en la fila 2");
} else {
  console.log("No hay butacas libres en la fila 2");
}
```

---

### ✨ Actividad sencilla:

Cargar una matriz 3x3 con números del 1 al 9. Mostrar la suma de cada fila por separado:

```js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
  let suma = 0;
  for (let j = 0; j < matriz[i].length; j++) {
    suma += matriz[i][j];
  }
  console.log(`Suma de la fila ${i}: ${suma}`);
}
```
