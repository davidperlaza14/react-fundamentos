import React, {useState}  from "react";

// Componentes
import Header from "./components/Header";
import Section from  "./components/Section"

const App = () => {
  const [text, setText]= useState("Sin DarkMode");
  const [pageInfo, setPageInfo] = useState([
    
    {

    title:"Titulo 1",
    section: "Texto de prueba 1"
  },
  {
    title:"Titulo 2",
    section: "Texto de prueba 2"
  },
  {
    title:"Titulo 3",
    section: "Texto de prueba 3"
  }
])

  return (
    <div className="App">
    <Header titulo="logo 1" numero="1" classCss="header" setText={setText}/>
    <h2 className="header__title">{text}</h2>
    {
      pageInfo.map((section, index) =>(
  <Section title={section.title}
 section={section.section}
 key={index} />
      ))
    }
    

    </div>
  );
}

export default App;

