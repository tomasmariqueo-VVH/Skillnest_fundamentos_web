# 📚 Guía de Desarrollo — ViajePlus

> **Actividad:** Construcción de una interfaz web responsiva a partir de un wireframe.  
> **Tecnologías:** HTML5 · CSS3 · Flexbox · JavaScript  
> **Restricción principal:** La responsividad debe resolverse **sin utilizar `@media queries`**.  
> **Restricción adicional:** El trabajo debe realizarse **sin herramientas de Inteligencia Artificial generativa**.

---

## 🎯 Objetivo de aprendizaje

Construir una interfaz web a partir de un wireframe, organizando correctamente el documento HTML y utilizando **CSS y Flexbox para crear una distribución adaptable a diferentes tamaños de pantalla**, incorporando posteriormente JavaScript para las funcionalidades solicitadas.

El desarrollo debe seguir este orden:

```text
HTML
   ↓
CSS básico
   ↓
FLEXBOX
   ↓
RESPONSIVIDAD
   ↓
JAVASCRIPT
```

> ⚠️ **Importante:** Esta guía contiene tips, conceptos y ejemplos parciales.  
> **No contiene la solución completa del ejercicio.**

---

# 1. 🧱 Comienza por el HTML

Antes de escribir CSS, organiza correctamente la estructura de la página.

Una estructura inicial puede ser:

```html
<body>

    <header>
        ...
    </header>

    <nav>
        ...
    </nav>

    <main>

        <section>
            ...
        </section>

        <section>
            ...
        </section>

    </main>

    <footer>
        ...
    </footer>

</body>
```

Utiliza elementos semánticos cuando correspondan:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

### 💡 Consejo

No construyas toda la página utilizando únicamente:

```html
<div></div>
```

Los elementos semánticos permiten comprender mejor la estructura y facilitan el desarrollo posterior.

---

# 2. 🧩 Divide la página en bloques

Antes de programar, observa el wireframe y separa mentalmente la interfaz:

```text
HEADER
├── Logo
├── Menú
└── Buscador

MAIN
├── Hero
│   ├── Texto
│   └── Imagen
│
└── Destinos
    ├── Tarjeta
    ├── Tarjeta
    ├── Tarjeta
    └── Tarjeta

FOOTER
```

Cada bloque debería tener una responsabilidad clara.

---

# 3. 📦 Identifica qué elementos deben ser Flexbox

No necesitas convertir **todo** en Flexbox.

Pregúntate:

> ¿Necesito distribuir elementos en fila o columna?

Cuando la respuesta sea sí, probablemente puedas utilizar:

```css
.contenedor {
    display: flex;
}
```

Algunos candidatos naturales:

```text
Header
Menú
Hero
Listado de tarjetas
Footer
```

---

# 4. ↔️ `flex-direction`

Por defecto, Flexbox trabaja en fila.

```css
.contenedor {
    display: flex;
    flex-direction: row;
}
```

Resultado:

```text
[Elemento 1] [Elemento 2] [Elemento 3]
```

Para organizar verticalmente:

```css
.contenedor {
    display: flex;
    flex-direction: column;
}
```

Resultado:

```text
[Elemento 1]

[Elemento 2]

[Elemento 3]
```

---

# 5. 🎯 `justify-content`

Permite distribuir los elementos en el eje principal.

Propiedades que debes conocer:

```css
justify-content: flex-start;
justify-content: center;
justify-content: flex-end;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

Por ejemplo:

```css
header {
    display: flex;
    justify-content: space-between;
}
```

Puede producir una distribución similar a:

```text
[ LOGO ]                    [ MENÚ ]
```

---

# 6. 📏 `align-items`

Permite alinear los elementos en el eje transversal.

Ejemplo:

```css
header {
    display: flex;
    align-items: center;
}
```

Esto resulta especialmente útil cuando tienes elementos con diferentes alturas:

```text
[ LOGO ]   [ MENU ]   [ BUSCADOR ]
```

---

# 7. ↔️ Usa `gap`

Para separar elementos dentro de un Flexbox:

```css
.contenedor {
    display: flex;
    gap: 20px;
}
```

`gap` suele ser más limpio que agregar márgenes individualmente.

Evita crear reglas innecesarias como:

```css
.item1 {
    margin-right: 20px;
}

