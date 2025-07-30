// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
const numeros = [10, 20, 30, 40];
const [primero, segundo] = numeros;
console.log(primero, segundo); // 10 20

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const colores = ['rojo'];
const [color1, color2 = 'azul'] = colores;
console.log(color1, color2); // rojo azul

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const persona = { nombre: 'Ana', edad: 25, ciudad: 'Madrid' };
const { nombre, edad } = persona;
console.log(nombre, edad); // Ana 25

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
const usuario = { usuario: 'juan123', email: 'juan@example.com' };
const { usuario: nombreUsuario, email: correo } = usuario;
console.log(nombreUsuario, correo); // juan123 juan@example.com

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const producto = {
  id: 1,
  detalles: {
    nombre: 'Laptop',
    precio: 1200
  }
};
const { detalles: { nombre: nombreProducto, precio } } = producto;
console.log(nombreProducto, precio); // Laptop 1200

// 6. Usa propagación para combinar dos arrays en uno nuevo
const frutas = ['manzana', 'banana'];
const verduras = ['zanahoria', 'lechuga'];
const alimentos = [...frutas, ...verduras];
console.log(alimentos); // ['manzana', 'banana', 'zanahoria', 'lechuga']

// 7. Usa propagación para crear una copia de un array
const copiaFrutas = [...frutas];
console.log(copiaFrutas); // ['manzana', 'banana']

// 8. Usa propagación para combinar dos objetos en uno nuevo
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinado = { ...obj1, ...obj2 };
console.log(combinado); // { a: 1, b: 2, c: 3, d: 4 }

// 9. Usa propagación para crear una copia de un objeto
const copiaPersona = { ...persona };
console.log(copiaPersona); // { nombre: 'Ana', edad: 25, ciudad: 'Madrid' }

// 10. Combina desestructuración y propagación
const auto = { marca: 'Toyota', modelo: 'Corolla', año: 2020, color: 'gris' };
const { marca, ...resto } = auto;
console.log(marca); // Toyota
console.log(resto); // { modelo: 'Corolla', año: 2020, color: 'gris' }