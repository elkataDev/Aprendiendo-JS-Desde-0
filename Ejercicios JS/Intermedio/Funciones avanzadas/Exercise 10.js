// 10. Haz uso del this léxico
class persona {
    constructor(nombre) {
        this.nombre = nombre,
            // Arrow function: hereda "this" de Persona
            this.saludar = () => {
                console.log(`Hola, soy ${this.nombre}`);
            };
    }
}

const persona1 = new persona("María");
persona1.saludar(); // Hola, soy María


const persona2 = {
    name: "Antonio",
    saludo: function () {
        console.log(`Hola, ${this.name}`) //Este this hace referencia al contenido de persona2
    },
    saludoFlecha: () => {
        console.log(`Hola, ${this.name}`) //this: typeof globalThis
    }
}

persona2.saludo()
persona2.saludoFlecha();