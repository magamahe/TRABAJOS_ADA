# JavaScript: Conceptos y Ejemplos Prácticos

---

## 1. Objetos Literales

### Concepto  
Un objeto literal es una colección de pares clave-valor, usado para agrupar datos relacionados.

### Estructura básica

```js
const persona = {
  nombre: "Ana",
  edad: 30,
  profesion: "Desarrolladora"
};
```

---

## 2. Métodos Básicos de Arrays

- **`push(elemento)`**: Agrega un elemento al final del array.

```js
const arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
```

- **`pop()`**: Elimina y devuelve el último elemento.

```js
const arr = [1, 2, 3];
const ultimo = arr.pop();
console.log(ultimo); // 3
console.log(arr); // [1, 2]
```

- **`shift()`**: Elimina y devuelve el primer elemento.

```js
const arr = [1, 2, 3];
const primero = arr.shift();
console.log(primero); // 1
console.log(arr); // [2, 3]
```

- **`unshift(elemento)`**: Agrega un elemento al inicio del array.

```js
const arr = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]
```

- **`join(separador)`**: Une los elementos en un string con el separador indicado.

```js
const arr = ['a', 'b', 'c'];
const str = arr.join('-');
console.log(str); // "a-b-c"
```

- **`indexOf(elemento)`**: Devuelve la primera posición del elemento (o -1 si no está).

```js
const arr = [1, 2, 3, 2];
console.log(arr.indexOf(2)); // 1
```

- **`lastIndexOf(elemento)`**: Devuelve la última posición del elemento (o -1 si no está).

```js
const arr = [1, 2, 3, 2];
console.log(arr.lastIndexOf(2)); // 3
```

- **`includes(elemento)`**: Devuelve `true` si el elemento está en el array.

```js
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(5)); // false
```

---

## 3. Propiedades en Strings

- **`.length`**: Devuelve la longitud del string.

```js
const str = "Hola";
console.log(str.length); // 4
```

- **`.indexOf(substring)`**: Devuelve la posición de la primera aparición o -1.

```js
const str = "JavaScript";
console.log(str.indexOf("Script")); // 4
console.log(str.indexOf("Python")); // -1
```

---

## 4. Métodos de Strings

- **`slice(inicio, fin)`**: Extrae una sección del string desde `inicio` hasta `fin` (sin incluir `fin`).

```js
const str = "Hola mundo";
console.log(str.slice(0, 4)); // "Hola"
console.log(str.slice(5));    // "mundo"
```

- **`trim()`**: Elimina espacios al inicio y al final del string.

```js
const str = "   Hola mundo   ";
console.log(str.trim()); // "Hola mundo"
```

- **`replace(valorBuscado, valorReemplazo)`**: Reemplaza la primera aparición.

```js
const str = "Hola mundo";
console.log(str.replace("mundo", "JavaScript")); // "Hola JavaScript"
```

- **`split(separador)`**: Divide el string en un array usando el separador.

```js
const str = "a,b,c";
const arr = str.split(",");
console.log(arr); // ["a", "b", "c"]
```

---

## 5. Callbacks

### Concepto  
Una función que se pasa como argumento a otra función para que se ejecute después.

### Ejemplo

```js
function procesar(callback) {
  console.log("Procesando...");
  callback();
}

procesar(function() {
  console.log("Callback ejecutado");
});
```

---

## 6. Métodos Avanzados de Arrays

### `.map()`  
Crea un nuevo array transformando cada elemento.

```js
const nums = [1, 2, 3];
const dobles = nums.map(n => n * 2); // [2, 4, 6]
```

### `.filter()`  
Filtra elementos que cumplen una condición.

```js
const nums = [1, 2, 3, 4];
const pares = nums.filter(n => n % 2 === 0); // [2, 4]
```

### `.find()`  
Encuentra el primer elemento que cumple la condición.

```js
const nums = [1, 2, 3, 4];
const mayorQueDos = nums.find(n => n > 2); // 3
```

### `.reduce()`  
Reduce un array a un solo valor acumulando.

```js
const nums = [1, 2, 3, 4];
const suma = nums.reduce((acc, n) => acc + n, 0); // 10
```

### `.forEach()`  
Ejecuta una función para cada elemento (no devuelve nuevo array).

```js
const nums = [1, 2, 3];
nums.forEach(n => console.log(n));
```

---
