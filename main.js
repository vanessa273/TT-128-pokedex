const pokemonList = document.getElementById("pokemonList")

async function fetchpokemonData(pokemonId){
     try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    
          const data = await response.json()

          console.log(data)

          return data

      } catch (error) {
         console.error(error)
         return false
      }


}
function displayPokemon(pokemon){
    const pokemonCard = document.createElement("div")
    pokemonCard.classList.add("pokemon-card")
    console.log(pokemon.sprites.front_shiny)

    pokemonCard.innerHTML = `
    <h2>${pokemon.id}</h2>
    
        <img src= "${pokemon.sprites.front_shiny}" alt = imagen de ${pokemon.name}>
        <h3>${pokemon.name} </h3>
    `
    pokemonList.appendChild(pokemonCard)
}

 async function loadpokedex(){
    const pokemon = await fetchpokemonData(4)
    console.log(pokemon)
    displayPokemon(pokemon)
}

loadpokedex()
