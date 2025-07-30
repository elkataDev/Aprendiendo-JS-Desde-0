// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function intentarHasta10Veces(func) {
    for (let i = 1; i <= 10; i++) {
        try {
            return func(); // si no lanza error, devuelve el resultado
        } catch (error) {
            console.log("Intento " + i + " fallo: " + error.message);
        }
    }
    throw new Error("Todos los intentos fallaron.");
}

// Ejemplo de uso:
let contador = 0;

function prueba() {
    contador++;
    if (contador < 4) {
        throw new Error("Error simulado.");
    }
    return "¡Éxito en el intento " + contador + "!";
}

try {
    const resultado = intentarHasta10Veces(prueba);
    console.log("Resultado:", resultado);
} catch (e) {
    console.error(e.message);
}
