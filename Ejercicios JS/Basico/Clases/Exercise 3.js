// 3. Muestra los valores de las propiedades e invoca a la función

export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    return "Hola, soy "+this.nombre+" y tengo "+this.edad+" años.";
  }
}

const persona1 = new Persona("Ana", 30);
console.log(persona1.nombre);         // Ana
console.log(persona1.edad);           // 30
console.log(persona1.presentarse());  // Hola, soy Ana y tengo 30 años.