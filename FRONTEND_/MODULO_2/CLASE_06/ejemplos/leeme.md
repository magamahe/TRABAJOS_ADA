# Tabla de propiedades CSS comunes

| Propiedad                    | Descripción                                                     | Uso principal                                         |
| ---------------------------- | --------------------------------------------------------------- | ----------------------------------------------------- |
| **color**                    | Define el color del texto                                       | Cambiar el color de la fuente                         |
| **background**               | Define el color o imagen de fondo de un elemento                | Poner colores o imágenes de fondo                     |
| **padding**                  | Espacio interno entre contenido y borde                         | Separar contenido del borde del contenedor            |
| **margin**                   | Espacio externo fuera del borde                                 | Separar elementos entre sí                            |
| **border**                   | Define borde alrededor del elemento                             | Crear bordes con color, grosor y estilo               |
| **width**                    | Ancho del elemento                                              | Definir tamaño horizontal                             |
| **height**                   | Altura del elemento                                             | Definir tamaño vertical                               |
| **font-size**                | Tamaño de la fuente                                             | Cambiar tamaño del texto                              |
| **font-weight**              | Grosor de la fuente (normal, bold, números)                     | Controlar negrita o grosor del texto                  |
| **line-height**              | Altura de línea (espacio vertical entre líneas)                 | Mejorar legibilidad y separación de texto             |
| **display**                  | Cómo se muestra el elemento (block, inline, flex)               | Controlar el modelo de caja y comportamiento          |
| **position**                 | Controla el posicionamiento (static, relative, absolute, fixed) | Ubicar elementos en lugares específicos               |
| **top, bottom, left, right** | Posición relativa a contenedor o viewport                       | Ajustar posición cuando se usa `position`             |
| **flex-direction**           | Dirección de los hijos en un contenedor flex (row, column)      | Organizar elementos en fila o columna                 |
| **justify-content**          | Distribución de espacio en eje principal (flex)                 | Alinear y distribuir hijos en flexbox                 |
| **align-items**              | Alineación en eje transversal (flex)                            | Centrar o alinear verticalmente en flexbox            |
| **gap**                      | Espacio entre elementos en flex o grid                          | Separar elementos sin usar márgenes manuales          |
| **border-radius**            | Redondea las esquinas del borde                                 | Dar bordes suaves o circulares                        |
| **box-shadow**               | Añade sombra alrededor del elemento                             | Dar profundidad y efecto visual                       |
| **opacity**                  | Opacidad/transparencia del elemento                             | Hacer elementos translúcidos o invisibles             |
| **overflow**                 | Qué pasa si contenido excede tamaño (hidden, scroll, auto)      | Controlar scroll o recorte del contenido              |
| **z-index**                  | Orden en eje Z (superposición)                                  | Controlar qué elemento está arriba o abajo            |
| **text-decoration**          | Decoraciones en texto (underline, none)                         | Subrayados, tachados, estilos en enlaces              |
| **transition**               | Animaciones suaves en cambios de propiedades                    | Crear efectos visuales agradables en cambios CSS      |
| **object-fit**               | Cómo se ajusta una imagen/video en su contenedor                | Controlar recorte o escalado de imágenes/videos       |
| **cursor**                   | Cambia el tipo de cursor (pointer, default, etc.)               | Cambiar apariencia del cursor al pasar sobre elemento |

| Propiedad / Selector         | Descripción                                                                               | Uso principal                                      |
| ---------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **list-style-type**          | Define el tipo de marcador en listas (disc, circle, square, none, decimal, etc.)          | Cambiar el tipo de puntito o número en listas      |
| **list-style-position**      | Posición del marcador: `outside` (fuera del texto) o `inside` (dentro del área de texto)  | Controlar dónde aparecen los puntitos/números      |
| **list-style**               | Propiedad abreviada que combina tipo, posición e imagen del marcador                      | Configurar marcador y posición en un solo estilo   |
| **padding-left** (en listas) | Espacio interno a la izquierda para que los marcadores y texto no queden pegados al borde | Ajustar indentado de la lista                      |
| **margin-left** (en listas)  | Espacio externo a la izquierda del contenedor lista                                       | Ajustar separación de la lista con otros elementos |

| Selector Pseudo-clase | Descripción                                                                                                 | Uso principal                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **a\:hover**          | Aplica estilos cuando el cursor pasa sobre un enlace                                                        | Interacción visual al pasar el mouse por un link                       |
| **a\:focus**          | Aplica estilos cuando un enlace recibe foco (ej. al tabular con teclado)                                    | Indicar qué enlace está seleccionado/focalizado                        |
| **a\:focus-visible**  | Aplica estilos cuando el foco es visible (usado para accesibilidad, aparece al tabular pero no al clickear) | Mejorar accesibilidad resaltando foco visible sin molestar visualmente |
