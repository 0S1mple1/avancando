import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["João", "Maria", "José", "Ana"]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
