console.log(`Conexión con JS correcta!`)

//# Ejercicio 1: Calculadora de Envío

//## Enunciado

//Una empresa de despacho cobra el envío dependiendo del peso del paquete.

//Solicitar:

//- Nombre del cliente
//- Peso del paquete (kg)

//Condiciones:

//- Hasta 2 kg
//- Más de 2 kg y hasta 5 kg
//- Más de 5 kg y hasta 10 kg
//- Más de 10 kg

//El programa debe indicar:

//- Nombre del cliente
//- Categoría del envío
//- Valor correspondiente al despacho

function ejercicio1() {
    let cliente = prompt("Ingrese su nombre: ");
    let paquete = parseInt(prompt("Ingrese el peso de su paquete: "));
    let valorDespacho = 2000;
    let mensaje = "";
    // Condiciones
    if (paquete > 0 && paquete < 2) {
        mensaje = `Paquete pesa: ${paquete}
        \nValor despacho: ${valorDespacho * paquete}`;
    } else if (paquete > 2 && paquete <= 5) {
        mensaje = `Paquete pesa: ${paquete}
        \nValor despacho: ${valorDespacho * paquete}`;
    } else if (paquete > 5 && paquete <= 10) {
        mensaje = `Paquete pesa: ${paquete}
        \nValor despacho: ${valorDespacho * paquete}`;
    } else if (paquete > 10 && paquete < 50) {
        mensaje = `Paquete pesa: ${paquete}
        \nValor despacho: ${valorDespacho * paquete}`;
    } else {
        mensaje = "Ingrese valores válidos!";
    }
    alert(mensaje);
}

//# Ejercicio 2: Acceso a Biblioteca

//## Enunciado

//Una biblioteca posee dos tipos de usuarios:

//- Estudiante
//- Profesor

//Solicitar:

//- Tipo de usuario
//- Cantidad de libros solicitados
//
//Condiciones:
//
//Cada tipo de usuario posee un límite distinto de préstamos.
//
//El programa debe indicar:
//
//- Si el préstamo está permitido.
//- Si supera el límite permitido.
//- Mostrar un mensaje diferente según el tipo de usuario.
//
//Utilizar operadores lógicos para realizar las validaciones.
//
function ejercicio2() {
    let usuario = prompt("Ingrese su tipo de usuario: ");
    let prestamoEstudiante = Math.floor(Math.random() * 10) + 1;
    let prestamoProfesor = Math.floor(Math.random() * 20) + 1;
    let libros = parseInt(prompt("Ingrese la cantidad de libros solicitados: "));
    let mensaje = "";
    if (usuario === "Estudiante" && libros <= prestamoEstudiante) {
        mensaje = `Bienvenido Estudiante
    \nPrestamo de libros concedido`;
    } else if (libros > prestamoEstudiante) {
        mensaje = `La cantidad de libros supera el prestamo designado
        \nPrestamo degenado`;
    } else if (usuario === "Profesor" && libros <= prestamoProfesor) {
        mensaje = `Bienvenido Profesor
    \nPrestamo de libros concedido`;
    } else if (libros > prestamoProfesor) {
        mensaje = `La cantidad de libros supera el prestamo designado
        \nPrestamo degenado`;
    } else {
        mensaje = `Ingrese un usuario válido`;
    }
    alert(mensaje);
}
//Math.floor(Math.random()*100)+1;
//# Ejercicio 3: Clasificación Deportiva
//
//## Enunciado
//
//Solicitar:
//
//- Nombre del participante
//- Edad
//
//Clasificar al participante según su edad.
//
//Debe existir al menos cuatro categorías distintas.
//
//Finalmente mostrar:
//
//- Nombre
//- Edad
//- Categoría asignada

function ejercicio3() {
    let nombre = prompt("Ingrese su nombre: ")
    let edad = parseInt(prompt("Ingrese su edad: "))
    let mensaje = "";
    if (edad <= 10 && edad > 0) {
        mensaje = `Nombre: ${nombre}\nEdad: ${edad}\nCategoría: niño`
    } else if (edad <= 11 && edad > 17) {
        mensaje = `Nombre: ${nombre}\nEdad: ${edad}\nCategoría: niño`
    } else if (edad <= 18 && edad > 60) {
        mensaje = `Nombre: ${nombre}\nEdad: ${edad}\nCategoría: niño`
    } else if (edad <= 60 && edad > 100) {
        mensaje = `Nombre: ${nombre}\nEdad: ${edad}\nCategoría: niño`
    } else {
        mensaje = `Ingrese una edad válida`;
    }
    alert(mensaje);
}

//---
//
//# Ejercicio 4: Sistema de Bonificación
//
//## Enunciado
//
//Una empresa entrega bonos según los años trabajados.
//
//Solicitar:
//
//- Nombre del trabajador
//- Años de servicio
//
//Clasificar según distintos rangos de antigüedad.
//
//Mostrar:
//
//- Nombre
//- Nivel de antigüedad
//- Mensaje indicando si recibe o no bonificación.

function ejercicio4() {
    let nombreTrabajador = prompt("Ingrese su nombre: ");
    let añosServicio = parseInt(prompt("Ingrese sus años de servicio en la compañía: "));
    let bono = 10000;
    let mensaje = "";
    if (añosServicio <= 0) {
        mensaje = `${nombreTrabajador}, no se le dará ningún bono`;
    } else if (añosServicio <= 2) {
        mensaje = `${nombreTrabajador}, por sus años de servicio, se le ofrecerá un bono de: ${bono * añosServicio}`;
    } else if (añosServicio > 2 && añosServicio <= 5) {
        mensaje = `${nombreTrabajador}, por sus años de servicio, se le ofrecerá un bono de: ${bono * añosServicio}`;
    } else if (añosServicio > 5 && añosServicio <= 10) {
        mensaje = `${nombreTrabajador}, por sus años de servicio, se le ofrecerá un bono de: ${bono * añosServicio}`;
    } else {
        mensaje = `${nombreTrabajador}, por sus años de servicio, se le ofrecerá un bono de: ${bono * añosServicio}`;
    }
    alert(mensaje);
}

//---
//
//# Ejercicio 5: Evaluación de Velocidad
//
//## Enunciado
//
//Solicitar:
//
//- Nombre del conductor
//- Velocidad registrada
//
//Condiciones:
//
//Clasificar la velocidad en distintos rangos.
//
//Además:
//
//Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.
//
//Mostrar:
//
//- Nombre del conductor
//- Velocidad
//- Clasificación obtenida

function ejercicio5() {
    let nombreConductor = prompt("Ingrese nombre del conductor: ");
    let velocidad = parseInt(prompt("Ingrese la velocidad: "))
    let limiteVelocidad = 90;
    if (limiteVelocidad <= velocidad && velocidad >= 85) {
        mensaje = `Velocidad límite`
    } else if (limiteVelocidad > velocidad && velocidad >= 65) {
        mensaje = `Velocidad alta, baje la velocidad`
    } else if (velocidad <= 60 && velocidad > 30) {
        mensaje = `Velocidad adecuada`
    } else {
        mensaje = `Velocidad lenta`
    }
alert(mensaje);
}

//---