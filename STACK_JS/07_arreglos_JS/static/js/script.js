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

// RECORRER UN ARREGLO
function recorrerArreglos() {
    let notas = [6.2, 5.8, 4.1, 7.0, 6.6, 5.5];
    for (let i = 0; i < notas.length; i++) {
        console.log(notas[i]);
        alert(`Mostrando Nota ${i + 1} de ${notas.length}: ${notas[i]}`);
    }
}

// SUMAR ELEMENTOS DENTRO UN BUCLE

function sumarElementos() {
    let ventas = [10000, 5000, 12000, 8000];
    let total = 0;

    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i]; // += acumula
    }
    alert(`El resultado final es: ${total}`);
}

// CALCULAR PROMEDIO

function calcularPromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    alert(`La suma acumulada es: ${suma}`)
    let promedio = suma / notas.length;
    alert(`El promedio de las notas: ${notas.join(` - `)}\nPromedio: ${promedio}`);
}

// BUSCAR ELEMENTOS UTILIZANDO CONDICIONES

function buscarMayor() {
    let edades = [12, 15, 18, 20, 25, 32, 40];
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {
        // Condición para buscar mayores de 18
        if (edades[i] >= 18) {
            mayores.push(edades[i]); //Añade la posición que cumpla la condición
        }
    }
    alert(`De la lista de edades: ${edades.join(` / `)}
    \nLos mayores son: ${mayores.join(` / `)}`)
}

// ENCONTRAR EL MENOR Y EL MAYOR VALOR

function encontrarMenorMayor() {
    let numeros = [10, 35, 7, 90, 22, 90, 2];
    let menor = numeros[0];
    let mayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        } else if (numeros[i] > mayor) {
            mayor = numeros[i];
        } else {
            console.log(`Valor que no afecta: ${numeros[i]}`);
        }
    }
    alert(`De los números: ${numeros.join(` - `)}
    \nEl menor es: ${menor}
    \nEl mayor es: ${mayor}`);
}

// EJEMPLO INTEGRADOR
// Tarea: Unir los console.log en un alert
// Eliminar el último valor con .pop y mostrarlo 
// Añadir 2 valores nuevos con .push (usando un prompt)
// Por último contar la cantidad de ventas que sean mayores a 10.000

function calcularVentas() {
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
    let total = 0;
    let mayores = [];
    let contadorVentas = 0;
    let mayor = ventas[0];
    let valorEliminado = ventas.pop();
    let valor1 = parseInt(prompt("Ingrese un primer valor: "));
    let valor2 = parseInt(prompt("Ingrese un segundo valor: "));
    ventas.push(valor1, valor2);

    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
        if (ventas[i] > mayor) {
            mayor = ventas[i];
            if (ventas[i] >= 10000) {
                mayores.push(ventas[i])
                contadorVentas++;
            }
        }
    }
    alert(`El total de ventas es: ${total}
        \nLa mayor venta es: ${mayor}
        \nEl promedio de ventas es: ${total / ventas.length}
        \nValores sobre $10.000 pesos: ${mayores.join(` - `)}
        \nConteo de mayores: ${contadorVentas}
        \nValor eliminado: ${valorEliminado}`);
}

//Ejercicio 1
//Crear el siguiente arreglo.

//Mostrar:

//Primera edad.
//Última edad.
//Cantidad de elementos.

//let edades = [15,18,20,14,25];
//function ejercicio1(){
//    let mensaje = `Primera: ${edades[0]}, Segunda: ${edades[4]}, Elementos: ${edades.length}`
//    alert(mensaje);
//}

//Ejercicio 2
//Crear un arreglo con cinco nombres.

//Mostrar todos utilizando un ciclo for.

//function ejercicio2(){
//    let nombres = ["Ana", "Pedro", "María", "Carlos", "Juan"]
//    for(let i = 0; i <= 4; i++)
//        alert(nombres[i]);
//}

//Ejercicio 3
//Crear un arreglo con cinco notas.
//Calcular el promedio.
//Mostrar:

//Promedio: X

//function ejercicio3(){
//    let notas = ["4.7", "1.5", "4.5", "6.7", "5.5"]
//    let promedio = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])
//}