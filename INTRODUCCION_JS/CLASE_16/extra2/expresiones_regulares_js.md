
# Expresiones Regulares (RegEx) en JavaScript

Las expresiones regulares son patrones que se utilizan para buscar, validar o manipular texto. Se usan comúnmente con el método `.test()` en JavaScript.

---

## 🧪 `.test()` – ¿Qué hace?

`expresionRegular.test(texto)` devuelve `true` si el texto **coincide con el patrón**, o `false` si no.

```js
/[A-Z]/.test("Hola");  // true → tiene una mayúscula
/\d/.test("abc123");   // true → tiene un número
```

---

## 🧩 Expresiones comunes

| Expresión              | Qué valida                                 | Ejemplo válido            |
|------------------------|---------------------------------------------|----------------------------|
| `/^[a-z]+$/i`          | Solo letras (mayús. o minús.)               | `"Hola"` → true            |
| `/^\d+$/`              | Solo dígitos (número entero)                | `"12345"` → true           |
| `/^[\w.-]+@[a-z]+\.[a-z]{2,}$/i` | Email básico                  | `"ana@mail.com"` → true    |
| `/\d{3}-\d{3}-\d{4}/`  | Teléfono tipo 123-456-7890                  | `"123-456-7890"` → true    |
| `/^[A-Z][a-z]+$/`      | Empieza con mayúscula, sigue minúsculas     | `"Gabriela"` → true        |
| `/^\s*$/`              | String vacío o solo espacios                | `"   "` → true             |
| `/[A-Z]/`              | Al menos una letra mayúscula                | `"aB"` → true              |
| `/[a-z]/`              | Al menos una letra minúscula                | `"A1b"` → true             |
| `/[0-9]/`              | Al menos un número                          | `"abc1"` → true            |
| `/[^A-Za-z0-9]/`       | Caracteres especiales                       | `"hola!"` → true           |

---

## 📌 Validaciones típicas

### 1. Validar Email (simple)
```js
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
regexEmail.test("usuario@mail.com");  // true
regexEmail.test("usuario@mail");      // false
```

---

### 2. Contraseña segura

Debe tener:
- Al menos 8 caracteres
- Una mayúscula
- Una minúscula
- Un número
- Un carácter especial

```js
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
regexPassword.test("Abc12345!");  // true
```

---

### 3. Teléfono (formato `123-456-7890`)
```js
const regexTelefono = /^\d{3}-\d{3}-\d{4}$/;
regexTelefono.test("123-456-7890"); // true
```

---

### 4. Nombre solo con letras y espacios
```js
const regexNombre = /^[A-Za-z\s]+$/;
regexNombre.test("Juan Pérez");  // true
```

---

## 🧠 Símbolos comunes

| Símbolo | Significado                      |
|---------|----------------------------------|
| `^`     | Inicio del string                |
| `$`     | Fin del string                   |
| `.`     | Cualquier carácter               |
| `\d`    | Dígito `[0-9]`                   |
| `\w`    | Letra, número o guion bajo       |
| `\s`    | Espacio en blanco                |
| `+`     | Uno o más                        |
| `*`     | Cero o más                       |
| `{n}`   | Exactamente `n` repeticiones     |
| `{n,}`  | Al menos `n` repeticiones        |
| `{n,m}` | Entre `n` y `m` repeticiones     |
| `[]`    | Conjunto de caracteres           |
| `()`    | Agrupamiento                     |
| `?=`    | Lookahead (condición futura)     |

---

¿Querés más ejemplos personalizados o para algún caso de tu trabajo?
