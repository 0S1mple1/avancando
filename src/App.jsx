import { useState } from "react";

import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

/* eslint-disable no-unused-vars */

function App() {
  const name = "Joaquim";
  const [userName] = useState("Maria");
  return (
    <div className="App">
      <h1>Avancando em React</h1>
      {/* Imagem tem public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em src/assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name={userName} />
      {/* Destructuring */}
      <CarDetails brand="Ford" km={10000} color="Vermelho" />
    </div>
  );
}

export default App;
