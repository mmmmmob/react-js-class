import React, { useEffect, useState } from "react";

// 1: create initial dataset as an array with objects inside, this will be use first when component first render at [ln:30]
const initialData = [
  {
    name: "Jane Bates",
    org: "Leona Inc.",
    position: "Software Engineer",
  },
  {
    name: "Mabelle Jennings",
    org: "Antonio Inc.",
    position: "Marketing Executive",
  },
  {
    name: "Clyde Estrada",
    org: "Harry Inc.",
    position: "CEO",
  },
];

function App() {
  // 2: create a state for value that will be changing constantly includes: name, org, and position. the member state is set as empty array to push new object into it with [ln:30] and [ln:35]
  const [member, setMember] = useState([]);
  const [name, setName] = useState();
  const [org, setOrg] = useState();
  const [position, setPosition] = useState();

  // 3: use useEffect() to set a state to member stateValue when it first rendered
  useEffect(() => {
    setMember(initialData);
  }, []);

  // 4: prepare a function to push data we got from onChange elements onto the array which has initialData inside when onClick has been called
  const handleNewData = () => {
    const newMember = {
      name: name,
      org: org,
      position: position,
    };
    // use [...member] to reference the previous dataset and push new one after
    setMember([...member, newMember]);
  };

  return (
    <div className="App">
      {" "}
      <h1>Table Example</h1>
      <div>
        <input
          type="text"
          placeholder="Type new name here"
          style={{ margin: "4px" }}
          // onChange store value to name:stateVariable
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type new organization here"
          style={{ margin: "4px" }}
          // onChange store value to org:stateVariable
          onChange={(e) => setOrg(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type new position here"
          style={{ margin: "4px" }}
          // onChange store value to position:stateVariable
          onChange={(e) => setPosition(e.target.value)}
        />
        {/* trigger the handleNewDate function [ln:35] when clicked */}
        <button style={{ margin: "4px" }} onClick={handleNewData}>
          Save
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {/* return new row of data by mapping a member array as a tr element */}
          {member.map((member, index) => {
            return (
              <tr key={`${member}-${index}`}>
                <td>{member.name}</td>
                <td>{member.org}</td>
                <td>{member.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
