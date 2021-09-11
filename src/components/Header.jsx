import React  from "react"
// import App from "../App";

const Header = ({titulo,item}) => {


    // const {  titulo, item} = props;

    return(
        <header>
            <a href="logo">{titulo}</a>
            <ul>
                <li><a href="li">Item {item}</a></li>
                <li><a href="li">Item {item}</a></li>
                <li><a href="li">Item {item}</a></li>
                
            </ul>
        </header>
    )
};

export default Header;