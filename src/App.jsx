import { useState } from "react";

import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  //const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ford", km: 10000, color: "Vermelho", newCar: false },
    { id: 2, brand: "Chevrolet", km: 50000, color: "Prata", newCar: false },
    { id: 3, brand: "Fiat", km: 0, color: "Branco", newCar: true },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [messege, setMessege] = useState("");
  const handleMessage = (msg) => {
    setMessege(msg);
  };

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
      <CarDetails brand="Ford" km={10000} color="Vermelho" newCar={false} />
      {/* Reaproveitando */}
      <CarDetails brand="Chevrolet" km={50000} color="Prata" newCar={false} />
      <CarDetails brand="Fiat" km={0} color="Branco" newCar={true} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/* Fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container MyValue="testing">
        <p>Este é o conteúdo do container</p>
      </Container>
      <Container MyValue="testing 2">
        <h5>Outro conteúdo do container</h5>
      </Container>
      {/* Executar função */}
      <ExecuteFunction MyFunction={showMessage} />
      {/* Lifting state */}
      <Message msg={messege} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
