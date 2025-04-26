function getPokemonInfo(pokemon, nameID, infoID, divColor, imgID) {
    let character = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
        if(!response.ok) {
            throw new Error("Uh oh! We're having issues accessing this Pokémon!")
        }
        return response.json()
    }).then(data => {
        document.getElementById(`${nameID}`).innerHTML += `<h1 class="font-bold text-2xl text-white mx-5 mt-5 mb-2">${data.name}</h1>`
        document.getElementById(`${nameID}`).innerHTML += `<h1 class="flex items-center justify-center text-lg text-white text-center mx-6 bg-[${divColor}] w-17 h-8 rounded-3xl">${data.types[0].type.name}</h1>`
        document.getElementById(`${imgID}`).src = data.sprites.front_default
        document.getElementById(`${imgID}`).alt = `The Pokémon ${data.name}`
        return data
    }).then(data => {
        document.getElementById(`${infoID}`).innerHTML += `<h1 class="text-gray-800 font-semibold text-lg mx-5 my-2">Height: ${data.height}</h1>`
        document.getElementById(`${infoID}`).innerHTML += `<h1 class="text-gray-800 font-semibold text-lg mx-5 my-2">Weight: ${data.weight}</h1>`
        document.getElementById(`${infoID}`).innerHTML += `<h1 class="text-gray-800 font-semibold text-lg mx-5 my-2">Abilities:</h1>`
        for(let i = 0; i <= data.abilities.length - 1; i++) {
            document.getElementById(`${infoID}`).innerHTML += `<h1 class="text-gray-800 font-semibold text-lg mx-5 my-2">${data.abilities[i].ability.name}</h1>`
        }
        document.getElementById(`${infoID}`).innerHTML += `<h1 class="text-gray-800 font-semibold text-lg mx-5 my-2">Base Experience: ${data.base_experience}</h1>`
    })
}

getPokemonInfo('chespin', 'chesName', 'chesInfo', '#55F2CD', 'chesImg')
getPokemonInfo('fennekin', 'fenneName', 'fenneInfo', '#fecaca', 'fenneImg')
getPokemonInfo('froakie', 'froName', 'froInfo', '#bfdbfe', 'froImg')
getPokemonInfo('eevee', 'eeveeName', 'eeveeInfo', '#d1d5db', 'eeveeImg')
getPokemonInfo('vaporeon', 'vaporName', 'vaporInfo', '#bfdbfe', 'vaporImg')
getPokemonInfo('jolteon', 'joltName', 'joltInfo', '#fcd34d', 'joltImg')
getPokemonInfo('flareon', 'flareName', 'flareInfo', '#fecaca', 'flareImg')
getPokemonInfo('espeon', 'espeName', 'espeInfo', '#e9d5ff', 'espeImg')
getPokemonInfo('umbreon', 'umbreName', 'umbreInfo', '#27272a', 'umbreImg')
getPokemonInfo('leafeon', 'leafName', 'leafInfo', '#55F2CD', 'leafImg')
getPokemonInfo('glaceon', 'glaceName', 'glaceInfo', '#cffafe', 'glaceImg')
getPokemonInfo('sylveon', 'sylveName', 'sylveInfo', '#fbcfe8', 'sylveImg')