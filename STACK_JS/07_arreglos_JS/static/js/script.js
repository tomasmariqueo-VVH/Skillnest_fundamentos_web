console.log("Conexión exitosa...!")

// Variables a lista

//let nombre1 = "Ana";
//let nombre2 = "Pedro";
//let nombre3 = "María";
//let nombre4 = "Carlos";

// Transformar en array y mostrar

//let nombres = ["Ana", "Pedro", "María", "Carlos"]

// Mostrar a María en una alerta
//console.log(nombres[2]); //Muestra a María

//La sintaxis es muy sencilla.
//let compras = [5000, 2300, 12000, 4500, 3000];

//También podemos guardar texto.
//let alumnos = ["Ana", "Pedro", "María", "José"];

//Incluso diferentes tipos de datos.
//let datos = ["Carlos", 18, true];
//let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

// Desafío: formar una oración con elementos de las distintas variables de arriba
// Pedro tiene 18 años y compró una sandía a $2300
//let mensaje = `${alumnos[1]} tiene ${datos[1]} años, y compró una ${frutas[3]} a ${compras[1]}`;
//console.log(mensaje);

// TAMAÑO DE UN ARREGLO

// La propiedad .length devuelve la cantidad de elementos.
//let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandía"];
//console.log(frutas.length); // 4, la cantidad de elementos de la variable

//OBTENER EL ULTIMO ELEMENTO

//Obtener el último elemento siempre se obtiene con: arreglo.length - 1
//Ejemplo:

//let frutas3 = ["Manzana", "Pera", "Kiwi", "Sandía"];
//let ultima = frutas[frutas.length - 1];
// variable.length - 1 siempre trae el ultimo elemento de la lista
//console.log(ultima);

// Desafío: del arreglo ["Hola", "a", "todos", "los", "programadores!"].
// Mostrar el penultimo elemento y el último concadenado.
//let arreglo = ["Hola", "a", "todos", "los", "programadores!"]
//let ultimo = arreglo[arreglo.length - 1];
//let penultimo = arreglo[arreglo.length - 2];
//console.log(`${penultimo} ${ultimo}`)

//
let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];
function manipularArreglos() {
    //Modificar un elemento del arreglo
    listaTareas[1] = "Construir"
    //Añadir un elemento al final de la lista
    listaTareas.push("Cocinar") //Agrega un elemento al final .push()
    //Eliminar el ultimo elemento de la lista y mostrarlo
    let eliminado = listaTareas.pop() //Elimina el último elemento agregado .pop()
    //Añadir un elemento al inicio de la lista
    listaTareas.unshift("Boxear"); //Agrega al inicio unshift.()
    //Eliminar el primer elemento de la lista
    eliminado += " - " + listaTareas.shift(); //.shift elimina al primero
    //Mostrar resultado
    alert(listaTareas.join(" - "));
    alert("Elementos eliminados: " + eliminado)
}

// EJERCICIOS

//Ejercicio 1
//Crear el siguiente arreglo.

//Mostrar:

//Primera edad.
//Última edad.
//Cantidad de elementos.

let edades = [15,18,20,14,25];
function ejercicio1(){
    let mensaje = `Primera: ${edades[0]}, Segunda: ${edades[4]}, Elementos: ${edades.length}`
    alert(mensaje);
}

//Ejercicio 2
//Crear un arreglo con cinco nombres.

//Mostrar todos utilizando un ciclo for.

function ejercicio2(){
    let nombres = ["Ana", "Pedro", "María", "Carlos", "Juan"]
    for(let i = 0; i <= 4; i++)
        alert(nombres[i]);
}

//Ejercicio 3
//Crear un arreglo con cinco notas.
//Calcular el promedio.
//Mostrar:

//Promedio: X