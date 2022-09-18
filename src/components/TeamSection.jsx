import React from "react";
import TeamCard from "./TeamCard";

const TeamSection = ({team}) => {
    return (
        <div>
            <h1>My Team</h1>
            <div className="team-container">
                {team.map((p,i)=>{
                return <TeamCard pokemon={p} />
                })}
            </div>
        </div>
    )
}

export default TeamSection;