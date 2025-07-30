// 1. Crea una función que retorne a otra función
function saludar(nombre) {
    return function () {
        console.log(`Hola, ${nombre}`);
    };
}

// Uso:
const saludo = saludar("Antonio");
saludo();