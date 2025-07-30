// 4. Haz uso de get y set en un objeto

const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',

    // Getter para nombre completo
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },

    // Setter para nombre completo
    set nombreCompleto(valor) {
        const partes = valor.split(' ');
        this.nombre = partes[0];
        this.apellido = partes[1] || '';
    }
};

// Usando el getter
console.log(persona.nombreCompleto); // "Juan Pérez"

// Usando el setter
persona.nombreCompleto = 'Carlos Ramírez';

console.log(persona.nombre);   // "Carlos"
console.log(persona.apellido); // "Ramírez"
console.log(persona.nombreCompleto); // "Carlos Ramírez"