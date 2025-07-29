
# 🧠 Actividades - Clase N°3: Manejo de Archivos y JSON en Node.js

¡Bienvenidas chicas!  
En esta serie de actividades, practicarán conceptos fundamentales sobre el manejo de archivos en Node.js y la manipulación de datos en formato JSON. Son esenciales para gestionar información de forma persistente y estructurada.

---

## 🧩 Conceptos clave

### 1. `fs.existsSync(path)`
Verifica si un archivo o directorio existe.

```js
if (!fs.existsSync('archivo.json')) {
  console.log('El archivo no existe');
}
```

---

### 2. `fs.writeFileSync(path, data, options)`
Escribe datos en un archivo de forma **sincrónica**. Si no existe, lo crea.

```js
const data = JSON.stringify({ nombre: 'Juan', edad: 30 }, null, 2);
fs.writeFileSync('persona.json', data, 'utf8');
```

---

### 3. `JSON.stringify(obj, replacer, space)`
Convierte un objeto en una cadena JSON.

```js
const persona = { nombre: 'Juan', edad: 30 };
const jsonString = JSON.stringify(persona, null, 2); // '2' para indentación
```

---

### 4. Trabajando con archivos JSON

#### Leer:
```js
const contenido = fs.readFileSync('archivo.json', 'utf8');
const datos = JSON.parse(contenido);
```

#### Escribir:
```js
const datos = [{ id: 1, nombre: 'Juan' }];
fs.writeFileSync('archivo.json', JSON.stringify(datos, null, 2), 'utf8');
```

---

### 5. Objetos y Arrays

```js
const persona = { nombre: 'Juan', edad: 30 };
const estudiantes = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'Ana', edad: 25 }
];
```

---

### 6. Manejo de errores
Aunque no usaremos `try/catch` por ahora, es importante entender que pueden ocurrir errores al leer o escribir archivos.

---

### 7. Formateo de JSON legible
Para archivos JSON legibles:

```js
JSON.stringify(objeto, null, 2);
```

---

## ✅ ¿Cómo resolver los ejercicios?

1. Leer la consigna cuidadosamente.
2. Identificar qué funciones de Node.js necesitás.
3. Implementar las funciones que interactúan con el archivo.
4. Probar el código y validar resultados.

---

# 📚 Actividades

---

## Actividad 1: Registro de libros favoritos

**Objetivo:**
- Agregar un libro (solo nombre).
- Listar los libros.

📌 *Usa un archivo JSON. Si no existe, arranca con un array vacío.*

---

## Actividad 2: Seguimiento de series de televisión

**Objetivo:**
- Registrar una serie (nombre y temporadas).
- Listar series.
- Actualizar temporadas de una serie.

📌 *Archivo JSON, empieza vacío si no existe.*

---

## Actividad 3: Registro de tareas pendientes

**Objetivo:**
- Agregar una tarea (descripción).
- Listar tareas.
- Eliminar tarea por ID.

📌 *Usa JSON para guardar.*

---

## Actividad 4: Control de inventario

**Objetivo:**
- Agregar producto (nombre y cantidad).
- Listar productos.
- Actualizar cantidad por ID.

📌 *Cada producto debe tener un ID único.*

---

## Actividad 5: Registro de contactos

**Objetivo:**
- Agregar contacto (nombre, teléfono, email).
- Listar contactos.
- Eliminar contacto.

📌 *Guardar en archivo JSON.*

---

## Actividad 6: Gestión de un diario personal

**Objetivo:**
- Agregar entrada (fecha + texto).
- Listar entradas.
- Eliminar entrada por ID.

📌 *Usá JSON como almacenamiento.*

---

## Actividad 7: Control de tareas diarias

**Objetivo:**
- Agregar tarea (descripción + estado).
- Listar tareas con estado.
- Marcar tarea como "completada".

📌 *El estado puede ser "pendiente" o "completada".*

---

## Actividad 8: Seguimiento de proyectos

**Objetivo:**
- Agregar proyecto (nombre + estado: "pendiente" o "en progreso").
- Listar proyectos.
- Actualizar estado a "finalizado" o "en progreso".

📌 *Usar IDs únicos para los proyectos.*

---

## Actividad 9: Registro de eventos

**Objetivo:**
- Agregar evento (nombre, fecha, lugar).
- Listar eventos.
- Eliminar evento por ID.

📌 *Guardar en archivo JSON.*

---

## Actividad 10: Gestión de compras

**Objetivo:**
- Agregar compra (nombre, precio).
- Listar compras.
- Eliminar compra por ID.

📌 *Cada compra debe tener un ID único.*

---

🎯 ¡A practicar! Estas actividades te darán las bases para construir apps que manejen datos reales de manera eficiente.
