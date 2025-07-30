// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function saludar(nombre, callback) {
    setTimeout(() => {
        callback(nombre);
    }, 2000);
}

// Definimos el callback que muestra el saludo
function mostrarSaludo(nombre) {
    console.log(`Hola, ${nombre}`);
}

saludar("Carlos", mostrarSaludo);
