console.log(`Conexión con JS correcta`)

let boton = document.getElementById("cambiarSesion");
boton.addEventListener("click", function () {
    if (this.innerText === "Iniciar sesión") {
        this.innerText = "Cerrar sesión"
    } else {
        this.innerText = "Iniciar sesión"
    }
});

let meGusta = document.querySelectorAll(".meGusta");
let span1 = document.getElementById("")
let span2 = document.getElementById("")

meGusta.forEach(function (span) {
    span.addEventListener("click", function () {
        alert(span.textContent)
        span1.innerText++;
    })
})

function verPerfil() {
    alert(`Nombre: Tomás Mariqueo
        \nOcupación: Estudiante
        \nDescripción: Soy un estudiante de programación que está aprendiendo el lenguaje de programación.`)
}