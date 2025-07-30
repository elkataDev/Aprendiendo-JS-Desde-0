//Implementa un Mixin
const volador = {
    volar() {
        console.log(`${this.nombre} esta volando`);
    }
};

const nadador = {
    nadar() {
        console.log(`${this.nombre} esta nadando`);
    }
};

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

//Aplica mixins manualmente
Object.assign(Animal.prototype,volador,nadador);

const pato = new Animal("Pato Lucas");
pato.volar();
pato.nadar();