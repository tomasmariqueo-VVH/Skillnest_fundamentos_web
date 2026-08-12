console.log(`Conexión con JS correcta`)

let boton = document.getElementById("cambiarSesion");
boton.addEventListener("click", function () {
    if (this.innerText === "Iniciar sesión") {
        this.innerText = "Cerrar sesión"
    } else {
        this.innerText = "Iniciar sesión"
    }
});

let botonSpan1 = document.getElementById("span1")
let megustas = 12;

botonSpan1.addEventListener ("click", function(){
    megustas++
    this.innerText = `${megustas} Me gusta`;
});

let botonSpan2 = document.getElementById("span2")
let megusta = 0;

botonSpan2.addEventListener ("click", function(){
    megusta++
    this.innerText = `${megusta} Me gusta`;
})

function verPerfil() {
    alert(`Nombre: Tomás Mariqueo
        \nOcupación: Estudiante
        \nDescripción: Soy un estudiante de programación que está aprendiendo el lenguaje de programación.`)
}