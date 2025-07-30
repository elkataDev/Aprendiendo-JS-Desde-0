// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function getPost() {
    try {
        // Espera la respuesta de la petición
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        // Convierte la respuesta a JSON
        const data = await response.json();

        // Muestra los datos en consola
        console.log(data);
    } catch (error) {
        // Maneja y muestra errores
        console.log(`Error: ${error}`);
    }
}
getPost();