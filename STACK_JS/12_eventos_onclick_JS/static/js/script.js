//BOTÓN 1
document.getElementById("colorButton1").addEventListener("click", function () {
    cambiarColor1();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor1() {
    let colores = ["#1613d4", "#359eff", "#41347c", "#5463f0", "#008cff", "#037fb1"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = colorAleatorio;
}

//BOTÓN 2
document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColor2();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor2() {
    let colores = ["#ff4747", "#960505", "#e00000", "#5c0000", "#b63939", "#ca2626"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("#caja1")
    elemento.style.backgroundColor = colorAleatorio;
}

//BOTÓN 3
document.getElementById("colorButton3").addEventListener("click", function () {
    cambiarColor3();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor3() {
    let colores = ["#b3ff00", "#fffb25", "#b8bb00", "#ffd900", "#aabd42", "#ffef0f"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("#caja2")
    elemento.style.backgroundColor = colorAleatorio;
}

//SECCIONES



//un ID se selecciona con un #