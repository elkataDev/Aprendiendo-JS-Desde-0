// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const usuariosMap = new Map([
    ["nombre", ["Antonio", "Juan", "andrea", "jesus"]],
    ["edad", [24, 12, 45, 18]],
    ["email", ["antonio@gmail.com", "juan@gmail.com", "andrea@gmail.com", "jesus@gmail.com"]]
])

// Itera mostrando clave y valor
usuariosMap.forEach((valor, clave) => console.log(`${clave}: ${valor}`));

// 8. Dado el mapa anterior, crea un array con los nombres
const usuariosArray = usuariosMap.get("nombre");
console.log("Array de nombres:");
console.log(usuariosArray);

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const emails = usuariosMap.get("email");
const edades = usuariosMap.get("edad");
const emailsMayoresEdad = emails.filter((email, index) => edades[index] >= 18);
const usuariosEmailMayorEdad = new Set(emailsMayoresEdad);
console.log(`Mayores de edad:`);
usuariosEmailMayorEdad.forEach(element => console.log(element));

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
const usuariosObjetos = Object.fromEntries(usuariosMap);
// Crear un nuevo Map con clave = email y valor = { nombre, edad, email }
const usuariosPorEmail = new Map();

const { nombre, edad, email } = usuariosObjetos;

email.forEach((correo, i) => {
    usuariosPorEmail.set(correo, {
        nombre: nombre[i],
        edad: edad[i],
        email: correo
    });
});

console.log("Mapa con email como clave:");
console.log(usuariosPorEmail);
