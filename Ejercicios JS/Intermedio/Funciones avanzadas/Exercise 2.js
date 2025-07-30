// 2. Implementa una función currificada que multiplique 3 números

function curryMultiplicacion(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}
const numeroConstante = curryMultiplicacion(4);
console.log(numeroConstante(2)(6)); // 4*2*6 = 48
console.log(numeroConstante(1)(3));// 4*1*3 = 12