.item2 {
    margin-right: 20px;
}
```

Cuando el espacio corresponde a la separación entre elementos, prueba primero con:

```css
gap
```

---

# 8. 🔄 `flex-wrap`: clave para este ejercicio

Como la actividad busca practicar responsividad **sin `@media queries`**, esta propiedad será fundamental.

```css
.destinos {
    display: flex;
    flex-wrap: wrap;
}
```

Cuando exista suficiente espacio:

```text
[ CARD ] [ CARD ] [ CARD ] [ CARD ]
```

Cuando exista menos espacio:

```text
[ CARD ] [ CARD ]

[ CARD ] [ CARD ]
```

Y en un espacio aún menor:

```text
[ CARD ]

[ CARD ]

[ CARD ]

[ CARD ]
```

El navegador puede reorganizar los elementos automáticamente.

---

# 9. 🃏 Trabaja con `flex`

En una tarjeta puedes utilizar:

```css
.card {
    flex: 1;
}
```

Esto permite que el elemento participe en la distribución del espacio disponible.

También puedes probar:

```css
.card {
    flex: 1 1 220px;
}
```

La estructura:

```text
flex: grow shrink basis;
```

representa:

```text
flex-grow
flex-shrink
flex-basis
```

No es necesario memorizar solamente la sintaxis. Debes comprender qué ocurre cuando cambia el ancho disponible.

---

# 10. 📐 Responsividad sin `@media queries`

### 🚫 En esta actividad no debes utilizar:

```css
@media (max-width: 768px) {
    ...
}
```

La adaptación debe conseguirse mediante las propiedades flexibles de CSS.

Las herramientas principales serán:

```css
display: flex;
flex-wrap: wrap;
flex: ...;
flex-grow;
flex-shrink;
flex-basis;
gap;
width;
max-width;
min-width;
```

---

# 11. 🧠 Piensa en diseño fluido

En lugar de pensar:

> "En 768 px hago esto."

Piensa:

> "¿Cómo puedo hacer que este elemento ocupe el espacio disponible?"

Por ejemplo:

```css
.contenedor {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    flex: 1 1 250px;
}
```

El navegador decidirá cuántos elementos caben por fila.

---

# 12. 🖼️ Imágenes adaptables

Una regla útil:

```css
img {
    max-width: 100%;
    height: auto;
}
```

Así evitas que una imagen exceda el ancho de su contenedor.

Para una tarjeta:

```css
.card img {
    width: 100%;
}
```

Observa qué ocurre cuando cambia el ancho disponible.

---

# 13. 🧱 Flexbox dentro de Flexbox

Es totalmente válido que un elemento Flexbox contenga otro Flexbox.

Ejemplo conceptual:

```text
HEADER
│
├── LOGO
│
├── MENU
│   ├── Inicio
│   ├── Destinos
│   └── Contacto
│
└── BUSCADOR
```

Puedes tener:

```css
header {
    display: flex;
}
```

y:

```css
.menu {
    display: flex;
}
```

Esto se denomina **Flexbox anidado**.

Es una técnica muy importante para construir interfaces reales.

---

# 14. 🧭 Header adaptable

Un encabezado puede comenzar así:

```css
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}
```

Con suficiente espacio:

```text
[ LOGO ] [ MENÚ ] [ BUSCADOR ]
```

Cuando el espacio disminuye, los elementos pueden reorganizarse automáticamente.

No necesitas indicar mediante una media query exactamente cuándo deben saltar de línea.

---

# 15. 🏔️ Hero adaptable

El área principal puede trabajar con dos bloques:

```text
[ TEXTO ] [ IMAGEN ]
```

Una forma de comenzar:

```css
.hero {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

Después, experimenta con los elementos hijos:

```css
.hero-text {
    flex: 1 1 300px;
}

.hero-image {
    flex: 1 1 300px;
}
```

La intención es que ambos puedan crecer o reducirse según el espacio disponible.

---

# 16. 📱 Las tarjetas deben reorganizarse solas

Puedes tener:

```css
.destinos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

y:

```css
.destino {
    flex: 1 1 200px;
}
```

En una pantalla grande:

```text
[ 1 ] [ 2 ] [ 3 ] [ 4 ]
```

En una pantalla intermedia:

```text
[ 1 ] [ 2 ] [ 3 ]

[ 4 ]
```

En una pantalla pequeña:

```text
[ 1 ]

[ 2 ]

[ 3 ]

[ 4 ]
```

El comportamiento exacto dependerá de los anchos disponibles y de las dimensiones de tus elementos.

---

# 17. 📌 Diferencia entre `width` y `flex`

No hagas que todos tus elementos dependan de anchos rígidos.

Por ejemplo:

```css
.card {
    width: 300px;
}
```

puede resultar poco flexible.

Prueba a explorar:

```css
.card {
    flex: 1 1 220px;
}
```

y observa la diferencia.

---

# 18. 🚫 Evita posicionar manualmente

No construyas la página utilizando:

```css
position: absolute;
top: 250px;
left: 400px;
```

para organizar la estructura principal.

El objetivo de la actividad es que aprendas a distribuir los elementos mediante:

```text
Flexbox
```

---

# 19. 🚫 Evita los espacios artificiales

No utilices múltiples:

```html
<br>
<br>
<br>
```

para separar secciones.

Utiliza CSS:

```css
gap
margin
padding
```

según corresponda.

---

# 20. 🧪 Experimenta con Flexbox

Una buena forma de aprender es modificar intencionalmente los valores.

Prueba:

```css
flex-direction
```

con:

```text
row
column
```

Prueba:

```css
justify-content
```

con:

```text
center
space-between
space-evenly
```

Prueba:

```css
align-items
```

con:

```text
center
flex-start
flex-end
```

Y prueba:

```css
flex-wrap
```

con:

```text
nowrap
wrap
```

Observa cómo cambia la interfaz.

---

# 21. 📱 Prueba diferentes tamaños

Aunque no utilizarás `@media queries`, debes comprobar el comportamiento en diferentes tamaños.

Prueba como mínimo:

```text
🖥️ Pantalla grande
        ↓
💻 Pantalla intermedia
        ↓
📱 Pantalla pequeña
```

Puedes utilizar las herramientas de desarrollador del navegador.

En Chrome:

```text
F12
```

o:

```text
Inspeccionar
```

Posteriormente activa el modo de dispositivos.

---

# 22. 🔍 Herramientas de desarrollo

Cuando inspecciones un elemento Flexbox, busca:

```text
Elements
   ↓
Styles
   ↓
Layout
```

Comprueba visualmente:

- eje principal
- eje transversal
- tamaño del elemento
- espacio disponible
- elementos que pasan a otra línea
- comportamiento de `flex`

---

# 23. 🧭 Orden recomendado de desarrollo

Trabaja progresivamente:

```text
01. Crear estructura de carpetas
        ↓
02. Crear HTML
        ↓
03. Organizar elementos semánticos
        ↓
04. Agregar contenido
        ↓
05. Crear CSS básico
        ↓
06. Aplicar Flexbox
        ↓
07. Aplicar flex-wrap
        ↓
08. Ajustar flex-grow / shrink / basis
        ↓
09. Probar diferentes tamaños
        ↓
10. Corregir problemas de distribución
        ↓
11. Incorporar JavaScript
        ↓
12. Realizar pruebas finales
```

---

# 24. 🚨 JavaScript va después

Primero consigue que:

```text
HTML ✅
CSS ✅
Flexbox ✅
Responsive ✅
```

funcionen correctamente.

Después incorpora JavaScript.

Piensa cada funcionalidad de esta manera:

```text
EVENTO
   ↓
ELEMENTO
   ↓
FUNCIÓN
   ↓
CAMBIO EN EL DOM
```

Ejemplo parcial:

```javascript
boton.addEventListener("click", function () {
    // aquí debe ocurrir una acción
});
```

No necesitas conocer todavía la solución concreta.

Primero identifica:

> **¿Qué elemento recibe el evento?**

> **¿Qué información necesito?**

> **¿Qué debe cambiar en pantalla?**

---

# 25. 💡 Metodología para resolver el wireframe

Antes de escribir código, realiza este análisis.

### Paso 1 — Identifica las secciones

```text
Header
Nav
Hero
Destinos
Footer
```

### Paso 2 — Identifica qué elementos estarán en fila

Piensa qué elementos necesitan distribuirse horizontalmente.

### Paso 3 — Identifica qué elementos deben poder saltar a otra línea

Determina dónde puede ser necesario utilizar `flex-wrap`.

### Paso 4 — Decide dónde utilizar `display: flex`

No todos los contenedores necesitan Flexbox.

### Paso 5 — Decide dónde utilizar `flex-wrap`

Úsalo especialmente en elementos que deben adaptarse cuando disminuye el ancho.

### Paso 6 — Decide qué elementos deben crecer o reducirse

Experimenta con:

```css
flex-grow
flex-shrink
flex-basis
```

### Paso 7 — Prueba la interfaz

Reduce progresivamente el ancho del navegador y observa qué ocurre.

---

# ✅ Checklist final

## HTML

- [ ] La estructura HTML está correctamente organizada.
- [ ] Se utilizaron elementos semánticos cuando corresponde.
- [ ] Los bloques están correctamente agrupados.
- [ ] No existen elementos innecesarios.

## CSS

- [ ] Se utilizó `display: flex`.
- [ ] Se utilizó `justify-content`.
- [ ] Se utilizó `align-items`.
- [ ] Se utilizó `gap`.
- [ ] Se utilizó `flex-wrap` cuando corresponde.
- [ ] Se experimentó con `flex`.
- [ ] Se evitó depender de posiciones absolutas.
- [ ] Las imágenes no rompen el layout.

## Responsive

- [ ] La página funciona en escritorio.
- [ ] La página funciona en una pantalla intermedia.
- [ ] La página funciona en móvil.
- [ ] Las tarjetas pueden reorganizarse.
- [ ] Los contenidos pueden pasar a nuevas líneas.
- [ ] Los elementos no dependen de anchos rígidos innecesarios.
- [ ] **No se utilizaron `@media queries`.**

## JavaScript

- [ ] Se identificaron correctamente los eventos.
- [ ] Se capturaron los elementos necesarios.
- [ ] Se actualizaron los elementos del DOM.
- [ ] Se probaron las funcionalidades indicadas en el wireframe.

---

# 🚀 Regla principal de esta actividad

> **No intentes adaptar el diseño a cada pantalla mediante reglas específicas. Haz que el diseño sea flexible desde su construcción.**

La lógica central del ejercicio es:

```text
HTML
  ↓
ESTRUCTURA

CSS
  ↓
ESTILOS

FLEXBOX
  ↓
DISTRIBUCIÓN

FLEX-WRAP + FLEX
  ↓
RESPONSIVIDAD

JAVASCRIPT
  ↓
INTERACTIVIDAD
```

> **Objetivo final:** lograr que la interfaz responda al espacio disponible utilizando las capacidades de Flexbox, **sin recurrir a `@media queries` para resolver la distribución del layout**.

---

## 🚫 Restricción de la actividad

La actividad debe desarrollarse de manera **individual y sin utilizar herramientas de Inteligencia Artificial generativa** para:

- generar código;
- completar soluciones;
- modificar automáticamente el proyecto;
- generar la estructura HTML/CSS/JS;
- resolver las funcionalidades solicitadas.

El estudiante debe ser capaz de **explicar su propio código y las decisiones tomadas durante el desarrollo**.