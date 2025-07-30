// 5. Utiliza la operación assign en un objeto
let persona = {
  nombre: "Antonio",
  edad: 24,
  misDatos: function () {
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
};

let profesion = {
  puestoTrabajo: "Programador JavaScript",
  miPuestoTrabajo: function () {
    console.log(`Mi puesto de trabajo es ${this.puestoTrabajo}`);
  }
};

// aplicamos assign
//al poner las {} crea un nuevo objeto copiando las propiedades de los dos objetos 
//Si no las ponemos se modifica las propiedades de objet1 
let desarrollador = Object.assign({}, persona, profesion);

desarrollador.misDatos(); 
desarrollador.miPuestoTrabajo(); 
