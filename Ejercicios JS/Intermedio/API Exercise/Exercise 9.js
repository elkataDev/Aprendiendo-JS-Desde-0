// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

// Función para obtener datos de un Pokémon, su especie y cadena evolutiva
async function getPokemon(pokemon) {
    try {
        // 1. Obtener datos básicos del Pokémon (nombre, tipos, etc.)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) {
            console.log(`Error al obtener Pokémon: ${response.status}`);
            return;
        }

        const pokemonData = await response.json();
        console.log("Datos del Pokémon:", pokemonData);

        // 2. Obtener detalles de la especie
        const speciesUrl = pokemonData.species.url;
        const speciesResponse = await fetch(speciesUrl);
        const speciesData = await speciesResponse.json();
        console.log("Detalles de la especie:", speciesData);

        // 3. Obtener cadena evolutiva
        const evolutionUrl = speciesData.evolution_chain.url;
        const evolutionResponse = await fetch(evolutionUrl);
        const evolutionData = await evolutionResponse.json();
        console.log("Cadena evolutiva:", evolutionData);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getPokemon("pikachu");