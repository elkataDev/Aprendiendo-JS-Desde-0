// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
class Producto {
  #nombre;
  #precio;

  constructor(nombre, precio) {
    this.#nombre = nombre;
    this.#precio = precio;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get precio() {
    return this.#precio;
  }

  set precio(nuevoPrecio) {
    if (nuevoPrecio > 0) {
      this.#precio = nuevoPrecio;
    }
  }
}

const prod = new Producto("Laptop", 1500);
console.log(prod.nombre); // Laptop
prod.nombre = "Tablet";
console.log(prod.nombre); // Tablet

console.log(prod.precio); // 1500
prod.precio = 1000;
console.log(prod.precio); // 1000