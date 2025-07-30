    // 10. Crea una simulación de un cajero automático usando asincronía.
    //     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
    //     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
    //     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
    //     
    //     Posible salida esperada:
    //     Saldo disponible: 500$
    //     Retirando 300$...
    //     Operación exitosa, saldo restante: 200$
    //     Retirando 300$...
    //     Error: Fondos insuficientes

let saldo = 500;

function checkBalance() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(saldo);
        }, 1000);
    });
}

function withdrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (saldo >= amount) {
                saldo -= amount;
                resolve(saldo);
            } else {
                reject("Fondos insuficientes");
            }
        }, 2000);
    });
}

async function operarCajero() {
    const saldoDisponible = await checkBalance();
    console.log(`Saldo disponible: ${saldoDisponible}$`);

    console.log("Retirando 300$...");
    try {
        const nuevoSaldo = await withdrawMoney(300);
        console.log(`Operación exitosa, saldo restante: ${nuevoSaldo}$`);
    } catch (error) {
        console.error("Error:", error);
    }

    console.log("Retirando 300$...");
    try {
         nuevoSaldo = await withdrawMoney(300);
        console.log(`Operación exitosa, saldo restante: ${nuevoSaldo}$`);
    } catch (error) {
        console.error("Error:", error);
    }
}
operarCajero();