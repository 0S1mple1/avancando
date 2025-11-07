import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["João", "Maria", "José", "Ana"]);

  const [users, setUsers] = useState([
    { id: 1, name: "João", age: 25 },
    { id: 2, name: "Maria", age: 30 },
    { id: 3, name: "José", age: 28 },
    { id: 4, name: "Ana", age: 22 },
  ]);

  const deleteRandomUser = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      <button onClick={deleteRandomUser}>Delete random user</button>
    </div>
  );
};

export default ListRender;
