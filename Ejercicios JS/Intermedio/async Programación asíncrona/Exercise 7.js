// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")




//Salida esperada
/*Inicio
Fin
Promesa resuelta
setTimeout ejecutado */

console.log("Inicio");
setTimeout(() => console.log("setTimeout ejecutado"), 0);   //MicroTask
Promise.resolve().then(() => console.log("Promesa resuelta")); //MacroTask
console.log("Fin");
