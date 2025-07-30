// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            // Lanza un error si la respuesta no fue exitosa
            throw new Error(`Status HTTP: ${response.status}`);
        }
        return response.json(); // Si todo está bien, convierte a JSON
    })
    .then(data => {
        console.log(data); // Muestra los datos en consola
    })
    .catch(error => {
        console.log(`Error: ${error}`); // Muestra el error en caso de fallo
    });