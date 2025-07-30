// 1. Exporta una función

export function suma(a, b) {
    return a + b;
}

// 2. Exporta una constante

export const nameDev = "KataDev";

// 3. Exporta una clase

export class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    miEdad() {
        console.log("Mi edad es: " + this.edad)
    }

    miNombre() {
        console.log("Mi nombre es: " + this.nombre)
    }
}