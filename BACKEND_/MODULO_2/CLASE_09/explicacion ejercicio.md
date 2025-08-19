# Diagrama Temporal de los 7 Desafíos TCP - Clase 9

Este diagrama muestra el flujo de tiempo de cada desafío, los eventos, pausas, reintentos y cierres de conexión en Node.js.

---

## Tiempo (s) ───────────────────────────────────────────────────────────────►

### DESAFÍO 1: Reconexión Automática

* 0s: Conexión inicial ─> Envía "¡Hola, servidor!"
* close: Reintenta cada 3s ─> Conexión nueva ──> Repetir

### DESAFÍO 2: Pausa y Reanudación

* 0s: Conexión inicial ──> Envía "¡Hola, servidor!"
* 3s: Pausa recepción (`client.pause()`)
* 8s: Reanuda recepción (`client.resume()`)
* 15s: Cierra conexión (`client.end()`)

### DESAFÍO 3: Timeout y Destrucción

* 0s: Conexión inicial ──> Envía "¡Hola, servidor!"
* 0s: Inicia timeout de 10s
* Si llega data antes de 10s ─> `clearTimeout`
* Si NO llega data ─> `client.destroy()`
* Cierre automático en cualquiera de los casos

### DESAFÍO 4: Mensajes Temporizados

* 0s: Conexión inicial ──> Envía "¡Hola, servidor!"
* 5s: Envía "Mensaje automático"
* 10s: Envía "Mensaje automático"
* 15s: Envía "Mensaje automático"
* 20s: Detener interval + Cerrar conexión

### DESAFÍO 5: ref() y unref()

* 0s: Conexión inicial ──> Envía "¡Hola, servidor!"
* 10s: `client.unref()` ─> permite terminar el proceso si no hay actividad
* 15s: `client.ref()` ─> mantiene el proceso activo
* 20s: `client.end()` ─> cerrar conexión

### DESAFÍO 6: Reintentos Inteligentes

* 0s: Conexión inicial
* close/error ─> Reintento cada 2s
* Contador de intentos:

  * 1 a 4 ─> reconectar
  * 5 ─> termina proceso con mensaje de error
* data ─> resetear contador

### DESAFÍO 7: Envío de Comandos con Validación

* 0s: Conexión inicial
* Usuario escribe comando ─> Validación con RegExp (`/^CMD_\w+$/`)
* Si válido ─> enviar al servidor
* Servidor responde:

  * "EXIT" ─> `client.end()` + terminar programa
  * otro ─> mostrar mensaje y seguir escuchando
