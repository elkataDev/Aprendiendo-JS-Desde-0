// 9. Crea un Singleton

//NOTA
/*Un Singleton es un patrón de diseño que asegura que una clase tenga 
una única instancia y proporciona un punto de acceso global a ella. */
class Singleton {
    
  constructor(nombre) {
    if (Singleton.instancia) {
      // Si ya existe una instancia, devolvemos esa
      return Singleton.instancia;
    }
    // Si no existe, se crea y se guarda
    this.nombre = nombre;
    Singleton.instancia = this;

    // Retornamos la nueva instancia
    return this;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

// Uso del Singleton
const obj1 = new Singleton("Primera instancia");
obj1.saludar(); // Hola, soy Primera instancia

const obj2 = new Singleton("Segunda instancia");
obj2.saludar(); // Hola, soy Primera instancia (¡no cambia!)

console.log(obj1 === obj2); // true (es la misma instancia)
