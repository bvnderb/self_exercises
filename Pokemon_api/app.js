document.getElementById('regularButton').addEventListener('click', function () {
    pokeFetch(false);
});

document.getElementById('shinyButton').addEventListener('click', function () {
    pokeFetch(true);
});

async function pokeFetch(isShiny) {
    try {
        const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);

        if (!response.ok) {
            throw new Error('No response received. Try again later');
        }

        const data = await response.json();
        const pokemonSprite = isShiny ? data.sprites.front_shiny : data.sprites.front_default;
        const pokeName = data.name;
        const pokemonId = data.id;
        
        document.getElementById('pokemonId').textContent = `# ${pokemonId}`;
        document.getElementById('pokemonName').textContent = `${pokeName.toUpperCase()}`;

        const imgElement = document.getElementById('pokemonSprite');

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }
    catch (error) {
        console.error('Error fetching user data:', error);
    }
}
