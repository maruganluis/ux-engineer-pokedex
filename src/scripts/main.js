// Creación de función JS para generar plantilla de card //

function renderPokemon(pokemonApi) {

    // Creación de la card mediante JS //

    const pokemonCard = document.createElement(`article`);
    pokemonCard.classList.add(`pokemon__card`);
    pokemonCard.innerHTML = `
        <header class="pokemon__card-info">
            <p class="pokemon__card-number caption">#0${pokemonApi.order}</p>
                 <h1 class="pokemon__card-name body3">${pokemonApi.name}</h1>
        </header>
        <section class="pokemon__card-body">
            <div class="pokemon__card-image">
                <img src="${pokemonApi.sprites.other['official-artwork'].front_default}" alt="Pokemon ${pokemonApi.name}">
            </div>
        </section>
    `
    
    // Creación del listado //
    
    const listItem = document.createElement(`li`);
    listItem.appendChild(pokemonCard);
    
    // Añadir el listado (li) al ul //
    
    const pokemonList = document.querySelector(`.pokemon__container-list`)
    pokemonList.appendChild(listItem);

}

for(let i=0; i<pokemonApi.length; i++){
    renderPokemon(pokemonApi[i]);
}


// Escuchar el evento del buscar y filtrar los pokemons por nombre //

// Uso el querySelector para buscar el input con la clase concreta de CSS y guardo el buscador en la variable para utilizarlo más tarde //

const searchBar = document.querySelector(`.pokedex__searchbar`);

// Evento que "escucha" al input search cuando interactuo con él //

searchBar.addEventListener(`input`, function () {

    // Guardo el pokemon que se busca en el input //

    const result = searchBar.value; 

    // filter recorre la lista de datos de mi pokemonApi y trata de encontrar los relacionados con el "result" que es lo que he escrito en la searchbar //

    const filteredPokemons = pokemonApi.filter(function(pokemon) {
        return pokemon.name.includes(result);
    }
    );


    // Arrojo la información al contenedor vacio, sino me estaba replicando el html existente + los resultados de la busqueda //

    const pokemonList = document.querySelector('.pokemon__container-list');
    pokemonList.innerHTML = '';
    

    // Recorro los pokemon con nombre relacionado con la busqueda y los renderizo (muestro) //

    filteredPokemons.forEach(function(pokemon) {
        renderPokemon(pokemon);
    }
    );
});