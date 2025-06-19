
## 🌟 Guía Interactiva: Scope y Objetos en JavaScript

---

### 🔹 1. FUNCIONES FLECHA (ARROW FUNCTIONS)

#### 📌 ¿Qué son?

Son una forma moderna de escribir funciones. Más cortas, más limpias y muy usadas en JavaScript moderno.

#### 🧱 Estructura básica:

```js
const saludar = () => {
  console.log("Hola!");
};
```

#### 🔍 Comparación:

| Tradicional            | Flecha                    |
| ---------------------- | ------------------------- |
| function sumar(a, b) { | const sumar = (a, b) => { |
| return a + b;          | return a + b;             |
| }                      | };                        |

#### ⚠️ Consejo:

Si el código tiene una sola línea, no hace falta poner llaves ni `return`:

```js
const restar = (a, b) => a - b;
```

#### 🎲 Práctica:

Convertí esta función:

```js
function saludar(nombre) {
  return "Hola " + nombre;
}
```

✅ Solución esperada:

```js
const saludar = nombre => "Hola " + nombre;
```

---

### 🔹 2. OBJETOS LITERALES

#### 📌 ¿Qué son?

Son estructuras que agrupan información relacionada. Ideal para representar cosas como una persona, un auto o un libro.

#### 🧱 Estructura:

```js
const persona = {
  nombre: "Ana",
  edad: 30,
  saludar: function () {
    console.log("Hola, soy Ana");
  }
};
```

#### 💻 Analogía:

Un objeto es como una ficha:

```
📁 persona
├── nombre: "Ana"
├── edad: 30
└── saludar: función()
```

#### 🎲 Práctica:

Completá con tus datos:

```js
const estudiante = {
  nombre: "____",
  curso: "____",
  presentarse: function () {
    console.log("Soy ___ y curso ___");
  }
};
```

---

### 🔹 3. SCOPE (Ámbito)

#### 📌 ¿Qué es?

Es el lugar desde donde podés acceder a una variable.

---

### 🔹 Scope Local

🔒 La variable solo vive dentro de una función o bloque.

```js
function ejemplo() {
  let mensaje = "Hola";
  console.log(mensaje); // ✅
}
console.log(mensaje); // ❌ No existe afuera
```

---

### 🔹 Scope Global

🌍 La variable es visible en todo el programa.

```js
let nombre = "Juan";

function decirHola() {
  console.log("Hola " + nombre); // ✅
}
```

---

### 🎯 DESAFÍO FINAL:

1. 🛠️ Escribí una arrow function que devuelva el doble de un número.
2. 🧑‍🏫 Creá un objeto `libro` con propiedades: `titulo`, `autor` y `leer()`.
3. 🥵 Declará una variable dentro de una función e intentá usarla desde afuera. ¿Qué pasa?

---

### 🎮 ACTIVIDAD BONUS:

“¡Detective Scope!” 🕵️‍♂️

Mostrá un ejemplo con error de scope y pediles que descubran el problema. Ej:

```js
function prueba() {
  let secreto = "shh";
}
console.log(secreto); // ❌
```
