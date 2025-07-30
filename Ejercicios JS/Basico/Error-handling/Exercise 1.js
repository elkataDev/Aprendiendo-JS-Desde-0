// 1. Captura una excepción utilizando try-catch

try {
    let suma = num1 + 1; //la variable num1 no está definida
} catch (error) {
    console.error("Error capturado:", error.message);
}