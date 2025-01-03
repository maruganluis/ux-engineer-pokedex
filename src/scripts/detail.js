// Obtener el ID del Pokémon desde el index html, a través de la url //
const params = new URLSearchParams(window.location.search);
const pokemonId = parseInt(params.get('id')); 
console.log('ID del Pokémon:', pokemonId);

// Función para encontrar el Pokémon por ID //
function findPokemonById(id) {
    return pokemonApi.find(pokemon => pokemon.id === id);
}

// Encontrar el Pokémon seleccionado //
const selectedPokemon = findPokemonById(pokemonId);
console.log('Pokémon seleccionado:', selectedPokemon);




// Header dinamico del detail desde el DOM //

function renderPokemonDetail(pokemon) {
    // Selecciono el contenedor donde se añadirá el contenido //
    const detailHeader = document.querySelector('.detail__header');


    // Creo los elementos dinámicamente usando el DOM //
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('detail__title');

    // Esto será lo que tengamos dentro del header de HTML//
    titleDiv.innerHTML = `
        <div class="detail__title-headline">
            <a href="./index.html">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.35 38.95L8.45 25.05C8.28333 24.8833 8.16667 24.7167 8.1 24.55C8.03333 24.3833 8 24.2 8 24C8 23.8 8.03333 23.6167 8.1 23.45C8.16667 23.2833 8.28333 23.1167 8.45 22.95L22.4 9C22.6667 8.73333 23 8.6 23.4 8.6C23.8 8.6 24.15 8.75 24.45 9.05C24.75 9.35 24.9 9.7 24.9 10.1C24.9 10.5 24.75 10.85 24.45 11.15L13.1 22.5H37.9C38.3333 22.5 38.6917 22.6417 38.975 22.925C39.2583 23.2083 39.4 23.5667 39.4 24C39.4 24.4333 39.2583 24.7917 38.975 25.075C38.6917 25.3583 38.3333 25.5 37.9 25.5H13.1L24.5 36.9C24.7667 37.1667 24.9 37.5 24.9 37.9C24.9 38.3 24.75 38.65 24.45 38.95C24.15 39.25 23.8 39.4 23.4 39.4C23 39.4 22.65 39.25 22.35 38.95Z" fill="#FFF"/>
                </svg>
            </a>
            <h1 class="detail__title-pokemon headline">${pokemon.name}</h1>
        </div>
        <p class="detail__title-number subtitle2">#0${pokemon.order}</p>
    `;

    
    detailHeader.appendChild(titleDiv);
}

if (selectedPokemon) {
    renderPokemonDetail(selectedPokemon);
}



// Imagen dinamica del detail desde el DOM //

function renderPokemonImage(pokemon) {
    // Selecciono el contenedor de nuestra foto //
    const imageContainer = document.querySelector('.pokemon__image');


    // Incursto el html desde JS //
    imageContainer.innerHTML = `
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.9501 34.9L17.0501 25C16.8834 24.8333 16.7668 24.6667 16.7001 24.5C16.6334 24.3333 16.6001 24.15 16.6001 23.95C16.6001 23.75 16.6334 23.5667 16.7001 23.4C16.7668 23.2333 16.8834 23.0667 17.0501 22.9L27.0001 12.95C27.3001 12.65 27.6584 12.5 28.0751 12.5C28.4918 12.5 28.8501 12.65 29.1501 12.95C29.4501 13.25 29.5918 13.6167 29.5751 14.05C29.5584 14.4833 29.4001 14.85 29.1001 15.15L20.3001 23.95L29.1501 32.8C29.4501 33.1 29.6001 33.45 29.6001 33.85C29.6001 34.25 29.4501 34.6 29.1501 34.9C28.8501 35.2 28.4834 35.35 28.0501 35.35C27.6168 35.35 27.2501 35.2 26.9501 34.9Z" fill="#fff"/>
            </svg>
        </a>
        <div class="pokemon__image-container">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="Pokemon ${pokemon.name}">
        </div>
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6999 34.9C17.4332 34.5667 17.2916 34.2 17.2749 33.8C17.2582 33.4 17.3999 33.05 17.6999 32.75L26.4999 23.95L17.6499 15.1C17.3832 14.8333 17.2582 14.475 17.2749 14.025C17.2916 13.575 17.4332 13.2167 17.6999 12.95C18.0332 12.6167 18.3916 12.4583 18.7749 12.475C19.1582 12.4917 19.4999 12.65 19.7999 12.95L29.7499 22.9C29.9166 23.0667 30.0332 23.2333 30.0999 23.4C30.1666 23.5667 30.1999 23.75 30.1999 23.95C30.1999 24.15 30.1666 24.3333 30.0999 24.5C30.0332 24.6667 29.9166 24.8333 29.7499 25L19.8499 34.9C19.5499 35.2 19.1999 35.3417 18.7999 35.325C18.3999 35.3083 18.0332 35.1667 17.6999 34.9Z" fill="#fff"/>
            </svg>                    
        </a>
    `;
}

