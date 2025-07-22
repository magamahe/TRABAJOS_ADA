🌟 **Guía Interactiva: Métodos Avanzados y Callbacks en JavaScript**

🎯 **Objetivo de la clase**: Comprender y aplicar los métodos avanzados de Arrays (`map`, `filter`, `reduce`, `forEach`, `find`) junto con el concepto de **callback** de manera práctica, intuitiva y entretenida.

---

🔹 **1. ¿Qué es un Callback?**

📌 Es una **función que se pasa como parámetro** a otra función para que esta última la ejecute en un momento determinado.

🧠 Ejemplo:

```js
function procesar(valor, callback) {
  return callback(valor);
}
procesar(5, function(x) {
  return x * 2;
});
```

✅ `callback` es la función anónima que multiplica por 2.

🎲 **Actividad**: Escribí un ejemplo donde una función recibe otra función que imprime un saludo.

---

🔹 \*\*2. Método \*\***`.map()`**

📌 Crea un **nuevo array** aplicando una transformación a cada elemento.

🧱 Estructura:

```js
const nuevoArray = originalArray.map((elemento, indice, array) => {
  return elemento * 2;
});
```

🧪 Ejemplo:

```js
const numeros = [1, 2, 3];
const doble = numeros.map(n => n * 2); // [2, 4, 6]
```

🎲 **Desafío**: Convertí este array de precios en uno con IVA del 21%.

---

🔹 \*\*3. Método \*\***`.filter()`**

📌 Devuelve un nuevo array **con los elementos que cumplan una condición**.

🧱 Estructura:

```js
const mayores = numeros.filter(n => n > 10);
```

🧪 Ejemplo:

```js
const edades = [12, 25, 17, 30];
const mayoresDeEdad = edades.filter(e => e >= 18); // [25, 30]
```

🎲 **Actividad**: Filtrá los nombres que tengan más de 5 letras.

---

🔹 \*\*4. Método \*\***`.reduce()`**

📌 Reduce un array a un único valor (acumulador).

🧱 Estructura:

```js
const total = array.reduce((acumulador, valorActual) => acumulador + valorActual, valorInicial);
```

🧪 Ejemplo:

```js
const gastos = [100, 200, 300];
const totalGasto = gastos.reduce((acc, val) => acc + val, 0); // 600
```

🎲 **Desafío**: Sumá todos los elementos de un array con `reduce()`.

---

🔹 \*\*5. Método \*\***`.forEach()`**

📌 Ejecuta una función por cada elemento del array (sin devolver nada).

🧪 Ejemplo:

```js
const frutas = ["🍎", "🍌", "🍇"];
frutas.forEach(f => console.log(f));
```

🎲 **Práctica**: Mostrá por consola todos los elementos de un array de nombres.

---

🔹 \*\*6. Método \*\***`.find()`**

📌 Devuelve el **primer elemento** que cumpla una condición.

🧪 Ejemplo:

```js
const perros = [
  {nombre: "Fido", raza: "Labrador"},
  {nombre: "Toby", raza: "Chihuahua"},
];
const buscado = perros.find(p => p.raza === "Chihuahua"); // {nombre: "Toby", raza: "Chihuahua"}
```

🎲 **Desafío**: Encontrá un producto por su nombre en un array de objetos.

---

🚀 **Bonus Track: Comparativa rápida**

| Método  | ¿Devuelve array? | ¿Modifica original? | ¿Para qué sirve?                |
| ------- | ---------------- | ------------------- | ------------------------------- |
| map     | ✅                | ❌                   | Transformar valores             |
| filter  | ✅                | ❌                   | Filtrar por condición           |
| reduce  | ❌                | ❌                   | Reducir a un solo valor         |
| forEach | ❌                | ❌                   | Recorrer sin retornar           |
| find    | ❌ (1 elemento)   | ❌                   | Encontrar el primero que cumple |

---

💡 **Tip final**:
Siempre que uses estos métodos, pensá: ¿necesito transformar, filtrar, recorrer, buscar o acumular?

🧠 ¡Practicá en la consola o en CodeSandbox para dominar estos poderosos métodos!

---

---
