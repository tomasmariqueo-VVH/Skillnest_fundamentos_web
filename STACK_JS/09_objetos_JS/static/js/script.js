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
            alert(`Encendiendo:
                \nMarca: ${this.marca}
                \nModelo: ${this.modelo}
                \nAño: ${this.año}`);
        }
    };
    auto.encender()
}

//EJEMPLO 2
function casa() {
    let casa = {
        direccion: "Av. Siempre Viva 742",
        habitaciones: 4,
        baños: 2,
        mostrarInformacion: function () {
            alert(`Información: 
                \nDirección: ${this.direccion} 
                \nHabitaciones: ${this.habitaciones} 
                \nBaños: ${this.baños}`);
        }
    }
casa.mostrarInformacion()
}