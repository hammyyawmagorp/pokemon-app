import axios from "axios";
import React, { useState } from "react";
import PokeCard from "./PokeCard";


const Pokedex = ( {addToTeam} ) =>{

    const[allPokemon, setAllPokemon] = useState([])
    const [search, setSearch] = useState("")

    const getPokemon = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000')
        .then((res) => {
            console.log(res.data.results);
            let newArr = res.data.results.map((p, i)=>{
                p.id = i+1
                return p
            })
            setAllPokemon(newArr);
        })
    }


    return (
        <div>
            <h2>Catch A Pokemon</h2>
            <button onClick={getPokemon}>Load Pokedex</button>
            <input placeholder="Search a Pokemon" 
            onChange={(e)=> setSearch(e.target.value)}/>
            <div className="pokedex-container">
                {allPokemon
                .filter((p)=>{
                    return p.name.includes(search);
                })
                .map((p, i) => {
                    return <PokeCard addToTeam={addToTeam} pokemon={p} index={i}/>
                })}
            </div>
        </div>
    )
}

export default Pokedex;
