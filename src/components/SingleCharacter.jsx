import React from "react";
// estilos importados
import "../styles/Character.css"

const SingleCharacter =props => {
    const { name, avatar} =props;
    return (
 <div className="single-card">
    <img src={avatar} alt={name} />
     <h1>{name}</h1>
 </div>
);

}

export default SingleCharacter;