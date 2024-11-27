async function pokeFetch() {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemonName}');
        
        if (!response.ok) {
            throw new Error('No response received. Try again later');
    }
    
    const data = await response.json();
    console.log(data);
    }
catch (error) {
    console.error('Error fetching user data:', error);
}
}

pokeFetch();