if (selectedPokemon) {
    renderPokemonImage(selectedPokemon);
}


// Labels dinamicas del tipo //

function renderPokemonTypes(pokemon) {
    
    const typeContainer = document.querySelector('.type__label');

    // Cojo mis variables de colores de tipo y hago un objeto con ellas para saber que color añadir en función del tipo //

    const typeColors = {
        bug: 'var(--pk-color-bug)',
        dark: 'var(--pk-color-dark)',
        dragon: 'var(--pk-color-dragon)',
        electric: 'var(--pk-color-electric)',
        fairy: 'var(--pk-color-fairy)',
        fighting: 'var(--pk-color-fighting)',
        fire: 'var(--pk-color-fire)',
        flying: 'var(--pk-color-flying)',
        ghost: 'var(--pk-color-ghost)',
        normal: 'var(--pk-color-normal)',
        grass: 'var(--pk-color-grass)',
        ground: 'var(--pk-color-ground)',
        ice: 'var(--pk-color-ice)',
        poison: 'var(--pk-color-poison)',
        psychic: 'var(--pk-color-psychic)',
        rock: 'var(--pk-color-rock)',
        steel: 'var(--pk-color-steel)',
        water: 'var(--pk-color-water)',
    };

    pokemon.types.forEach(typeInfo => {
        const typeName = typeInfo.type.name; 
        
    
        const typeLabel = document.createElement('p');
        typeLabel.classList.add('type__label');
        typeLabel.classList.add('subtitle3'); 
        typeLabel.textContent = typeName;

        // Aquí meto el color de forma dinamica //
        typeLabel.style.backgroundColor = typeColors[typeName];

        
        typeLabel.classList.add(`type__label-${typeName}`);

        typeContainer.appendChild(typeLabel);
    });
}


if (selectedPokemon) {
    renderPokemonTypes(selectedPokemon);
}


// Peso, altura y movimientos //

