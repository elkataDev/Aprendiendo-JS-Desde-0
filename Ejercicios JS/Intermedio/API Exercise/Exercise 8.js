// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// https://openweathermap.org
async function getPostOpenWeatherMap(city) {
    const apiKey = "TU_API_KEY"; //Contraseña para acceder a la API

    //URL con nombre de la ciudad y clave de API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    try {
        //Realiza la solicitud GET
        const response = await fetch(url);

        // Verifica si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`HTTP error! Código: ${response.status}`);
        }

        // Convierte la respuesta a JSON
        const data = await response.json();
        console.log("Clima en", city, "→", data);
    } catch (error) {
        console.log("Error al obtener el clima:", error.message);
    }
}
getPostOpenWeatherMap("Granada");
