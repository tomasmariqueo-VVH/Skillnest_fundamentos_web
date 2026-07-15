console.log(`Conexión con JS correcta!`)

// Instrucciones 
// Resuelve cada ejercicio utilizando for o while, según corresponda. Recuerda probar tu código con
//  console.log() para verificar los resultados. Usa buenas prácticas de programación y mantén tu
//  código bien estructurado.

// 🔢 Contador de interacciones en una app: Imagina que una aplicación registra
//  la cantidad de veces que un usuario interactúa con un botón. Escribe un programa
//  que imprima los números del 1 al 10 para simular las interacciones de un usuario. Ejemplo de
//  salida esperada:

// Interacción 1
// Interacción 2
// ...
// Interacción 10​​

function ejercicio1() {
    for (let i = 0; i <= 10; i++) {
        alert(`Interacción ${i}`)
    }
}

// ⏳ Simular una barra de carga: Crea un programa que simule una barra de carga mostrando
//  porcentajes de progreso del 0% al 100% en incrementos de 10. Ejemplo de salida esperada:

// Cargando... 0%
// Cargando... 10%
// ...
// Cargando... 100%
// Carga completa.​

function ejercicio2() {
    for (let i = 0; i <= 100; i += 10) {
        alert(`Cargando... ${i}%`);
    }
    alert(`Carga completa.`)
}

// 🛍️ Simulación de descuento progresivo en una tienda: Una tienda en línea ofrece un descuento
//  progresivo en una promoción especial. El primer producto tiene un 5% de descuento, el segundo
//  un 10%, el tercero un 15%, y así sucesivamente hasta el quinto producto con un 25%. Escribe
//  un programa que calcule y muestre los descuentos aplicados a cada producto. Ejemplo de salida
//  esperada:

// Producto 1 - Descuento aplicado: 5%
// Producto 2 - Descuento aplicado: 10%
// Producto 3 - Descuento aplicado: 15%
// Producto 4 - Descuento aplicado: 20%
// Producto 5 - Descuento aplicado: 25%​​

function ejercicio3() {
    for (i = 1; i <= 5; i++) {
        let producto = parseInt(prompt("Ingrese el valor de su producto"));
        let porcentajeDescuento = i * 5;
        let valorDescuento = (producto * porcentajeDescuento) / 100;
        let valorTotal = producto - valorDescuento;
        alert(`Valor del producto: ${i} = ${producto} - Descuento aplicado: ${porcentajeDescuento}`);
        alert(`Valor total con descuento = ${valorTotal}`);
    }
}

// 🎮 Calcular el total de puntos en un videojuego: Un jugador gana 50 puntos cada vez que 
// completa un nivel. Escribe un programa que calcule la puntuación total después de 5 niveles
// usando un bucle. Ejemplo de salida esperada:

// Puntos acumulados: 250​​

function ejercicio4() {
    for (let nivel = 1; nivel <= 5; nivel++) {
        alert(`Nivel ${nivel}
            \nPuntos acumulados: ${nivel * 50}`);
    }
}

// 🔔 Contador de notificaciones en una app: Imagina que una aplicación de mensajería muestra
//  un contador de notificaciones pendientes. Escribe un programa que muestre un mensaje con
//  la cantidad de notificaciones pendientes y las marque como leídas una por una hasta llegar
//  a 0. Ejemplo de salida esperada:

// Tienes 5 notificaciones nuevas.
// Tienes 4 notificaciones nuevas.
// ...
// Tienes 1 notificación nueva.
// No tienes notificaciones pendientes.

function ejercicio5() {
    let notificaciones = 5;
    while (notificaciones > 0) {
        if (notificaciones === 1) {
            alert(`Tienes 1 notificación nueva.`)
        } else {
            alert(`Tienes ${notificaciones} notificaciones nuevas.`)
        }
        notificaciones--;
    }
    alert(`No tienes notificaciones nuevas.`)
}