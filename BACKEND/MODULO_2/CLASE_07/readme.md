# Carrera Back End con NodeJs  
**Profesora:** Sachetti Sofía  

## Actividades Clase Número 7

¡Hola Chicas!  

Hoy tienen frente a ustedes una serie de ejercicios que les ayudarán a poner en práctica todo lo aprendido en clase sobre sockets en Node.js.  

Estos ejercicios están diseñados para reforzar conceptos clave como:  

- El uso de sockets y sus métodos principales.  
- La gestión de eventos con `socket.on` para manejar conexiones, datos, errores y cierres.  
- La interacción entre cliente y servidor mediante el envío y recepción de mensajes.  
- La configuración de tiempos de espera (timeout) y el manejo de conexiones inactivas.  

Cada ejercicio está pensado para que puedan aprender de manera progresiva, construyendo confianza y consolidando lo que vimos en clase.  
**¡Recuerden que la práctica es la clave del éxito!**

---

## Ejercitación

### Ejercicio 1: Servidor de Eco
**Consigna:**  
Crea un servidor TCP que actúe como un servidor de eco. Cuando un cliente se conecte, el servidor debe recibir los datos enviados por el cliente y devolverlos exactamente igual (hacer un "eco"). Además, el servidor debe imprimir en la consola cada vez que un cliente se conecta, desconecta o envía datos.

**Requisitos:**  
- Usa el evento `connection` para detectar nuevas conexiones.  
- Usa el evento `data` para recibir datos del cliente.  
- Usa el método `socket.write()` para enviar los datos de vuelta al cliente.  
- Usa los eventos `end` y `close` para manejar la desconexión del cliente.  

---

### Ejercicio 2: Servidor con Timeout
**Consigna:**  
Crea un servidor TCP que cierre automáticamente la conexión con un cliente si no recibe datos en un período de 10 segundos. Si el cliente envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar el contador de tiempo.

**Requisitos:**  
- Usa el método `socket.setTimeout()` para establecer un tiempo de espera.  
- Usa el evento `timeout` para cerrar la conexión si se alcanza el tiempo límite.  
- Usa el evento `data` para reiniciar el contador de tiempo cada vez que se reciben datos.  

---

### Ejercicio 3: Servidor de Mensajes Personalizados
**Consigna:**  
Crea un servidor TCP que permita a los clientes enviar mensajes. El servidor debe responder con un mensaje personalizado dependiendo del contenido del mensaje recibido:  

- Si el cliente envía `"Hola"`, el servidor debe responder `"¡Bienvenido!"`.  
- Si el cliente envía `"Adiós"`, el servidor debe responder `"¡Hasta luego!"` y cerrar la conexión.  
- Para cualquier otro mensaje, el servidor debe responder `"Mensaje recibido: [mensaje del cliente]"`.  

**Requisitos:**  
- Usa el evento `data` para recibir y procesar los mensajes del cliente.  
- Usa el método `socket.write()` para enviar respuestas personalizadas.  
- Usa el método `socket.end()` para cerrar la conexión cuando el cliente envíe `"Adiós"`.  

---

### Ejercicio 4: Servidor con Manejo de Errores
**Consigna:**  
Crea un servidor TCP que maneje errores de conexión de manera adecuada. Si ocurre un error en la conexión con un cliente, el servidor debe imprimir un mensaje de error en la consola y cerrar la conexión con ese cliente. Además, el servidor debe seguir funcionando y aceptando nuevas conexiones.

**Requisitos:**  
- Usa el evento `error` para detectar errores en la conexión.  
- Usa el método `socket.destroy()` para cerrar la conexión en caso de error.  
- Asegúrate de que el servidor siga escuchando nuevas conexiones después de manejar el error.  

---

### Ejercicio 5: Servidor con Contador de Conexiones
**Consigna:**  
Crea un servidor TCP que lleve un contador de cuántos clientes se han conectado. Cada vez que un nuevo cliente se conecta, el servidor debe enviarle un mensaje indicando cuántos clientes se han conectado hasta ese momento. Cuando un cliente se desconecta, el servidor debe reducir el contador.

