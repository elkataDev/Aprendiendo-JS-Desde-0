// 2. Captura una excepción utilizando try-catch y finally

try {
    let x = numero1; // Error porque la varible no esta definida
} catch (error) {
    console.error("Error capturado:", error.message);
} finally {
    console.log("Este bloque se ejecuta siempre.");
}
