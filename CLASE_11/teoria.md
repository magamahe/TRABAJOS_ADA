📘 **Guía Interactiva: Estructuras en JavaScript (If Ternario, Switch y For)**

---

## 🎯 TEMA 1: If Ternario — ¡Decisiones Express!

### 🔍 ¿Qué es?

El `if` ternario es una forma corta de tomar decisiones.

### 🧠 Analogía:

Es como responder "Sí o No" rápidamente:

```js
¿Tengo hambre? 
  Sí -> como pizza 🍕
  No  -> sigo sin comer 😌
```

### 📦 Sintaxis:

```js
condición ? valorSiEsVerdadero : valorSiEsFalso;
```

### 🧪 Ejemplo:

```js
let edad = 20;
let mensaje = edad >= 18 ? "Sos mayor de edad" : "Sos menor de edad";
console.log(mensaje);
```

### 🎮 Práctica 1:

```js
let clima = "soleado";
let ropa = clima === "soleado" ? "Llevá lentes 😎" : "Llevá paraguas ☔";
console.log(ropa);
```

---

## 🎯 TEMA 2: Switch — El Menú del Día 🍽️

### 🔍 ¿Qué es?

El `switch` permite elegir entre muchas opciones sin usar muchos `if`.

### 🧠 Analogía:

Menú de restaurante:

```js
switch (opcion) {
  case "pizza":
    console.log("Elegiste 🍕");
    break;
  case "ensalada":
    console.log("Elegiste 🥗");
    break;
  default:
    console.log("¡Esa opción no está en el menú!");
}
```

### 📦 Sintaxis del switch:

```js
switch (expresion) {
  case valor1:
    // Código a ejecutar si expresion === valor1
    break;
  case valor2:
    // Código a ejecutar si expresion === valor2
    break;
  default:
    // Código a ejecutar si ningún case coincide
}
```

* **`expresion`**: es lo que se evalúa una sola vez.
* **`case`**: cada valor posible a comparar.
* **`break`**: evita que se sigan ejecutando otros casos.
* **`default`**: opción por defecto si no hay coincidencia.

### 🎮 Práctica 2:

```js
let comida = prompt("¿Qué querés comer? (pizza, empanada, ensalada)");

switch (comida) {
  case "pizza":
    alert("¡Excelente elección! 🍕");
    break;
  case "empanada":
    alert("¡Muy argentino! 🥟");
    break;
  case "ensalada":
    alert("¡A cuidarse! 🥗");
    break;
  default:
    alert("Esa comida no está disponible 😅");
}
```

---

## 🎯 TEMA 3: For — ¡Repetí como un Pro! 🔁

### 🔍 ¿Qué es?

Es una forma de hacer algo muchas veces sin repetir el código.

### 🧠 Analogía:

Repartir 10 invitaciones sin copiar el mismo texto 10 veces:

```js
for (let i = 1; i <= 10; i++) {
  console.log(`Entregando invitación número ${i}`);
}
```

### 📦 Sintaxis del for:

```js
for (inicialización; condición; incremento) {
  // Código que se repite mientras la condición sea verdadera
}
```

* **Inicialización**: Se ejecuta una vez al comienzo (ej. `let i = 0`)
* **Condición**: Se evalúa antes de cada iteración (ej. `i < 5`)
* **Incremento**: Se ejecuta al final de cada iteración (ej. `i++`)

### 🎮 Práctica 3:

```js
for (let i = 1; i <= 5; i++) {
  console.log(`👏 Aplauso ${i}`);
}
```

---

## 🧩 Desafío Final: Tu primer programa interactivo 🎉

Crea un programa que:

1. Pregunte tu nombre
2. Te dé la bienvenida
3. Pregunte tu edad
4. Use `if ternario` para determinar si sos mayor de edad
5. Use `switch` para mostrar un mensaje según tu comida favorita

```js
let nombre = prompt("¿Cómo te llamás?");
alert("¡Bienvenida/o " + nombre + "!");

let edad = parseInt(prompt("¿Qué edad tenés?"));
let acceso = edad >= 18 ? "Podés entrar 🚪" : "No podés entrar 🚫";
alert(acceso);

let comida = prompt("¿Cuál es tu comida favorita? (pizza, ensalada, empanada)");

switch (comida) {
  case "pizza":
    alert("Aguante la muzza 🍕");
    break;
  case "ensalada":
    alert("Saludable decisión 🥗");
    break;
  case "empanada":
    alert("Clásico nacional 🥟");
    break;
  default:
    alert("¡Esa comida no la conozco! 😅");
}
```

---

## 🚀 Reflexión Final:

> Aprender estructuras es como armar una receta: necesitás los pasos correctos para que salga bien.
> Con práctica y juegos, ¡vas a cocinar tus propios programas sin receta! 🍳💻
