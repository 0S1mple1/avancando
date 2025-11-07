import "./App.css";

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";
function App() {
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
    </div>
  );
}

export default App;
