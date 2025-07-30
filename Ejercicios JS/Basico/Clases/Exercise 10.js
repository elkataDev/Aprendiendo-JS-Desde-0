// 10. Sobrescribe un método de una clase que utilice herencia 
import { Estudiante } from './Exercise 6.js';

class EstudianteAvanzado extends Estudiante {
  info() {
    return "Soy un estudiante avanzado. "+super.info();
  }
}

const e1 = new EstudianteAvanzado("Antonio", 24, "JavaScript");
console.log(e1.info());
//Soy un estudiante avanzado. Hola, soy Antonio y tengo 24 años. Estudio el curso: JavaScript
