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
  }, []);

  // update here

  // create here

  return (
    <div className="container">
      {/* <Form submitHandler={updateData} /> */}
      <div className="card-container">
        {members.map((member) => (
          <Card
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
