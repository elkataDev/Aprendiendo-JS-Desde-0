// 7. Crea una clase que haga uso de getters y setters

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  get nombre() {
    return this.nombre;
  }

  set nombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  get precio() {
    return this.precio;
  }

  set precio(nuevoPrecio) {
    if (nuevoPrecio > 0) {
      this.precio = nuevoPrecio;
    }
  }
}
