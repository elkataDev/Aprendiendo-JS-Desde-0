// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function partialPostUpdate() {
    try {
        // Realizamos la petición PATCH para modificar solo algunos campos del post con id 10
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH", // Método PATCH para actualizar parcialmente el recurso
            headers: {
                "Content-Type": "application/json" // Indicamos que el cuerpo está en formato JSON
            },
            // Enviamos solo los campos que queremos actualizar
            body: JSON.stringify({ 
                title: "Este es el nuevo título de mi post", 
                body: "Este es el cuerpo modificado por el PATCH" 
            })
        });

        // Validamos si la respuesta fue exitosa (status HTTP 200-299)
        if (!response.ok) {            
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Convertimos la respuesta a JSON
        const data = await response.json();

        // Mostramos en consola los datos actualizados
        console.log(data);
    } catch (error) {
        // Capturamos y mostramos cualquier error que ocurra
        console.log("Error:", error);
    }
}

partialPostUpdate();
