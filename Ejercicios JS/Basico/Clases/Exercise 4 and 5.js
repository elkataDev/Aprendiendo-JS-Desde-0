// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    return "Hola, soy "+this.nombre+" y tengo "+this.edad+" años.";
  }

  static saludar() {
    return "Hola desde la clase Persona (método estático).";
  }
}

console.log(Persona.saludar()); // Hola desde la clase Persona (método estático)