function renderPokemonDetails(pokemon) {
    
    const detailContainer = document.querySelector('.pokemon__detail');


    const weightContainer = document.createElement('div');
    weightContainer.classList.add('pokemon__detail-weight');
    weightContainer.classList.add('body3');
    weightContainer.innerHTML = `
        <div class="pokemon__detail-weight-container">
            <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.85 39H37.15L34 17H14L10.85 39ZM24 14C24.8667 14 25.5833 13.7083 26.15 13.125C26.7167 12.5417 27 11.8333 27 11C27 10.1333 26.7167 9.41667 26.15 8.85C25.5833 8.28333 24.8667 8 24 8C23.1667 8 22.4583 8.28333 21.875 8.85C21.2917 9.41667 21 10.1333 21 11C21 11.8333 21.2917 12.5417 21.875 13.125C22.4583 13.7083 23.1667 14 24 14ZM29.2 14H34C34.7667 14 35.4333 14.2417 36 14.725C36.5667 15.2083 36.9 15.8333 37 16.6L40.1 38.6C40.2333 39.5 40.0083 40.2917 39.425 40.975C38.8417 41.6583 38.0833 42 37.15 42H10.85C9.91667 42 9.15834 41.6583 8.575 40.975C7.99167 40.2917 7.76667 39.5 7.9 38.6L11 16.6C11.1 15.8333 11.4333 15.2083 12 14.725C12.5667 14.2417 13.2333 14 14 14H18.8C18.5333 13.5333 18.3333 13.0583 18.2 12.575C18.0667 12.0917 18 11.5667 18 11C18 9.33333 18.5833 7.91667 19.75 6.75C20.9167 5.58333 22.3333 5 24 5C25.6667 5 27.0833 5.58333 28.25 6.75C29.4167 7.91667 30 9.33333 30 11C30 11.5667 29.9333 12.0917 29.8 12.575C29.6667 13.0583 29.4667 13.5333 29.2 14ZM10.85 39H37.15H10.85Z" fill="#1D1D1D"/>
            </svg>
            <p class="pokemon__weight body3">${(pokemon.weight)} kg</p>
        </div>
        <p class="pokemon__detail-weight-title caption">Weight</p>
    `;

    
    const heightContainer = document.createElement('div');
    heightContainer.classList.add('pokemon__detail-height');
    heightContainer.classList.add('.body3');
    heightContainer.innerHTML = `
        <div class="pokemon__detail-height-container">
            <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)">
                <path d="M7 36C6.2 36 5.5 35.7 4.9 35.1C4.3 34.5 4 33.8 4 33V15C4 14.2333 4.3 13.5417 4.9 12.925C5.5 12.3083 6.2 12 7 12H41C41.8 12 42.5 12.3083 43.1 12.925C43.7 13.5417 44 14.2333 44 15V33C44 33.8 43.7 34.5 43.1 35.1C42.5 35.7 41.8 36 41 36H7ZM7 33H41V15H34.5V24H31.5V15H25.5V24H22.5V15H16.5V24H13.5V15H7V33ZM13.5 24H16.5H13.5ZM22.5 24H25.5H22.5ZM31.5 24H34.5H31.5Z" fill="#1D1D1D"/>
            </svg>
            <p class="pokemon__height body3">${(pokemon.height)} m</p>
        </div>
        <p class="pokemon__detail-height-title caption">Height</p>
    `;

    const moveContainer = document.createElement('div');
    moveContainer.classList.add('pokemon__detail-move');
    moveContainer.classList.add('body3');
    moveContainer.innerHTML = `
        <div class="pokemon__detail-move-container">
            <p class="pokemon__move body3">${pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        </div>
        <p class="pokemon__detail-move-title caption">Moves</p>
    `;

    
    detailContainer.appendChild(weightContainer);
    detailContainer.appendChild(heightContainer);
    detailContainer.appendChild(moveContainer);
}


if (selectedPokemon) {
    renderPokemonDetails(selectedPokemon);
}


// Base Stats de cada Pokemon //

function renderPokemonStats(pokemon) {
    const statsContainer = document.querySelector('.pokemon__stats');

    const typeColors = {
        bug: 'var(--pk-color-bug)',
        dark: 'var(--pk-color-dark)',
        dragon: 'var(--pk-color-dragon)',
        electric: 'var(--pk-color-electric)',
        fairy: 'var(--pk-color-fairy)',
        fighting: 'var(--pk-color-fighting)',
        fire: 'var(--pk-color-fire)',
        flying: 'var(--pk-color-flying)',
        ghost: 'var(--pk-color-ghost)',
        normal: 'var(--pk-color-normal)',
        grass: 'var(--pk-color-grass)',
        ground: 'var(--pk-color-ground)',
        ice: 'var(--pk-color-ice)',
        poison: 'var(--pk-color-poison)',
        psychic: 'var(--pk-color-psychic)',
        rock: 'var(--pk-color-rock)',
        steel: 'var(--pk-color-steel)',
        water: 'var(--pk-color-water)',
    };

    const primaryType = pokemon.types[0].type.name; 
    const primaryColor = typeColors[primaryType]; 

    const statsNames = ['HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD'];

    pokemon.stats.forEach((stat, index) => {
        const statContainer = document.createElement('div');
        statContainer.classList.add('pokemon__stats-container');

        
        const statName = document.createElement('p');
        statName.classList.add('stats__title', 'subtitle3');
        statName.textContent = statsNames[index];
        statName.style.color = primaryColor; 
        
        const divider = document.createElement('div');
        divider.classList.add('divider');

        const statValue = document.createElement('p');
        statValue.classList.add('body3');
        statValue.textContent = stat.base_stat.toString().padStart(3, '0');
    

        const progressBar = document.createElement('progress');
        progressBar.classList.add('pokemon__stats-bar');
        progressBar.value = stat.base_stat;
        progressBar.max = 100;

       
        statContainer.appendChild(statName);
        statContainer.appendChild(divider);
        statContainer.appendChild(statValue);
        statContainer.appendChild(progressBar);

        statsContainer.appendChild(statContainer);
    });
}

