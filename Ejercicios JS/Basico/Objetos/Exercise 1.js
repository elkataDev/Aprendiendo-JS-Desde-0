// 1. Crea un objeto con 3 propiedades
// 2. Accede y muestra su valor
// 3. Agrega una nueva propiedad
// 4. Elimina una de las 3 primeras propiedades
// 5. Agrega una función e invócala
// 6. Itera las propiedades del objeto
// 7. Crea un objeto anidado
// 8. Accede y muestra el valor de las propiedades anidadas
// 9. Comprueba si los dos objetos creados son iguales
// 10. Comprueba si dos propiedades diferentes son iguales

//Creo un objeto
let persona = {
    name: "Antonio",
    apellidos: "Espínola",
    altura: 1.80
}
console.log(persona.name);
console.log(persona.apellidos);
console.log(persona.altura);

persona.peso = 80;

delete persona.name;
delete persona.apellidos;
delete persona.altura;

persona.walk = function () {
    console.log("Estoy caminando");
}

persona.walk();

for (let key in persona) {
    console.log(key + " : " + persona[key])
}

let person2 = {
    name: "juan",
    age: 57,
    apellido: "gutierrez",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log("El programador trabaja con " + this.exp + " años de experiencia.");
        }
    }
}

console.log(person2.job.name);  // Programador
console.log(person2.job.exp);   // 15
person2.job.work();             // El programador trabaja con 15 años de experiencia


console.log("¿Los objetos son iguales?", persona === person2); // false

console.log("¿peso de persona === edad de person2?", persona.peso === person2.age); // 80 === 57 → false
