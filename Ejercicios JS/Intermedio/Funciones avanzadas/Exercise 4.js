// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(valorInicial) {
    let valor = valorInicial;

    return {
        increment() {
            valor++;
        },
        decrement() {
            valor--;
        },
        getValue() {
            return valor;
        }
    };
}

const counter = createCounter(10);

counter.increment();
console.log(counter.getValue()); // 11

counter.decrement();
counter.decrement();
console.log(counter.getValue()); // 9