import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Form from "./Form";

const App = () => {
  // main stateVariable and stateMethod to be push and update sync with the API
  const [members, setMembers] = useState([]);

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
    // add [member] as an identifier to indicate react if it has been changed then GET new data
  }, [members]);

  const createData = async (name, lastname, position) => {
    // pass three args needed for POST inside (these args being sent from <Form/> when Submit was clicked)
    const create = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      {
        // send args in a form as stated on API docs
        name: name,
        lastname: lastname,
        position: position,
      }
    );
    if (create.status === 200) {
      // log success to indicate success status
      console.log("Success");
    }
  };

  const updateData = async (id, name, lastname, position) => {
    // pass four args needed for PUT inside (these args being sent from <Form/> when Update was clicked)
    const update = await axios.put(
      "https://jsd5-mock-backend.onrender.com/members",
      {
        // send args in a form as stated on API docs
        id: id,
        name: name,
        lastname: lastname,
        position: position,
      }
    );
    if (update.status === 200) {
      // log success to indicate success status
      console.log("Success");
    }
  };

  return (
    <div className="container">
      {/* send two fuction from app.jsx to <Form/> via props */}
      {<Form createData={createData} updateData={updateData} />}
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
