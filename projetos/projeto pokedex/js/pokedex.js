const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon_image");
const input = document.querySelector(".input__search");
const form = document.querySelector(".form");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
 let contadora ;


// conectar com api
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
    

        return data;

    }
    

};

//Reinderizar os dados da   Api
const renderPokemon = async (pokemon) => {
 
   
   
    pokemonName.innerHTML ="carregando...";
     pokemonNumber.innerHTML= "";
     pokemonImage.src="https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif"
   
    
    const data = await fetchPokemon(pokemon);

   

    if (data) {
           pokemonNumber.innerHTML = data.id;
    pokemonName.innerHTML = data.name;
    pokemonImage.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]


    input.value="";
    contadora = data.id;

     console.log(data);

    } else {
        pokemonName.textContent="Não encontrado";
        pokemonImage.src = "https://media.tenor.com/eDchk3srtycAAAAj/piffle-error.gif"
       
    }

 

}





form.addEventListener("submit", (event) =>{
    event.preventDefault()
    
    renderPokemon(input.value.toLowerCase());
   


});

btnPrev.addEventListener("click", ()=>{

   if (contadora > 1) {
    contadora -=1;
    renderPokemon(contadora);
    
   }

    


});

btnNext.addEventListener("click",()=>{

    contadora += 1;
    renderPokemon(contadora)
});

renderPokemon(1)
