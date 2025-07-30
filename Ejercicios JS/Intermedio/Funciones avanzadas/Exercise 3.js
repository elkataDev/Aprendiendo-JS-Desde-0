// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function potencia(base, exponente) {
    // Caso base: cualquier número elevado a 0 es 1
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}
console.log(potencia(2, 3)); // 8  (2 * 2 * 2)
console.log(potencia(5, 0)); // 1
console.log(potencia(3, 4)); // 81