// 4. Crea un set que almacene cinco libros

// 5. Añade dos más. Uno de ellos repetido

// 6. Elimina uno concreto a tu elección


let libros = new Set(); //Creo el set
//Agrego 5 libros
libros.add("Libro1");
libros.add("Libro2");
libros.add("Libro3");
libros.add("Libro4");
libros.add("Libro5");

//Agrego dos libros mas (uno repetido)
libros.add("Libro1"); //Repetido
libros.add("Libro6");

libros.delete("Libro4");

console.log(libros);


