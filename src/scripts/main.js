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
