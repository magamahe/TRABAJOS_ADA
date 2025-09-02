# 📚 Clase 13 – Patrón MVC con Cliente-Servidor TCP

En esta práctica vamos a trabajar con el **patrón MVC (Modelo-Vista-Controlador)** en un entorno de **cliente-servidor TCP**.  
Este patrón nos ayuda a organizar nuestro código de manera modular, separando las responsabilidades en tres componentes principales:

- **Modelo** → manejo de datos (lectura de archivos JSON, búsqueda de información).
- **Vista** → formateo de la respuesta que se envía al cliente.
- **Controlador** → recibe la solicitud del cliente, consulta al modelo y pasa el resultado a la vista.

---

## ✨ Ejercicios

### 📝 Ejercicio 1: Sistema de Gestión de Libros
**Consigna:**  
Implementar un sistema de gestión de libros donde el cliente pueda solicitar información sobre un libro específico a través de su **ID**.  

- **Servidor TCP (puerto 4000):**
  - Recibe solicitudes con el ID de un libro.
  - Utiliza el patrón MVC:
    - **Modelo**: Lee `books.json` y busca el libro por ID.
    - **Vista**: Da formato a la respuesta en JSON.
    - **Controlador**: Maneja la solicitud y conecta modelo + vista.
  - Envía la respuesta al cliente y cierra la conexión.

- **Cliente TCP:**
  - Se conecta al servidor en el puerto `4000`.
  - Permite ingresar el ID del libro.
  - Recibe la respuesta y la muestra en consola.

**Estructura del proyecto:**
```
models/bookModel.js        # Modelo de libros
views/bookView.js          # Vista de libros
controllers/bookController.js # Controlador de libros
server.js                  # Servidor TCP
client.js                  # Cliente TCP
```

---

### 🏨 Ejercicio 2: Sistema de Reservas de Hoteles
**Consigna:**  
Implementar un sistema de reservas de hoteles donde el cliente pueda consultar la **disponibilidad de habitaciones** en un hotel específico.  

- **Servidor TCP (puerto 4001):**
  - Recibe solicitudes con el ID del hotel.
  - Utiliza el patrón MVC:
    - **Modelo**: Lee `hotels.json` y busca disponibilidad por ID.
    - **Vista**: Da formato a la respuesta en JSON.
    - **Controlador**: Maneja la solicitud y conecta modelo + vista.
  - Envía la respuesta al cliente y cierra la conexión.

- **Cliente TCP:**
  - Se conecta al servidor en el puerto `4001`.
  - Permite ingresar el ID del hotel.
  - Recibe la respuesta y la muestra en consola.

**Estructura del proyecto:**
```
models/hotelModel.js       # Modelo de hoteles
views/hotelView.js         # Vista de hoteles
controllers/hotelController.js # Controlador de hoteles
server.js                  # Servidor TCP
client.js                  # Cliente TCP
```

---

### 🎬 Ejercicio 3: Sistema de Gestión de Películas
**Consigna:**  
Implementar un sistema de gestión de películas donde el cliente pueda solicitar información sobre una película específica a través de su **título**.  

- **Servidor TCP (puerto 4002):**
  - Recibe solicitudes con el título de una película.
  - Utiliza el patrón MVC:
    - **Modelo**: Lee `movies.json` y busca la película por título.
    - **Vista**: Da formato a la respuesta en JSON.
    - **Controlador**: Maneja la solicitud y conecta modelo + vista.
  - Envía la respuesta al cliente y cierra la conexión.

- **Cliente TCP:**
  - Se conecta al servidor en el puerto `4002`.
  - Permite ingresar el título de la película.
  - Recibe la respuesta y la muestra en consola.

**Estructura del proyecto:**
```
models/movieModel.js       # Modelo de películas
views/movieView.js         # Vista de películas
controllers/movieController.js # Controlador de películas
server.js                  # Servidor TCP
client.js                  # Cliente TCP
```

---

## 🚀 Resumen
- **Ejercicio 1 (Libros)** → Consulta por **ID de libro** en `books.json` → puerto `4000`.
- **Ejercicio 2 (Hoteles)** → Consulta por **ID de hotel** en `hotels.json` → puerto `4001`.
- **Ejercicio 3 (Películas)** → Consulta por **título de película** en `movies.json` → puerto `4002`.

Cada proyecto sigue el **patrón MVC** con:
- **Modelos** para la lógica de datos.
- **Vistas** para formatear las respuestas.
- **Controladores** para manejar las solicitudes.
- **Cliente y Servidor TCP** para la comunicación.

---