**Requisitos:**  
- Usa una variable global para mantener el contador de conexiones.  
- Usa el evento `connection` para incrementar el contador y enviar el mensaje al cliente.  
- Usa el evento `close` para reducir el contador cuando un cliente se desconecta.  

---

### Ejercicio 6: Servidor de Comandos
**Consigna:**  
Crea un servidor TCP que permita a los clientes enviar comandos simples. Dependiendo del comando recibido, el servidor debe realizar una acción específica:  

- Si el cliente envía `"fecha"`, el servidor debe responder con la fecha y hora actual.  
- Si el cliente envía `"ip"`, el servidor debe responder con la dirección IP del cliente.  
- Si el cliente envía `"salir"`, el servidor debe cerrar la conexión.  
- Para cualquier otro comando, el servidor debe responder `"Comando no reconocido"`.  

**Requisitos:**  
- Usa el evento `data` para recibir y procesar los comandos.  
- Usa el método `socket.write()` para enviar respuestas.  
- Usa el método `socket.end()` para cerrar la conexión cuando el cliente envíe `"salir"`.  

---

## A partir de aquí los ejercicios tienen una dificultad mayor

---

### Ejercicio 7: Servidor de Chat Grupal
**Consigna:**  
Crea un servidor TCP que permita a múltiples clientes conectarse y enviar mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a todos los demás clientes conectados. El servidor debe notificar cuando un cliente se conecta o desconecta.

**Requisitos:**  
- Usa un array para almacenar las conexiones de los clientes.  
- Usa el evento `data` para recibir mensajes y retransmitirlos a todos los clientes.  
- Usa el evento `end` para eliminar a un cliente del array cuando se desconecta.  
- Notifica a los demás clientes cuando alguien se conecta o desconecta.  

---

### Ejercicio 8: Servidor con Autenticación Simple
**Consigna:**  
Crea un servidor TCP que requiera que los clientes se autentiquen antes de poder enviar mensajes. El servidor debe solicitar un nombre de usuario y una contraseña. Si las credenciales son correctas, el servidor debe permitir que el cliente envíe mensajes. Si no, debe cerrar la conexión.

**Requisitos:**  
- Usa el evento `data` para recibir las credenciales y validarlas.  
- Usa el método `socket.write()` para solicitar credenciales y enviar mensajes de éxito/error.  
- Usa el método `socket.end()` para cerrar la conexión si las credenciales son incorrectas.  

---

### Ejercicio 9: Servidor de Transferencia de Archivos
**Consigna:**  
Crea un servidor TCP que permita a los clientes enviar un archivo de texto al servidor. El servidor debe guardar el archivo en el sistema y notificar al cliente cuando la transferencia se haya completado. Además, el servidor debe verificar que el archivo no exceda un tamaño máximo de 1 MB.

**Requisitos:**  
- Usa el evento `data` para recibir el archivo en trozos (*chunks*).  
- Usa el método `socket.write()` para notificar al cliente sobre el progreso de la transferencia.  
- Usa el método `fs.writeFile()` para guardar el archivo en el servidor.  
- Si el archivo excede 1 MB, cierra la conexión y notifica al cliente.  

---

### Ejercicio 10: Servidor con Historial de Mensajes
**Consigna:**  
Crea un servidor TCP que almacene un historial de los últimos 10 mensajes enviados por los clientes. Cuando un nuevo cliente se conecte, el servidor debe enviarle el historial de mensajes. Los mensajes deben almacenarse en memoria y actualizarse cada vez que un cliente envía un nuevo mensaje.

**Requisitos:**  
- Usa un array para almacenar el historial de mensajes.  
- Usa el evento `data` para recibir mensajes y actualizar el historial.  
- Usa el método `socket.write()` para enviar el historial al cliente cuando se conecta.  
- Limita el historial a los últimos 10 mensajes.  
