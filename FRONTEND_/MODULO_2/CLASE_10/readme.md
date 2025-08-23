# Formularios

## Ejercicios

### Registro de cliente

Se requiere crear un formulario para el registro rápido para un portal web de un cliente, por lo que necesitaremos lo siguiente:

Crear un formulario con los campos.

- Nombre
- Apellido
- DNI
- Email
- Contraseña
- Términos y condiciones de uso

Todos `input` debe tener su correspondiente `label` y debe ser del tipo adecuado. A su vez todo `input` debe tener un `placeholder` que contenga un ejemplo del lo que se espera que se complete en dicho `input`. Por ejemplo, el `placeholder` para `email` puede ser `adalovelace@gmail.com`

Para el input de DNI nos aseguraremos que solo puedan ingresar números. En esta oportunidad solo se podrán registrar un DNI Argentino por lo que su máximo será de 8 caracteres.

La contraseña debe ser mayor a 8 caracteres pero no puede exceder los 16.

Se debe colocar un check para saber que el usuario acepta los términos de uso de el portal.

**No es necesario agregarles estilos**

- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_01_Cliente/index.html) 


---

### Carga de productos

Crearemos un formulario para la carga rápida de productos para una empresa de bicicletas. Para eso mostraremos los siguientes campos:

- Título de producto (input de texto)
- Marca (`select` con `options`):
  - Klatter
  - Top Mega
  - Fierce
  - Shimano
  - Lamborghini
  - Aurora
  - GT
- Rodado (input numérico)
- Categoría de producto (radio button):
  - Mountain Bike
  - Paseo
  - Plegable
  - Carrera
- Descripción del producto (`textarea`)
- Botón que diga "Cargar" (de tipo `submit`)

Tanto el `select` como los `radio` deben tener el atributo `value` con el mismo valor que tienen en el texto.

**No es necesario agregarles estilos**

- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_02_Productos/index.html) 
---

### Pago

¡Es momento de pagar! para ello necesitaremos los datos de una tarjeta para que puedan realizar la compra.

Crearemos un formulario con los siguientes datos:

- Número de tarjeta de crédito
- Nombre completo del titular
- Selector del mes en números
- Input del año en números (no puede ser menor al año actual y no puede ser mayor a 10 años del año actual)
- CCV (código de seguridad) que debe ser de tipo password
- Botón de pagar

**No es necesario agregarles estilos**

- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_03_Pago/index.html) 
---

### Registro de cliente (con estilos)

Es momento de darle color a nuestros formularios. Utilizaremos el formulario de registro que hemos realizado anteriormente y seguiremos los siguientes pasos:

- Colocarlo en un contenedor con padding y que esté centrado con respecto a la pantalla
- Nombre y apellido deben quedar en la misma línea
- DNI y Email deben estar por debajo del anterior, siendo que lógicamente el email será más largo, asignaremos más espacio a este.
- Para la contraseña crearemos otro input que sea repetir contraseña del mismo tipo.
- En la parte inferior del formulario deben estar el check de "Aceptar términos y condiciones" a la derecha y el botón de registrarse a la derecha.
- Los campos de input deben tener un leve redondeo
- El botón de registrar debe tener un color de fondo a elección, su borde levemente redondeado y con un box-shadow sutil.
- Colocar una etiqueta `small` por debajo de las contraseñas donde le indiquemos al usuario que "La contraseña debe tener como mínimo 8 carácteres y como máximo 16"

Se debe lograr una maqueta similar a la siguiente:

![alt text](https://i.ibb.co/9rPNFRV/formulario-fw.png)
- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/eejercicio_04_Registro_Cliente/index.html) 
---

### Diseños

Tenemos encargado replicar los siguientes diseño lo más parecido que podamos. En caso de que no tengamos información sobre colores, fuentes o imágenes, podemos hacer uso de cualquiera que creamos conveniente o que se parezca a la utilizada. También ignoraremos cosas que aún no hemos visto, como:

- agregar íconos dentro de los `inputs`
- hacer que `radio buttons` y `checkbox` se vean distintos a los estilos por default
- hacer que `selects` tengan una flecha diferente

**Links**

1) [Foro](https://uidesigndaily.com/posts/sketch-forum-components-card-dropdown-list-form-day-1153) (Solo el componente que dice **Create a new topic**)

- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_01_Cliente/index.html) 
---

2. [Autenticación](https://uidesigndaily.com/posts/sketch-login-log-in-authentication-day-559)
- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_05_2_Autenticacion/index.html) 
---

3. [Contacto](https://uidesigndaily.com/posts/sketch-contact-page-form-website-day-915)
- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_05_3_Contacto/index.html) 
---

4. [Reservación Hotel I](https://colorlib.com/etc/bforms/colorlib-booking-1/)
- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_05_4_HotelI/index.html) 
---

5. [Reservación Hotel II](https://colorlib.com/etc/bforms/colorlib-booking-11/)
- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_05_5_HotelII/index.html) 
---

6. [Reservación Taxi](https://colorlib.com/etc/bforms/colorlib-booking-4/)
- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_05_6_Taxi/index.html) 
---

7. [Reservación Hotel III](https://uidesigndaily.com/posts/sketch-quick-reservation-hotel-booking-form-day-578)
   
- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_05_7_HotelIII/index.html) 
---

1. [Registro](https://dribbble.com/shots/5499795-Sign-Up/attachments)
   
- [VER RESUELTO](https://magamahe.github.io/TRABAJOS_ADA/FRONTEND_/MODULO_2/CLASE_10/ejercicio_05_8_Registro/index.html) 
---