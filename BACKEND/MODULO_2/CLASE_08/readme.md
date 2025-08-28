# Actividades Clase Número 8 - Node.js TCP

¡Hola Chicas!  
Hoy tienen frente a ustedes una serie de ejercicios para practicar `net.createConnection` en Node.js.

Estos ejercicios les ayudarán a reforzar:

- Creación de conexiones TCP con `net.createConnection`.
- Uso de métodos como `.write()`, `.end()`, `.pause()`, `.resume()`, `.destroy()`, `.setTimeout()`, `.unref()` y `.ref()`.
- Gestión de eventos con `socket.on()`.
- Comunicación efectiva entre cliente y servidor.
- Configuración de tiempos de espera y manejo de conexiones inactivas.

---

## Ejercicio 1: Conectar y enviar un mensaje al servidor

**Consigna:**  
1. Conectarse a un servidor en `localhost:5000`.  
2. Enviar el mensaje: `"¡Hola, servidor!"`.  
3. Escuchar y mostrar los datos recibidos en consola.

**Pistas:**  
- Usa `net.createConnection()`.  
- Maneja el evento `'connect'`.  
- Usa `client.write()` y `client.on('data', callback)`.

---

## Ejercicio 2: Implementar un timeout en la conexión

**Consigna:**  
1. Si no recibe respuesta después de 5 segundos, cerrar la conexión.  
2. Mostrar `"Tiempo de espera agotado"` antes de cerrar.

**Pistas:**  
- Usa `client.setTimeout(5000)`.  
- En el callback de timeout, usa `client.end()`.

---

## Ejercicio 3: Pausar y reanudar la recepción de datos

**Consigna:**  
1. Recibir mensajes continuamente del servidor.  
2. Al recibir el primer mensaje, pausar la recepción durante 3 segundos.  
3. Reanudar la recepción y seguir mostrando mensajes.

**Pistas:**  
- Usa `client.pause()` y `client.resume()`.  
- `setTimeout()` ayuda a reanudar.

---

## Ejercicio 4: Manejo de errores en la conexión

**Consigna:**  
1. Detectar errores y mostrarlos con `"Error: [mensaje]"`.  
2. Si la conexión se cierra inesperadamente, mostrar `"Conexión cerrada inesperadamente"`.

**Pistas:**  
- `client.on('error', callback)`.  
- `client.on('close', callback)`.

---

## Ejercicio 5: Detectar cuando el servidor cierra la conexión

**Consigna:**  
1. Conectarse y enviar `"¿Sigues ahí, servidor?"`.  
2. Cuando el servidor cierre la conexión, mostrar `"Servidor cerró la conexión"`.

**Pistas:**  
- Usa el evento `'end'`.

---

## Ejercicio 6: Cliente interactivo con la usuaria

**Consigna:**  
1. La usuaria puede escribir mensajes en consola y enviarlos al servidor.  
2. Después de cada mensaje, puede escribir otro.  
3. Si escribe `"salir"`, se desconecta.

**Pistas:**  
- Usa `readline` para capturar texto.  
- Usa `client.end()` para desconectarse.

---

## Ejercicio 7: Cliente que destruye el socket al fallar

**Consigna:**  
1. Conectarse al servidor.  
2. Si ocurre un error, usar `client.destroy()` y mostrar `"Conexión destruida"`.

**Pistas:**  
- `client.destroy()` libera los recursos inmediatamente.

---

## Ejercicio 8: Cliente con unref/ref para control de procesos

**Consigna:**  
1. Usar `client.unref()` para permitir que Node.js termine si no hay otras tareas.  
2. Después de 5 segundos, usar `client.ref()` para evitar que el proceso termine.

**Pistas:**  
- `unref()` permite que el proceso finalice.  
- `ref()` lo mantiene activo.

---

## Ejercicio 9: Cliente que reconecta automáticamente

**Consigna:**  
1. Si la conexión falla, reintentar cada 3 segundos hasta tener éxito.

**Pistas:**  
- Usa `setTimeout()` para el reintento.  
- Llama a `net.createConnection()` dentro del reintento.

---

## Ejercicio 10: Cliente que detecta pérdida de conexión

**Consigna:**  
1. Si no se reciben datos durante 10 segundos, mostrar `"No hay datos del servidor"` y cerrar la conexión.

**Pistas:**  
- Usa `setTimeout()` que se reinicie con cada mensaje recibido.  
- Cierra con `client.end()` si pasan 10 segundos sin mensajes.
