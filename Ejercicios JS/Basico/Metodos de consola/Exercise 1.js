// 1. Utiliza console.error
function mostrarError() {
    console.error("Error: Algo salió mal");
}
mostrarError();

// 2. Utiliza console.warn
function mostrarAdvertencia() {
    console.warn("Advertencia: Esta acción es peligrosa");
}
mostrarAdvertencia();

// 3. Utiliza console.info
function mostrarInfo() {
    console.info("Información: El proceso terminó correctamente");
}
mostrarInfo();

// 4. Utiliza console.table
const usuarios = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 },
    { id: 3, nombre: "Pedro", edad: 22 }
];
console.table(usuarios);


// 5. Utiliza console.group y console.groupEnd
console.group("Mensajes agrupados:");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd();


// 6. Utiliza console.time y console.timeEnd
console.time("Tiempo");
for (let i = 0; i < 10000000; i++) { }
console.timeEnd("Tiempo");


// 7. Utiliza console.assert para validar número positivo
let numero = -12;
let numero2 = 45;
console.assert(numero > 0, `El número ${numero} no es positivo`);
console.assert(numero2 > 0, `El número ${numero2} no es positivo`);

// 8. Utiliza console.count

console.count("contador");
console.count("contador");
console.count("contador");
console.count("contador");
console.countReset("contador");
console.count("contador");
console.count("contador");

// 9. Utiliza console.trace

console.trace("Rastreo de ejecución");


// 10. Utiliza console.clear
function limpiarConsola() {
  console.clear();
}
limpiarConsola();