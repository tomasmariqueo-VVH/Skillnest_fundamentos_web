console.log("Conexión exitosa...")

//Selección del título con querySelector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del título es: ${title.textContent}`)

//Seleccionar un párrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo)

//Seleccionar dentro de un nav
let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

//Seleccionar parrafos
let parrafos = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."

//Elemento inexistente
let boton = document.querySelector("#boton-inexistente");
//console.log(boton); // null

if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}

//TAREA

/*
Crear un boton y aplicar una condición igual que el del ejemplo...
-Debe cambiar su texto al momento de hacerle click
-Debe cambiarse un hover JS cambiando el color de fondo
*/

const botonCambiado = document.querySelector("#boton2");

botonCambiado.addEventListener("click", function () { //Usar "click" no "onclick"
    if (botonCambiado !== null) { //El botón existe?
        if (this.textContent === "Haz click") {
            this.textContent = "Texto cambiado!"
            this.style.backgroundColor = "black"
            this.style.color = "red";
        } else {
            this.textContent = "Haz click"
            this.style.backgroundColor = "white"
            this.style.color = "black";
        }
    } else { //El botón no existe
        console.log("El botón no existe");
    }
})