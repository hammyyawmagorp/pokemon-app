import React from "react";

const PokeCard = ( {pokemon, index, addToTeam} ) =>{
    return (
        <div className="pokecard">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" />
            <h4>{pokemon.name}</h4>
            <button onClick={()=> addToTeam(pokemon.url)}>+</button>
        </div>
    )
}

export default PokeCard;