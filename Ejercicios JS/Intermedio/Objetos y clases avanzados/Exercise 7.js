//Utiliza polimorfismo en dos clases diferentes

//Crea una clase abstracta

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    sonidoAnimal() {
        console.log(`${this.nombre} hace sonido generico`)
    }
}

class Dog extends Animal {
    sonidoAnimal() {
        console.log(`${this.nombre} dice guao guao`);
    }
}


class Cat extends Animal {
constructor(nombre){
    super(nombre);
    this.raza = "egipcia";
}
    sonidoAnimal() {
        console.log(`${this.nombre} dice miau miau`);
    }
    razaGato() {
console.log(`La raza del gato es ${this.raza}`);
    }
}

//Polimorfismo
const animales = [
    new Dog("Luna"),
    new Cat("Cipriano")
];

for (const animal of animales){
    animal.sonidoAnimal();
}