import React from "react";

const TeamCard = ({pokemon}) =>{
    return (
        <div>
            <img src={pokemon.sprites.other
                ["official-artwork"].front_default} alt="" />
            <h4>{pokemon.name}</h4>
            {pokemon.types.map((t, i)=> {
            return <h5 className={t.type.name}>{t.type.name}</h5>
            })}
            {pokemon.stats.map((s, i)=> {
                return <h5>{s.stat.name}: {s.base_stat}</h5>
            })}

        </div>
    )
}

export default TeamCard;