function searchPokemon(pokemon) {
    pokemon = document.getElementById("searchBar").value
    let char = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
        if(!response.ok) {
            alert("Uh oh! We're having issues accessing this Pokémon! Please check your spelling, or the index used.")
            throw new Error("Uh oh! We're having issues accessing this Pokémon!")
        }
        return response.json()
    }).then(data => {
        document.getElementById("pokedex").innerHTML += `
            <div class="flex flex-col items-center m-5" id="${data.name}Container">
                <img class="relative w-60 h-60 top-62 z-1" src=${data.sprites.front_default} alt="The Pokemon ${data.name}">
                <div class="w-90 h-50 border rounded-3xl border-2 ${data.types[0].type.name}Name" id="${data.name}Name">
                    <h1 class="font-bold text-2xl text-white mx-5 mt-5 mb-2">${data.name}</h1>
                    <h1 class="flex items-center justify-center text-lg text-white text-center mx-6 w-auto max-w-20 h-auto p-2 rounded-3xl ${data.types[0].type.name}Type" id="${data.name}Type">${data.types[0].type.name}</h1>
                </div>
            </div>`
        return data
    }).then(data => {
        document.getElementById(`${data.name}Container`).innerHTML += `
        <div class="w-90 h-73 border rounded-3xl border-2 bg-gray-400 z-0 mt-[-3rem]" id="${data.name}Info">
            <h1 class="text-gray-800 font-semibold text-lg mx-5 my-2">Height: ${data.height}</h1>
            <h1 class="text-gray-800 font-semibold text-lg mx-5 my-2">Weight: ${data.weight}</h1>
            <h1 class="text-gray-800 font-semibold text-lg mx-5 my-2">Abilities:</h1
        </div>
        `
        for(let i = 0; i <= data.abilities.length - 1; i++) {
            document.getElementById(`${data.name}Info`).innerHTML += `<h1 class="text-gray-800 font-semibold text-lg mx-5 my-2">${data.abilities[i].ability.name}</h1>`
        }
        document.getElementById(`${data.name}Info`).innerHTML += `<h1 class="text-gray-800 font-semibold text-lg mx-5 my-2">Base Experience: ${data.base_experience}</h1>`
    })
}