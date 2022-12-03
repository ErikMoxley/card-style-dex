const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
try {
    fetch(baseUrl)
    .then(response => {
        const responseJson = response.json()
        return responseJson
    })
    .then(data => {
        const pokemons = data.results
        pokemons.forEach(pokemon => {
        document.getElementById('pokemons')
            .insertAdjacentHTML('beforeend', `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`)
        })
    })
    .catch(error => {
        console.error(error)
    })
} catch (error) {
    console.error(error)
}

const detail = (url) => {
    try {
    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
        document.getElementById('detail').innerHTML = ''
        document.getElementById('detail')
            .insertAdjacentHTML('beforeend', 
            `
                <h1>${pokemon.name}</h1>
                <img src="${pokemon.sprites.front_default}" />
                <h1>${pokemon.types.param}</h1>
            `
            )
        })
        .catch(error => {
        console.error(error)
        })
    } catch (error) {
    console.error(error)
    }
}