// 6. Crea una clase que haga uso de herencia
import { Persona } from './Exercise 3.js';

export class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  info() {
    return this.presentarse()+ "Estudio el curso:"+this.curso;
  }
}
