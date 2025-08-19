# 🧠 Emmet Cheat Sheet – HTML + CSS

## 📌 Sección 1: Atajos HTML con ejemplos

| Atajo           | Expansión                        | Ejemplo                                      |
|----------------|----------------------------------|----------------------------------------------|
| `!`            | Boilerplate HTML                 | `<!DOCTYPE html><html><head>...`             |
| `ul>li*3`      | Lista con 3 ítems                | `<ul><li></li><li></li><li></li></ul>`       |
| `table>tr*2>td*3` | Tabla 2x3                     | `<table><tr><td></td>...</tr></table>`       |
| `a[href="#"]`  | Link vacío                       | `<a href="#"></a>`                           |
| `form:post`    | Formulario POST                  | `<form method="post"></form>`                |
| `input:email`  | Campo email                      | `<input type="email">`                       |
| `img:src`      | Imagen                           | `<img src="" alt="">`                        |
| `nav>ul>li*4>a`| Navbar básica                    | `<nav><ul><li><a></a></li>...</ul></nav>`    |
| `section>h2+p` | Sección con título               | `<section><h2></h2><p></p></section>`        |
| `div.container`| Div con clase                    | `<div class="container"></div>`              |

---

## 🎨 Sección 2: Atajos CSS con ejemplos

| Atajo     | Expansión                      | Ejemplo                        |
|----------|--------------------------------|--------------------------------|
| `pos:r`  | `position: relative;`          | Ideal para layouts             |
| `d:f`    | `display: flex;`               | Para contenedores flexibles    |
| `ai:c`   | `align-items: center;`         | Centrado vertical              |
| `jc:sb`  | `justify-content: space-between;` | Espaciado horizontal        |
| `m:0`    | `margin: 0;`                   | Reset de márgenes              |
| `p:1em`  | `padding: 1em;`                | Espaciado interno              |
| `bgc:#eee`| `background-color: #eee;`     | Fondo gris claro               |
| `c:#333` | `color: #333;`                 | Texto oscuro                   |
| `ff:sans`| `font-family: sans-serif;`     | Tipografía moderna             |
| `ta:c`   | `text-align: center;`          | Texto centrado                 |

---

## 🧩 Sección 3: Ejemplos prácticos

### 🔹 Navbar básica


nav>ul>li*3>a[href="#"]{Link}

🔹 Lista de tareas
ul.todo>li.task*5{Tarea $}

🔹 Grid de imágenes
div.grid>img[src="img$.jpg"]*6

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

##  🧾 Sección 4: Mini-hoja de referencia
### 🔸 HTML (Top 10)
!

ul>li*3

a[href="#"]

img:src

div.container

nav>ul>li>a

form:post

input:text

section>h2+p

table>tr*2>td*2

### 🔸 CSS (Top 10)
d:f

jc:c

ai:c

m:0

p:1em

bgc:#fff

c:#000

ff:sans

ta:c

pos:r

