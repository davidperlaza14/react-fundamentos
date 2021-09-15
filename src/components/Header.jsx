import React, { useState }  from "react";

    // Estilos
import "../styles/Header.css" 

const Header = ({titulo,numero, classCss, setText }) => {
// Estado del componente
const [darkMode, setDarkMode] = useState(false);



// FUNCIONES 
const handleDarkMode = () => {
    // setDarkMode(darkMode ? false : true);
    setDarkMode(!darkMode);
    setText(!darkMode ? "Sin DarkMode": "Con DarkMode")

    // alert(darkMode);
}
    return(
        <>
        <header className={!darkMode ? "normal-header" : "dark-header"}>
            <a href="logo">{titulo}</a>
            <ul>
                <li>
                    <a href="li">Item {numero}</a>
                </li>
                <li>
                    <a href="li">Item {numero}</a>
                </li>
                <li>
                    <a href="li">Item {numero}</a>
                </li>
                <li>
                    <a href="li">Item {numero}</a>
                </li>
                
                <li>
                    <button onClick={handleDarkMode}> White Mode</button>
                </li>
            </ul>
        </header>
        
        </>
    )
};

export default Header;