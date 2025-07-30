// 10. Desarrolla un Proxy

const persona = {
  nombre: "Juan",
  edad: 30
};

const manejador = {
  // Intercepta lecturas de propiedades
  get(target, propiedad) {
    if (propiedad === "edad") {
      return `${target[propiedad]} años`;
    }
    return target[propiedad];
  },

  // Intercepta escrituras en propiedades
  set(target, propiedad, valor) {
    if (propiedad === "edad") {
      if (typeof valor !== "number" || valor < 0) {
        console.warn("Edad no válida");
        return false; // No se realiza el cambio
      }
    }
    target[propiedad] = valor;
    return true;
  }
};

// Crear el Proxy
const proxyPersona = new Proxy(persona, manejador);

// Usos
console.log(proxyPersona.nombre); // Juan
console.log(proxyPersona.edad);   // 30 años (get)

proxyPersona.edad = -5;           // Edad no válida (set)
proxyPersona.edad = 35;
console.log(proxyPersona.edad);   // 35 años
