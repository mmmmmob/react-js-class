import { useState } from "react";

// props statement recieve function from App.jsx to be use inside a component
const Form = ({ createData, updateData, deleteData }) => {
  // create stateVariable and stateMethod to store onChange value for onClick passed function to App.jsx
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

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
      {/* onClick send three args back to createData on App.jsx */}
      <button onClick={() => createData(name, lastname, position)}>
        Submit
      </button>
      {/* onClick send four args back to updateData on App.jsx */}
      <button onClick={() => updateData(id, name, lastname, position)}>
        Update
      </button>
      {/* onClick send one arg back to deleteData on App.jsx */}
      <button onClick={() => deleteData(id)}>Delete</button>
    </div>
  );
};

export default Form;
