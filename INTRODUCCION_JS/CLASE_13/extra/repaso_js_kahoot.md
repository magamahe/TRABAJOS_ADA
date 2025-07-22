
# Repaso JavaScript - Pistas para Kahoot o Bloqueet + Respuestas

---

## 1. Condicionales `if`, `else if`, `else`
- ¿Cómo se estructura un condicional `if` en JavaScript?  
  **Respuesta:**  
  ```js
  if (condición) {
    // código si condición es true
  }
  ```
- ¿Qué hace un `else if` y cuándo se usa?  
  **Respuesta:**  
  Se usa para probar otra condición si la primera es falsa, ej:  
  ```js
  if (cond1) { ... } else if (cond2) { ... }
  ```
- ¿Qué pasa si ninguna condición se cumple en un `if`-`else`?  
  **Respuesta:**  
  Se ejecuta el bloque `else` si existe, sino no pasa nada.
- ¿Cuál es la diferencia entre `==` y `===`?  
  **Respuesta:**  
  `==` compara con conversión de tipo (coerción), `===` compara estrictamente sin conversión.

---

## 2. Bucles (`for`, `while`, `do...while`)
- ¿Cuál es la diferencia entre `while` y `do...while`?  
  **Respuesta:**  
  `while` verifica la condición antes de ejecutar el código; `do...while` ejecuta al menos una vez y luego verifica la condición.
- ¿Cuándo se usa un bucle `for`?  
  **Respuesta:**  
  Cuando sabemos cuántas veces queremos repetir un bloque de código (iteraciones controladas).
- ¿Qué pasa si la condición del `while` nunca se cumple?  
  **Respuesta:**  
  El bloque dentro del `while` no se ejecuta ni una sola vez.
- ¿Cómo evitar un bucle infinito?  
  **Respuesta:**  
  Asegurando que la condición eventualmente se vuelva falsa, por ejemplo actualizando variables dentro del ciclo.

---

## 3. Arrays y métodos básicos
- ¿Qué hace el método `.push()`? ¿Y `.pop()`?  
  **Respuesta:**  
  `.push()` agrega un elemento al final del array; `.pop()` elimina el último elemento y lo devuelve.
- ¿Para qué sirve `.shift()` y `.unshift()`?  
  **Respuesta:**  
  `.shift()` elimina el primer elemento; `.unshift()` agrega elementos al inicio.
- ¿Qué devuelve `.indexOf()` si no encuentra el elemento?  
  **Respuesta:**  
  Devuelve `-1`.
- ¿Cómo convertir un array en un string con un separador?  
  **Respuesta:**  
  Usando `.join(separador)`, ej: `arr.join(', ')`.
- ¿Qué método usas para verificar si un elemento existe en un array?  
  **Respuesta:**  
  `.includes(elemento)` devuelve `true` o `false`.

---

## 4. Propiedades y métodos de strings
- ¿Cómo obtener la longitud de un string?  
  **Respuesta:**  
  Con `.length`.
- ¿Qué hace `.slice()` en un string?  
  **Respuesta:**  
  Devuelve una subcadena (copia) desde un índice inicial a uno final (sin incluir).
- ¿Para qué sirve `.trim()`?  
  **Respuesta:**  
  Elimina espacios al inicio y final del string.
- ¿Cómo reemplazar una palabra en un string?  
  **Respuesta:**  
  Con `.replace('viejo', 'nuevo')`.
- ¿Cómo dividir un string en un array?  
  **Respuesta:**  
  Usando `.split(separador)`.

---

## 5. Objetos literales
- ¿Cómo se define un objeto literal en JavaScript?  
  **Respuesta:**  
  ```js
  const obj = { clave: valor, clave2: valor2 };
  ```
- ¿Cómo acceder a una propiedad de un objeto?  
  **Respuesta:**  
  `obj.clave` o `obj['clave']`.
- ¿Se puede modificar una propiedad de un objeto?  
  **Respuesta:**  
  Sí, asignando un nuevo valor, ej: `obj.clave = nuevoValor`.

---

## 6. Funciones
- ¿Qué diferencia hay entre una función declarada y una función expresada?  
  **Respuesta:**  
  Declarada: `function f() {}` (hoisting), expresada: `const f = function() {}` (no hoisting).
- ¿Qué es el scope (alcance) de una variable dentro de una función?  
  **Respuesta:**  
  Es el contexto donde la variable es accesible, local dentro de la función o global.
- ¿Qué es un callback y cómo se usa?  
  **Respuesta:**  
  Una función pasada como argumento a otra función para ejecutarla después.
- ¿Qué pasa si no se pasa un callback pero la función espera uno?  
  **Respuesta:**  
  Puede causar errores o que no se ejecute código esperado.

---

## 7. Métodos avanzados de arrays
- ¿Qué hace `.map()`? ¿Cómo es diferente de `.forEach()`?  
  **Respuesta:**  
  `.map()` crea un nuevo array transformado, `.forEach()` solo itera sin devolver nada.
- ¿Para qué sirve `.filter()`? ¿Qué devuelve?  
  **Respuesta:**  
  Filtra elementos que cumplen una condición, devuelve un nuevo array.
- ¿Qué devuelve `.find()` si no encuentra el elemento?  
  **Respuesta:**  
  `undefined`.
- ¿Cómo funciona `.reduce()`? ¿Para qué se usa?  
  **Respuesta:**  
  Acumula valores en un solo resultado, ej: suma, producto.
- ¿Cuál es la diferencia entre `.forEach()` y `.map()`?  
  **Respuesta:**  
  `.forEach()` no devuelve nada; `.map()` devuelve un nuevo array.

---

## 8. Matrices (arrays bidimensionales)
- ¿Cómo se recorre una matriz con bucles anidados?  
  **Respuesta:**  
  Con dos `for`, uno para filas y otro para columnas.
- ¿Qué es una matriz simétrica? ¿Se puede con matrices no cuadradas?  
  **Respuesta:**  
  Matriz cuadrada que es igual a su transpuesta. No existe para no cuadradas.
- ¿Qué es una matriz identidad?  
  **Respuesta:**  
  Matriz cuadrada con 1 en diagonal principal y 0 fuera de ella.
- ¿Cómo rotar una matriz 90° a la derecha?  
  **Respuesta:**  
  Trasponiendo y luego invirtiendo filas o columnas según el método.

---

## Consejos para responder
- Explica con ejemplos simples.  
- Si te piden diferencias, menciona casos prácticos.  
- Para métodos de arrays, piensa qué devuelve y qué modifica.  
- Para callbacks, recuerda que es una función pasada como argumento para ser llamada después.
