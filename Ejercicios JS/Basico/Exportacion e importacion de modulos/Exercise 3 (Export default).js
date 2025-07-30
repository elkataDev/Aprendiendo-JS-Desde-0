// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

//Nota : Solo puede haber una exportación por defecto por archivo .js

//Export una funcion por defecto
export default function multiplicacion(a, b) {
    return a * b;
}

//No permite exportar una constante
//export default const pi = 3.14;
export const pi = 3.14;

//Exporto una clase
export class perro {
    constructor(raza, peso) {
        this.raza = raza;
        this.peso = peso;
    }
    razaPerro() {
        console.log("Mi raza es " + this.raza);
    }
    pesoPerro() {
        console.log("Mi perro pesa " + this.peso+" kilos");
    }
}