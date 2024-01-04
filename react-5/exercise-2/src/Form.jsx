import { useState } from "react";

const Form = ({ createData, updateData }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = () => {
    // Check if id is present before calling createData
    if (id) {
      createData(id, name, lastname, position);
    } else {
      // Handle the case when id is not present, or show an error message
      console.error("ID is required for data submission.");
    }
  };

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
      <button onClick={() => handleSubmit(id, name, lastname, position)}>
        Submit
      </button>
      <button onClick={() => updateData(id, name, lastname, position)}>
        Update
      </button>
    </div>
  );
};

export default Form;
