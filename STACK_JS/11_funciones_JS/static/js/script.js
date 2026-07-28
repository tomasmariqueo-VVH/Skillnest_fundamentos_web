console.log("Conexión exitosa...!")

//Ejemplo de una función simple(sin parámetros):
function saludarme(/* Parámetros */) {
    alert("¡Hola, bienvenido!");
}
//🔔 Llamando o invocando funciones
//Para ejecutar una función, debes invocarla escribiendo su nombre seguido de paréntesis:

//saludar();
//Salida esperada en la consola:

//¡Hola, bienvenido!
//Puedes llamar a una función tantas veces como quieras, sin necesidad de repetir el código dentro de ella.

//saludar();
//saludar();
//saludar();
//Esto imprimirá el mensaje tres veces sin necesidad de escribir console.log repetidamente.



// 🎚️ Funciones con parámetros
//Las funciones se vuelven aún más útiles cuando les puedes pasar datos. Estos datos son llamados parámetros
//y permiten que la función sea más flexible.

//Ejemplo:
//El parámetro recibe un valor para trabajar en la función.
//El parámetro recibe el tipo de dato al momento de tomar el valor.
function saludarParam(nombre) { //parámetro nombre
    alert("¡Hola, " + nombre + "!");
}
//Ahora la función saludar espera recibir un nombre al ser llamada. Cuando la invocas, debes proporcionar un argumento.

//saludarParam("Tomás"); //Ejecución de la función con parámetros ("argumento")
//saludarParam("Benjamín");
//Salida esperada:

//¡Hola, Luis! 
//¡Hola, Ana!
//Los parámetros permiten que una función trabaje con valores dinámicos en lugar de siempre ejecutar la misma instrucción.



//🎯 Funciones con return
//Hasta ahora, nuestras funciones solo muestran información en la consola, pero no devuelven ningún
//resultado que podamos usar en otro momento. Con return, una función puede devolver un valor, lo que la hace aún más poderosa.

//Ejemplo de una función que devuelve el número mayor:

function encontrarMayor() {
    function encontrarMaximo(a, b) {
        if (a > b) {
            return a; //este valor se devuelve porque cumple la condición
        } else {
            return b;
        }
    }
    //Aquí, la función encontrarMaximo compara dos números y devuelve el mayor.
    let numero1 = 10;
    let numero2 = 7;
    let maximo = encontrarMaximo(numero1, numero2);
    //maximo guarda el valor del return.
    alert(`El número mayor entre ${numero1} y ${numero2} es: ${maximo}`);
}
//Salida esperada:

//El número mayor entre 10 y 7 es: 10

//TAREA
/*
Crear una función que reciva 3 parametros: a, b y c.
Debe sumar a + b y el resultado restarlo por c.
Devolver el valor final y mostrar con un alert.
*/

function operacion(){
    function granSuma(a, b, c){
        return a + b - c;
    }
}