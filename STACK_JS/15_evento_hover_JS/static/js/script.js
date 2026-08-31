const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "pink";
});

//TAREA
/*
Crear 2 botones con eventos onmouseover y onmouseout

-Cambia el texto de un boton
-Cambiar el color de fondo y el color de texto del segundo boton
*/

const boton1 = document.getElementById("miBoton1");

boton1.addEventListener("mouseover", function(){
    this.innerText = `Texto cambiado!`
});
boton1.addEventListener("mouseout", function(){
    this.innerText = `Pasa el cursor sobre mi`
})

const boton2 = document.getElementById("miBoton2");

boton2.addEventListener("mouseover", function(){
    this.innerText = `Colores cambiados!`
    boton2.style.backgroundColor = "orange"
    boton2.style.color = "red"
});
boton2.addEventListener("mouseout", function(){
    this.innerText = `Pasa el cursor sobre mi`
    boton2.style.backgroundColor = "pink"
    boton2.style.color = "white"
})