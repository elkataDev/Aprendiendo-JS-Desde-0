//Crea una clase abstracta

class Animal {
    constructor(nombre) {
        if (new.target === Animal) {
            throw new Error("No puedes instanciar una clase abstracta");
        }
        this.nombre = nombre;
    }
    sonidoAnimal() {
        throw new Error("El metodo sonidoAnimal debe ser implementado por la subclase");
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

const perro  = new Dog("Luna");
perro.sonidoAnimal();

const gato  = new Cat("Cipriano");
gato.sonidoAnimal();
