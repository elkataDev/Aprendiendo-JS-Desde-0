// 1. Agregega una función al prototipo de un objeto

function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre}`);
};

const persona1 = new Persona("Juan");

persona1.saludar();
