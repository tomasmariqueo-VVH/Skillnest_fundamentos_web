console.log("Conexión exitosa...!")

let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: ["Lechuga", "Pepinos", "Miel"],

    mostrarIngredientes: function () {
        console.log("Pan:", this.pan);
        console.log("Carne:", this.carne);
        console.log("Queso:", this.queso);
        console.log("Extras:", this.extras.join(", ")
        );
    }
};

//Desafio: acceder al nombre del pan
console.log(hamburguesaEspecial.pan);
hamburguesaEspecial.mostrarIngredientes();

//EJEMPLO 1
function auto() {
    let auto = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2023,
        encender: function () {
            alert("Encendiendo", this.marca, this.modelo);
        }
    };
    auto.encender()
}

//EJEMPLO 2
let casa = {
    direccion: "Av. Siempre Viva 742",
    habitaciones: 4,
    baños: 2,
    mostrarInformacion: function () {
        alert(this.direccion);
    }
    
}

console.log(casa.direccion);
casa.mostrarInformacion();