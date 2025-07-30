// 2. Crea un objeto que herede de otro

let persona = {
    nombre: "Antonio",
    edad: 24
}

let desarrollador = Object.create(persona);

// Puedes agregar propiedades propias al nuevo objeto
desarrollador.lenguaje = "JavaScript";

console.log(desarrollador.nombre);
console.log(desarrollador.lenguaje);