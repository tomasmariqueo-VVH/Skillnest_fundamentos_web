console.log("Conexión con JS correcta...")

let botonLike1 = document.querySelector("#boton1");
let contadorLikes1 = document.querySelector("#contador1")

botonLike1.addEventListener("click", function(){
    let contador1 = parseInt(contadorLikes1.innerText);
    contadorLikes1.innerText = `${contador1 + 1} Likes `;
})

let botonLike2 = document.querySelector("#boton2");
let contadorLikes2 = document.querySelector("#contador2")

botonLike2.addEventListener("click", function(){
    let contador2 = parseInt(contadorLikes2.innerText);
    contadorLikes2.innerText = `${contador2 + 1} Likes `;
})

let botonLike3 = document.querySelector("#boton3");
let contadorLikes3 = document.querySelector("#contador3")

botonLike3.addEventListener("click", function(){
    let contador3 = parseInt(contadorLikes3.innerText);
    contadorLikes3.innerText = `${contador3 + 1} Likes `;
})