import { useState } from "react";

const Form = ({ submitHandler }) => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="unique identifier"
        value={id}
        onChange={(ev) => setId(ev.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <input
        type="text"
        placeholder="lastname"
        value={lastname}
        onChange={(ev) => setLastname(ev.target.value)}
      />
      <input
        type="text"
        placeholder="position"
        value={position}
        onChange={(ev) => setPosition(ev.target.value)}
      />
      <button onClick={() => submitHandler(id, name, lastname, position)}>
        Submit
      </button>
    </div>
  );
};

export default Form;
