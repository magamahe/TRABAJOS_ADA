# Actividades Clase Número 9

¡Atención, desarrolladoras!  

Ya han aprendido sobre los métodos y eventos clave para manejar conexiones TCP desde el cliente. Ahora es momento de poner sus habilidades a prueba con estos desafíos. Cada uno les planteará una situación distinta en la que deberán aplicar estos conceptos.

## Reglas generales para cada desafío
1. Creen un archivo `cliente.js` para cada ejercicio.  
2. Conéctense a un servidor TCP en el puerto 5000.  
3. Sigan las indicaciones específicas de cada consigna.  
4. ¡El código debe estar muy bien comentado!  

---

## DESAFÍO 1: Cliente con Reconexión Automática
**Objetivo:** Crear un cliente TCP que se conecte a un servidor, pero si la conexión se pierde, debe intentarlo nuevamente cada 3 segundos.  

**El cliente debe:**  
- Conectarse al servidor en el puerto 5000.  
- Enviar un mensaje inicial: `"¡Hola, servidor!"`.  
- Escuchar el evento `close` y volver a conectarse tras 3 segundos.  
- Escuchar y manejar `error`, mostrando el mensaje en consola.  

---

## DESAFÍO 2: Cliente con Pausa y Reanudación de Datos
**Objetivo:** Simular un cliente que pausa la recepción de datos por 5 segundos y luego la reanuda.  

**El cliente debe:**  
- Conectarse al servidor y enviar un mensaje inicial.  
- Escuchar el evento `data` y mostrar los datos en consola.  
- Pausar la recepción de datos usando `client.pause()` a los 3 segundos.  
- Reanudar la recepción de datos con `client.resume()` a los 8 segundos.  
- Finalizar la conexión tras 15 segundos.  

---

## DESAFÍO 3: Cliente con Timeout y Destrucción de Conexión
**Objetivo:** Implementar un timeout que cierre la conexión si no recibe datos en 10 segundos.  

**El cliente debe:**  
- Conectarse y enviar un mensaje inicial.  
- Configurar un `setTimeout()` de 10 segundos para cerrar la conexión si no recibe datos.  
- Escuchar el evento `data` y cancelar el timeout si recibe información.  
- Si no recibe datos en 10 segundos, usar `client.destroy()` y mostrar un mensaje en consola.  

---

## DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado
**Objetivo:** Enviar mensajes cada 5 segundos y cerrar la conexión tras 20 segundos.  

**El cliente debe:**  
- Conectarse y enviar un mensaje inicial.  
- Enviar un mensaje `"Mensaje automático"` cada 5 segundos.  
- Escuchar el evento `data` y mostrar los datos recibidos.  
- Cerrar la conexión con `client.end()` tras 20 segundos.  

---

## DESAFÍO 5: Cliente con Eventos y Control de Referencias
**Objetivo:** Aplicar `ref()` y `unref()` para controlar la terminación del proceso de Node.js.  

**El cliente debe:**  
- Conectarse y enviar un mensaje inicial.  
- Escuchar los eventos `data`, `end`, `close` y `error`.  
- Llamar a `client.unref()` a los 10 segundos para permitir que el proceso termine.  
- A los 15 segundos, llamar a `client.ref()` para que el proceso se mantenga activo.  
- Cerrar la conexión a los 20 segundos.  

---

## DESAFÍO 6: Cliente con Control Inteligente de Reintentos y Máximo de Fallos
**Objetivo:** Crear un cliente TCP que intente reconectarse si la conexión se pierde, pero que abandone después de 5 intentos fallidos.  

**El cliente debe:**  
- Intentar conectarse al servidor.  
- Si se desconecta, volver a intentar cada 2 segundos.  
- Llevar un contador de intentos fallidos.  
- Si llega a 5 intentos fallidos, terminar el proceso con un mensaje de error.  
- Manejar adecuadamente los eventos `error`, `close` y `data`.  

**Pista:** Usen un contador global de intentos y un `setTimeout()` para gestionar los reintentos.  

---

## DESAFÍO 7: Cliente con Envío de Comandos, Validación y Auto-Desconexión
**Objetivo:** Implementar un cliente TCP que permita al usuario ingresar comandos desde la terminal, los valide antes de enviarlos y cierre la conexión si se recibe una respuesta específica del servidor.  

**El cliente debe:**  
- Conectarse al servidor en el puerto 5000.  
- Leer la entrada del usuario desde la terminal con `readline`.  
- Solo permitir comandos que empiecen con `CMD_` (ejemplo: `CMD_HOLA`, `CMD_ADIOS`).  
- Enviar los comandos al servidor solo si son válidos.  
- Escuchar respuestas del servidor.  
- Si el servidor responde `"EXIT"`, cerrar la conexión y terminar el programa.  

---

### Uso de Expresiones Regulares (RegExp) para Validar Comandos
**Por qué usamos RegExp en este ejercicio:**  
- Para validar que los comandos tengan el formato correcto (`CMD_ALGO`).  
- Evita errores o mensajes inválidos.  

**Qué es una Expresión Regular:**  
- Secuencia de caracteres que define un patrón de búsqueda.  
- Se usa para validar formatos de texto como correos, números o comandos TCP.  

**Ejemplo en este desafío:**  

```javascript
const regex = /^CMD_\w+$/;
```

| Símbolo | Significado |
|----------|------------|
| `^`      | El texto debe empezar con lo que sigue (`CMD_`) |
| `CMD_`   | Obligatorio que el comando comience con `CMD_` |
| `\w+`    | Permite letras, números o guiones bajos después de `CMD_` |
| `$`      | No debe haber más caracteres después del comando válido |

**Ejemplos válidos:**  
- `CMD_HOLA`  
- `CMD_ADIOS`  
- `CMD_123`  
- `CMD_TEST_`  

**Ejemplos inválidos:**  
- `HOLA_CMD` (no comienza con CMD_)  
- `CMD-TEST` (usa "-" en lugar de "_")  
- `CMD` (no tiene nada después del guion bajo)  
- `CMD!ERROR` (contiene un carácter especial "!")  

**Beneficios de usar RegExp:**  
- Evita errores: asegura que solo se envíen comandos correctos.  
- Mejor experiencia de usuario: muestra un mensaje de error si el formato es incorrecto.  
- Seguridad: impide que comandos mal formateados afecten el servidor.  

**TIP:**  
Si necesitás permitir otros caracteres como guiones `-`, podés modificar la expresión:  

```javascript
/^CMD_[\w-]+$/
```

Esto permitiría comandos como `CMD-TEST` o `CMD_PRUEBA-1`.

