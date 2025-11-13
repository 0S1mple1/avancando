import React from "react";

const ChangeMessageState = ({ handleMessage }) => {
  const messages = [
    "Olá, tudo bem?",
    "Hoje é um ótimo dia!",
    "React é muito legal!",
    "Vamos aprender mais sobre componentes!",
  ];
  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>Mensagem 1</button>
      <button onClick={() => handleMessage(messages[1])}>Mensagem 2</button>
      <button onClick={() => handleMessage(messages[2])}>Mensagem 3</button>
      <button onClick={() => handleMessage(messages[3])}>Mensagem 4</button>
    </div>
  );
};

export default ChangeMessageState;
