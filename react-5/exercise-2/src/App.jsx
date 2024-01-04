import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Form from "./Form";

const App = () => {
  const [members, setMembers] = useState([]);

  // started life cycle here
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      if (response.status === 200 && response.data) {
        setMembers([...response.data]);
      }
    };
    getData();
  }, [members]);

  // create here
  const createData = async (id, name, lastname, position) => {
    console.log(id);
    console.log(name);

    const create = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      {
        id: id,
        name: name,
        lastname: lastname,
        position: position,
      }
    );
    if (create.status === 200) {
      console.log("Success");
    }
  };

  // update here

  return (
    <div className="container">
      {<Form createData={createData} />}
      {/* <Form submitHandler={createData} updateHandler={updateData} /> */}
      <div className="card-container">
        {members.map((member) => (
          <Card
            key={member.id}
            id={member.id}
            name={member.name}
            lastname={member.lastname}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
