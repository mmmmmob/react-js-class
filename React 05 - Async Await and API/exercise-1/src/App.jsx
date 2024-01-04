import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
  const [members, setMembers] = useState([]);
  const [singleMember, setSingleMember] = useState({});

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

  const getDataById = async (id) => {
    const response = await axios.get(
      `https://jsd5-mock-backend.onrender.com/members/${id}`
    );

    if (response.status === 200 && response.data) {
      const { data } = response;
      setSingleMember({ ...data });
    }
  };

  return (
    <div className="container">
      <h1>All Data</h1>
      <div>
        {members.map((member) => (
          <Card
            age={member.age}
            name={member.name}
            id={member.id}
            status={member.status}
            weight={member.weight}
          />
        ))}
      </div>
      <h1>Single Data by ID</h1>
      <div>
        <select onChange={(ev) => getDataById(ev.target.value)}>
          {members.map((member) => (
            <option value={member.id}>{member.name}</option>
          ))}
        </select>
        <Card
          id={singleMember.id}
          name={singleMember.name}
          age={singleMember.age}
          weight={singleMember.weight}
          status={singleMember.status}
        />
      </div>
    </div>
  );
};

export default App;
