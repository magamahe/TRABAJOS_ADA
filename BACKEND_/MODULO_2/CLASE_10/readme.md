# Clase Número 10 - Actividades

## ¡Atención, desarrolladoras!

Hoy vamos a poner en juego todo lo que venimos aprendiendo en estas clases. Vamos a desarrollar un **cliente que se conectará a un servidor TCP** y se comunicarán entre ellos.

Luego de ver este ejemplo, ¡es su turno de practicar!

---

## 🛠️ Ejercicio: Creación de un Chat Simple en TCP

### 🎯 Objetivo

Crear un **servidor y un cliente TCP** que se comuniquen entre sí.  
El servidor debe manejar múltiples clientes y mostrar mensajes de cada uno en la consola.  
Los clientes deben poder enviar mensajes al servidor, y el servidor debe responder con un mensaje de confirmación.

---

## 🧩 Parte 1: Crear el Servidor TCP

### 📄 Descripción

Crea un servidor TCP en **Node.js** que escuche en el puerto `5000`.  
El servidor debe manejar múltiples conexiones de clientes y mostrar los mensajes recibidos en la consola.  
Además, debe responder a cada mensaje con una confirmación que diga `"Mensaje recibido"`.

### ✅ Requisitos

- El servidor debe escuchar en el puerto **5000**.
- Debe manejar el evento `connection` para aceptar nuevas conexiones.
- Debe manejar el evento `data` para recibir y mostrar mensajes de los clientes.
- Debe manejar el evento `close` para detectar cuándo un cliente se desconecta.
- Debe manejar el evento `error` para mostrar cualquier error.
- El servidor debe responder a los mensajes con `"Mensaje recibido"`.

---

## 🧩 Parte 2: Crear el Cliente TCP

### 📄 Descripción

Crea un **cliente TCP en Node.js** que se conecte al servidor en el puerto `5000`.  
El cliente debe permitir al usuario ingresar mensajes en la consola y enviarlos al servidor.  
Debe mostrar en consola la respuesta del servidor.

### ✅ Requisitos

- El cliente debe conectarse al servidor en el puerto **5000** y en la dirección `localhost`.
- Debe permitir al usuario ingresar mensajes y enviarlos al servidor.
- Debe mostrar en la consola la respuesta del servidor.
- Debe manejar la desconexión y mostrar un mensaje cuando esto ocurra.

---

## ⚙️ Instrucciones

### 1. Configuración

- Crea dos archivos: `server.js` y `client.js`.
- Coloca el código correspondiente en cada uno.
- Asegúrate de instalar el módulo `readline-sync` para el cliente:
  ```bash
  npm install readline-sync

### 2. 🚀 Ejecución

- Ejecuta primero el servidor usando node server.js.
- Luego, ejecuta el cliente usando node client.js.
- Prueba enviando mensajes desde el cliente y verifica que el servidor los reciba y responda adecuadamente.

###3. PARTE 2 – Ejercicio 1: Variaciones y Extensiones:
- Variación: Cambia el puerto en el que el servidor escucha y el puerto al que el cliente se conecta.
- Extensión: Implementa funcionalidades adicionales, como permitir que el servidor envíe mensajes a todos los clientes conectados, o maneja múltiples clientes en el servidor.
- Realizar estas modificaciones en una copia del ejercicio