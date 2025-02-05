// api.js
export function requestApi(searchTerm) {
    const url = process.env.REACT_APP_API_URL; 
    
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.filter(artist => 
                artist.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        })
        .catch((error) => {
            console.error('Erro ao carregar o JSON:', error);
            return [];
        });
}

export function displayResults(results, resultArtist, resultPlaylist) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    // Limpa resultados anteriores
    artistName.innerText = '';
    artistImage.src = '';

    // Exibe os resultados
    if (results.length > 0) {
        const firstArtist = results[0]; // Exibe apenas o primeiro artista encontrado
        artistName.innerText = firstArtist.name;
        artistImage.src = firstArtist.urlImg;
    }

    resultArtist.classList.remove('hidden')
}