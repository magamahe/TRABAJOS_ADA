
# 🛠️ Manipulación de un archivo JSON con Node.js (`fs`)

Este script realiza tres tareas principales: **leer**, **agregar un producto**, y **escribir** un archivo JSON utilizando el módulo `fs` de Node.js.

---

## 📂 1. Importo el módulo `fs`

```js
const fs = require('fs');
```

Utilizamos el módulo nativo `fs` (File System) para trabajar con archivos.

---

## 📄 2. Defino la ruta del archivo

```js
const rutaArchivo = './productos.json';
```

Establecemos la ubicación del archivo JSON que vamos a manipular.

---

## 📖 3. Abro y leo el archivo JSON

```js
fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo: ', err);
        return;
    }

    const productos = JSON.parse(data);
    console.log('\nProductos actuales:\n', productos);
```

- Leemos el archivo de forma asíncrona.
- Convertimos el contenido de texto a un objeto JavaScript usando `JSON.parse`.
- Mostramos el array actual de productos por consola.

---

## ➕ 4. Agrego un nuevo producto

```js
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: "Auriculares",
        precio: 45
    };

    productos.push(nuevoProducto);
    console.log('\nProductos actualizados: \n', productos);
```

Creamos un nuevo producto y lo agregamos al array con `push()`.

---

## 💾 5. Guardo los cambios en el archivo

```js
    const contenidoActualizado = JSON.stringify(productos, null, 2);

    fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
        if (err) {
            console.error('Error al escribir el archivo: ', err);
            return;
        }

        console.log('Archivo actualizado correctamente.');
    });
});
```

- Convertimos el array actualizado a formato JSON legible con `JSON.stringify`.
- Sobrescribimos el archivo `productos.json` con el contenido actualizado usando `fs.writeFile`.

---

✅ **Resultado esperado**:
- Se mostrará el contenido anterior.
- Se agregará un nuevo producto (Auriculares).
- El archivo `productos.json` quedará actualizado con el nuevo producto.

---