if (selectedPokemon) {
    renderPokemonStats(selectedPokemon);
}



// Cambiar color de fondo de forma dinamica //

function setBackgroundColorByType(pokemon) {

    const detailContainer = document.querySelector('.pokemon__detail-container');

    const typeColors = {
        bug: 'var(--pk-color-bug)',
        dark: 'var(--pk-color-dark)',
        dragon: 'var(--pk-color-dragon)',
        electric: 'var(--pk-color-electric)',
        fairy: 'var(--pk-color-fairy)',
        fighting: 'var(--pk-color-fighting)',
        fire: 'var(--pk-color-fire)',
        flying: 'var(--pk-color-flying)',
        ghost: 'var(--pk-color-ghost)',
        normal: 'var(--pk-color-normal)',
        grass: 'var(--pk-color-grass)',
        ground: 'var(--pk-color-ground)',
        ice: 'var(--pk-color-ice)',
        poison: 'var(--pk-color-poison)',
        psychic: 'var(--pk-color-psychic)',
        rock: 'var(--pk-color-rock)',
        steel: 'var(--pk-color-steel)',
        water: 'var(--pk-color-water)',
    };

    const primaryType = pokemon.types[0].type.name; 

    detailContainer.style.backgroundColor = typeColors[primaryType];
}

if (selectedPokemon) {
    setBackgroundColorByType(selectedPokemon);
}

// Cambiar color de texto de forma dinamica //

function updateSectionColors(pokemon) {
    
    const typeColors = {
        bug: 'var(--pk-color-bug)',
        dark: 'var(--pk-color-dark)',
        dragon: 'var(--pk-color-dragon)',
        electric: 'var(--pk-color-electric)',
        fairy: 'var(--pk-color-fairy)',
        fighting: 'var(--pk-color-fighting)',
        fire: 'var(--pk-color-fire)',
        flying: 'var(--pk-color-flying)',
        ghost: 'var(--pk-color-ghost)',
        normal: 'var(--pk-color-normal)',
        grass: 'var(--pk-color-grass)',
        ground: 'var(--pk-color-ground)',
        ice: 'var(--pk-color-ice)',
        poison: 'var(--pk-color-poison)',
        psychic: 'var(--pk-color-psychic)',
        rock: 'var(--pk-color-rock)',
        steel: 'var(--pk-color-steel)',
        water: 'var(--pk-color-water)',
    };

    const primaryType = pokemon.types[0].type.name; 
    const primaryColor = typeColors[primaryType]; 

    
    const aboutTitle = document.querySelector('.type__information-title:nth-of-type(1)');
    const baseStatsTitle = document.querySelector('.type__information-title:nth-of-type(2)');

    
    if (aboutTitle) {
        aboutTitle.style.color = primaryColor;
    }
    if (baseStatsTitle) {
        baseStatsTitle.style.color = primaryColor;
    }
}


if (selectedPokemon) {
    updateSectionColors(selectedPokemon);
}
