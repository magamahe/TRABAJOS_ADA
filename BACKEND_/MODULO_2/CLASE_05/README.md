
# Clase 5 - Servidor TCP con Node.js

## Introducción

En esta clase vamos a construir un servidor TCP paso a paso. Estos ejercicios están diseñados para agregar funcionalidades básicas a un servidor en un único archivo llamado `servidor.js`.

---

## Conceptos importantes

### Evento
Eventos son acciones que ocurren en el servidor mientras está en funcionamiento. Los principales que usaremos son:

- `data`: Se activa cuando el servidor recibe datos.
- `end`: Se activa cuando un cliente cierra la conexión.

### Buffer
Es una forma especial en Node.js de manejar datos binarios. Para convertirlo en texto legible, se usa `.toString()`.

---

## Reglas para los ejercicios

1. Todo el código irá en `servidor.js`.
2. Usamos solo conceptos ya aprendidos.
3. Resolver paso a paso.

---

## Ejercicio 1: Crear el servidor básico

**Objetivo**: Configurar un servidor TCP que escuche en el puerto 5000.

**Guía**:
- Crear archivo `servidor.js`
- Importar el módulo `net`
- Crear el servidor
- Escuchar en puerto 5000
- Mostrar mensaje en consola al iniciar

---

## Ejercicio 2: Detectar conexiones de clientes

**Objetivo**: Mostrar un mensaje cuando un cliente se conecta.

**Guía**:
- Agregar mensaje en la función que se ejecuta al conectar un cliente: `"¡Un cliente se ha conectado!"`

---

## Ejercicio 3: Recibir y mostrar datos del cliente

**Objetivo**: Mostrar en consola el mensaje del cliente.

**Guía**:
- Usar evento `data` en el socket
- Convertir el buffer con `.toString()`
- Mostrar: `"Mensaje recibido del cliente: <mensaje>"`

---

## Ejercicio 4: Responder al cliente

**Objetivo**: Enviar una respuesta al cliente.

**Guía**:
- Dentro del evento `data`, usar `socket.write(...)`
- Mensaje: `"¡Hola, cliente! Tu mensaje fue recibido correctamente."`

---

## Ejercicio 5: Detectar cuando el cliente se desconecta

**Objetivo**: Mostrar mensaje al desconectarse.

**Guía**:
- Usar evento `end` en el socket
- Mostrar: `"El cliente se ha desconectado."`

---

## Reflexión Final

Ahora el servidor puede:
1. Escuchar conexiones
2. Detectar y responder mensajes
3. Manejar desconexiones

---

## Ejercicio Extra: Contador de Clientes Conectados

**Objetivo**: Contar clientes conectados simultáneamente.

**Guía**:

1. Crear variable global `clientesConectados = 0`
2. Incrementar en cada conexión y mostrar: `"Clientes conectados: X"`
3. Decrementar en cada desconexión y mostrar lo mismo

---

¡Felicitaciones por completar los ejercicios! 🚀
