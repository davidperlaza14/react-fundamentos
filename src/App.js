import React, {useState, useEffect}  from "react";
// import { useEffect } from "react";
// import { useState } from "react/cjs/react.development";
// ESTILOS
import "./App.css";

// Componentes
import SingleCharacter from "./components/SingleCharacter";


const App = () => {
  // ESTADOS DEL COMPONENTE
  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  // CONSULTAMOS API
  const handleFetchAPI = async () => {

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    // const result = await response.json();

    const {results, info} = await response.json();
    console.log(results);
    console.log(info);
    setCharacters(results);
    setCharacters([...characters, ...results]);
// GUARDAMOS RESULTS EN ESTADO
    // setCharacters(results);
  }  catch (error) {
    console.log(error)
    
  }


  };

  const handleNewPage = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    handleFetchAPI();
  }, [page]);


  return ( 
  <div className = "App" >
    <section className="characters-container" >

    {characters.map(character => (
     <SingleCharacter name={character.name} avatar={character.image} key={character.id} />
    ))} 
    <button className="more-btn" onClick={handleNewPage}>Ver mas.</button>
    </section>
    
    </div>
  );
}

export default App;