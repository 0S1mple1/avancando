import React from "react";

const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <>
      <h2>Detalhes do Carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Este carro é novo!</p>}
    </>
  );
};

export default CarDetails;
