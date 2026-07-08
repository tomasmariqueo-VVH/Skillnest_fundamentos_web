// ✅ Ejercicio 1: Sistema de descuento
// 📝 Enunciado
// Una tienda realiza descuentos según el monto de compra:
// Si la compra es mayor o igual a $50.000 → 20% descuento
// Si la compra es mayor o igual a $30.000 → 10% descuento
// Si la compra es menor a $30.000 → sin descuento
// El programa debe solicitar:
// Nombre del cliente
// Monto de compra
// Luego mostrar:
// Descuento aplicado
// Total a pagar

// parseInt --> Transforma texto a número
// prompt pide al usuario un valor
function ejercicio1() {
    let cliente = prompt("Ingrese su nombre: ");
    let producto = parseInt(prompt("Ingrese el monto de compra: "));
    if (producto >= 50000) {
        alert(`El monto con descuento es: ${producto - (producto * 0.2)}`)
    } else if (producto > 30000) {
        alert(`El monto con descuento es: ${producto - (producto * 0.1)}`)
    } else if (producto <= 30000 && producto > 0) {
        alert(`El monto final es: ${producto}, sin descuento`)
    } else {
        alert(`Ingrese valores válidos.`)
    }
}

// ✅ Ejercicio 2: Acceso a evento
// 📝 Enunciado
// Una persona puede ingresar a un evento si:
// Tiene 18 años o más
// O viene acompañada por un adulto
// Solicitar:
// Edad
// Si viene acompañado (si o no)
// Mostrar:
// “Acceso permitido”
// o “Acceso denegado”

function ejercicio2() {
    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad > 18) {
        alert(`Acceso permitido!`)
    } else if (edad < 18 && edad > 0) {
        let permitido = prompt("Viene con un acompañante?: si/no ")
        if (permitido == "si") {
            alert(`Acceso permitido!`)
        } else if (permitido == "no") {
            alert(`Acceso denegado!`)
        } else {
            alert(`Ingrese valores válidos.`)
        }
    } else {
        alert(`Ingrese valores válidos.`)
    }
}

// ✅ Ejercicio 3: Clasificación de temperatura
// 📝 Enunciado
// Solicitar una temperatura y clasificar:
// Menor a 10 → “Hace frío”
// Entre 10 y 24 → “Temperatura agradable”
// 25 o más → “Hace calor”
// Además:
// Si la temperatura supera los 35 grados, mostrar una alerta adicional:
//  “Temperatura extrema”.

function ejercicio3() {
    let temperatura = parseInt(prompt("Ingrese la temperatura: "));
    if (temperatura >= 35) {
        alert(`Temperatura extrema`)
    } else if (temperatura >= 25) {
        alert(`Clima caluroso`)
    } else if (temperatura < 24 && temperatura > 10) {
        alert(`Clima agradable`)
    } else {
        alert(`Clima frío`)
    }
}

//Ejercicio 3 corregido

function mostrarTemperatura() {
    let temperatura = parseInt(prompt("Ingrese la temperatura actual:"))
    if (temperatura < 10 && temperatura - 30) {
        mensaje = "Hace frio"
    } else if (temperatura >= 10 && temperatura <= 24) {
        mensaje = "Temperatura agradable"
    } else if (temperatura >= 25 && temperatura <= 50) {
        mensaje = "Hace calor"
    } else {
        mensaje = "❌ Ingrese valores válidos"
    }
    //alerta adicional
    if (temperatura > 35 && temperatura < 50) {
        mensaje += "\n ⚠ ¡Alerta!: Temperatura extrema";
    }
    alert(mensaje)
}
// ✅ Ejercicio 4: Verificación de administrador
// 📝 Enunciado
// Solicitar:
// Nombre de usuario
// Contraseña
// Condiciones:
// Usuario correcto: admin
// Contraseña correcta: 12345
// Casos:
// Si ambos son correctos → “Bienvenido administrador”
// Si usuario es correcto pero contraseña incorrecta → “Contraseña incorrecta”
// Si usuario no existe → “Usuario no encontrado”

function ejercicio4() {
    let usuario = prompt("Ingrese su nombre de usuario:")
    let contraseña = prompt("Ingrese su contraseña:")

    if (usuario === "admin" && contraseña === "12345") {
        alert("Bienvenido Administrador: " + usuario)
    } else if (usuario === "admin") {
        alert("Contraseña incorrecta");
    } else {
        alert(`usuario "${usuario}" no encontrado`);
    }
}

// ✅ Ejercicio 5: Sistema de aprobación
// 📝 Enunciado
// Solicitar:
// Nombre del estudiante
// Nota 1
// Nota 2
// Nota 3
// Calcular promedio.
// Condiciones:
// Promedio 6.0 o superior → “Aprobado con excelencia”
// Promedio entre 4.0 y 5.9 → “Aprobado”
// Menor a 4.0 → “Reprobado”
// Además:
// Si alguna nota es menor a 2.0 mostrar:
//  “Debe asistir a reforzamiento”.

function ejercicio5(){
    let estudiante = prompt("Ingrese nombre del estudiante:")
    let nota1 = parseInt(prompt("Ingresa nota:"))
    let nota2 = parseInt(prompt("Ingresa nota:"))
    let nota3 = parseInt(prompt("Ingresa nota:"))
    let promedio = (nota1 + nota2 + nota3) / 3;
    if(promedio >= 6.0){
        alert("Aprobado con excelencia")
    } else if(promedio >= 4.0 && promedio <= 5.9){
        alert("Aprovado")
    } else if(promedio <= 2.0){
        alert("Debe asistir a reforzamiento")
    } else{
        alert("Reprobado")
    }
}

// 📌 Requisitos Técnicos
// Cada ejercicio debe:
// Tener su propia función JavaScript
// Ser ejecutado mediante onclick
// Usar prompt()
// Mostrar resultados con alert()
// Utilizar correctamente:
// if
// else if
// else
// operadores lógicos
// operadores de comparación

// ⭐ Desafío Extra
// Agregar:
// Validación de campos vacíos
// Cambios visuales usando JavaScript
// Resultados dentro del HTML usando innerHTML
// Uso de íconos o emojis según el resultado
