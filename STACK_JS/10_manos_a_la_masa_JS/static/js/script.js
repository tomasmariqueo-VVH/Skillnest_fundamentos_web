console.log("Conexión exitosa...!")

// 📋 Instrucciones 
// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en HTML con "alert" los objetos de cada pizza creada.



// Ejemplo de objeto
// Antes de comenzar con las pizzas, revisemos un ejemplo con sándwiches para entender la lógica:

// let sandwich = {
//    pan: "masa madre",
//    proteina: "asado",
//    queso: "queso suizo",
//    salsas: ["lechuga", "tomates", "salsa de rábano"]
// };

// console.log(sandwich);
// En este caso, has creado un objeto sandwich con diferentes propiedades. Pero, ¿qué pasa si quieres hacer varios sándwiches sin escribir todo manualmente cada vez? Puedes crear una fábrica de sándwiches usando una función que devuelva un objeto:

function sandwichFactory(pan, proteina, queso, salsas) {
    let sandwich = {};
    sandwich.pan = pan;
    sandwich.proteina = proteina;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    /* 
    s1 = {
    pan = "trigo",
    proteina = "pavo",
    queso = "provolone",
    salsas = ["mostaza", "cebolla frita", "rúcula"]
    }
    */
    return sandwich;
}

let s1 = sandwichFactory(
    "trigo",
    "pavo",
    "provolone",
    ["mostaza", "cebolla frita", "rúcula"],
);
let s2 = sandwichFactory(
    "masa madre", "pollo", "chedar", ["ketchup", "mayonese"]
);
//alert(s1);
//alert(s2);
function mostrarPizza() {
    function pizzaOven(corteza, salsas, quesos, ingredientes) {
    let pizza = {};
    pizza.corteza = "corteza";
    pizza.salsas = "salsas";
    pizza.quesos = "quesos";
    pizza.ingredientes = "ingredientes";
    return pizza;
}
let chicago = pizzaOven(
    "tradicional",
    "tradicional",
    "mozzarella",
    ["pepperoni", "salchicha"]
);
alert(`Pizza al estilo "Chicago":
    Corteza: ${chicago.corteza}
    Salsas: ${chicago.salsas}
    Queso: ${chicago.quesos}
    Extras: ${chicago.ingredientes}`
);
let aMano = pizzaOven(
    "tradicional",
    "marinada",
    ["mozzarella", "feta"],
    ["champiñiones", "cebollas", "aceitunas"]
);
alert(`Pizza al estilo "A Mano":
    Corteza: ${aMano.corteza}
    Salsas: ${aMano.salsas}
    Queso: ${aMano.quesos}
    Extras: ${aMano.ingredientes}`
);
let hawaiana = pizzaOven(
    "tradicional",
    "tomate",
    "mozzarella",
    ["jamón", "piña"]
);
alert(`Pizza al estilo "Hawaiana":
    Corteza: ${hawaiana.corteza}
    Salsas: ${hawaiana.salsas}
    Queso: ${hawaiana.quesos}
    Extras: ${hawaiana.ingredientes}`
);
let italiana = pizzaOven(
    "tradicional",
    "tomate",
    "parmesano",
    ["albahaca", "aceite de oliva"]
);
alert(`Pizza al estilo "Italiana":
    Corteza: ${italiana.corteza}
    Salsas: ${italiana.salsas}
    Queso: ${italiana.quesos}
    Extras: ${italiana.ingredientes}`
);
}