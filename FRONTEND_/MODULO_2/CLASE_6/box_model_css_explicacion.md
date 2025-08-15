
# Propiedades clave del Box Model en CSS

Cada elemento HTML se representa como una caja rectangular que se compone de varias capas. Las siguientes propiedades CSS son fundamentales para controlar el tamaño, espacio y comportamiento de esas cajas.

---

## Propiedades principales

| Propiedad       | Qué controla / Hace                                    | Valores comunes / Ejemplos                        |
|-----------------|-------------------------------------------------------|-------------------------------------------------|
| `width`         | Ancho del área de contenido (excluye padding y borde) | `width: 200px;` o `%`, `auto` (por defecto)     |
| `height`        | Alto del área de contenido                             | `height: 100px;`                                 |
| `padding`       | Espacio interno entre contenido y borde               | `padding: 10px;` o `padding: 10px 15px 5px 20px;`|
| `padding-top`, `padding-right`, `padding-bottom`, `padding-left` | Padding por lado individual                   | `padding-left: 20px;`                            |
| `border`        | Borde alrededor de padding + contenido                 | `border: 2px solid black;`                        |
| `border-width`, `border-style`, `border-color` | Personalización del borde                   | `border-width: 4px; border-style: dashed; border-color: red;`|
| `margin`        | Espacio externo que separa la caja de otros elementos  | `margin: 15px;` o `margin: 10px 0 5px 20px;`    |
| `margin-top`, `margin-right`, `margin-bottom`, `margin-left` | Margen por lado individual                      | `margin-top: 30px;`                              |
| `display`       | Tipo de caja / comportamiento visual                   | `block`, `inline`, `inline-block`, `flex`, `grid`, `none` |
| `box-sizing`    | Cómo se calcula el tamaño total del elemento           | `content-box` (default), `border-box`            |
| `overflow`      | Qué hacer si contenido se sale del área                 | `visible`, `hidden`, `scroll`, `auto`            |
| `position`      | Posición del elemento en la página                      | `static`, `relative`, `absolute`, `fixed`, `sticky` |
| `top`, `right`, `bottom`, `left` | Desplazamientos para elementos posicionados       | `top: 10px; left: 20px;`                          |
| `float`         | Flotación para que el elemento se alinee a izquierda o derecha | `float: left;`, `float: right;`                  |
| `clear`         | Limpia flotación anterior para elementos posteriores   | `clear: both;`                                   |
| `vertical-align`| Alineación vertical en elementos inline o inline-block | `vertical-align: middle;`                         |

---

## Detalles importantes

### 1. `box-sizing`

Define cómo se calcula el ancho y alto total del elemento:

- `content-box` (por defecto):  
  El ancho y alto que defines sólo afecta al contenido, **el padding y el borde se suman al tamaño total**.

- `border-box`:  
  El ancho y alto incluyen contenido + padding + borde. Es más fácil para hacer layouts porque el tamaño total no cambia cuando agregas padding o borde.

Ejemplo:

```css
box-sizing: border-box;
width: 200px; /* total, incluyendo padding y borde */
padding: 20px;
border: 5px solid black;
```

---

### 2. `display`

Determina cómo se comporta el elemento en el flujo de la página:

- `block`: caja en bloque (ocupa línea completa, puede definir ancho/alto)
- `inline`: caja en línea (ocupa solo espacio necesario, no permite ancho/alto)
- `inline-block`: inline pero permite ancho/alto
- `none`: oculta el elemento (no ocupa espacio)
- `flex`, `grid`: para layouts avanzados

---

### 3. Margen colapsado (Margin collapsing)

Cuando dos elementos en bloque están uno encima del otro, los márgenes verticales pueden “colapsar” y solo se toma el mayor de los dos márgenes en vez de sumarlos.

---

### 4. Posicionamiento (`position`)

Controla la posición relativa o absoluta del elemento:

- `static`: comportamiento normal (default)
- `relative`: posición relativa a su lugar normal, puede desplazarse con top/left etc.
- `absolute`: posición absoluta respecto al contenedor posicionado más cercano
- `fixed`: posición fija respecto a la ventana del navegador
- `sticky`: se comporta como relative hasta cierto punto, luego se fija

---

### 5. `overflow`

Controla qué pasa si el contenido no cabe dentro del área asignada:

- `visible`: contenido se desborda y se muestra (default)
- `hidden`: recorta contenido que sobrepasa el área
- `scroll`: agrega barras de scroll siempre
- `auto`: agrega scroll sólo si es necesario

---

## Bonus: Espacios internos y externos

- **Padding** es espacio interno, empuja el contenido hacia adentro.
- **Margin** es espacio externo, empuja otros elementos lejos.

---

¿Quieres que te prepare ejemplos prácticos para cada propiedad o un resumen visual del box model?  
