console.log(`Conexión con JS correcta!`)

/* Ejemplo Bucle for */

function cuentaHasta5() {
    for (let i = 0; i <= 5; i++) {
        alert(i);
    }
}

function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}

function recorrerLista() {
    //Lista es un tipo de dato (array/lista/arreglos)
    // [] = ["nombre", 4, True, [2,4]]
    /* 
    let nombre = "Carlos"; 
    alert (nombre);
    let nombres = ["Carlos", "Maria"]
    alert(nombres[0]) --> Imprime Carlos
    alert(nombres[1]) --> Imprime Maria
    alert(nombres.length) --> 2 (La cantidad de elementos de la lista)
    alert(nombres[0].length) --> 6 (la cantidad de caracteres del elemento seleccionado)
    */
    let usuarios = ["Ana", "Luis", "María", "Caesar", "Tomás"];
    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}
/* Ejemplo bucle while */