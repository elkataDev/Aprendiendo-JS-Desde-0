// 2. Añade un método a la clase que utilice las propiedades

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}