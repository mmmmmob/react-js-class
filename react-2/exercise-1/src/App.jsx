import React from "react";
import "./App.css";

function App() {
  const runnerMembers = [
    {
      name: "Cornelia Klein",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "Aiden Dunn",
      age: 55,
      weight: 64,
      running: 70,
      status: "Extreme",
    },
    {
      name: "Rena Delgado",
      age: 2,
      weight: 8,
      running: 12,
      status: "Good",
    },
  ];

  const runnerMembersTwo = [
    {
      name: "Minnie Castillo",
      age: 11,
      weight: 48,
      running: 56,
      status: "Balance",
    },
    {
      name: "MeaCarlos Yates",
      age: 24,
      weight: 60,
      running: 44,
      status: "Extreme",
    },
    {
      name: "Emma Hines",
      age: 32,
      weight: 21,
      running: 33,
      status: "Moderate",
    },
  ];

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay showData={runnerMembers} showExtraData={runnerMembersTwo} />
    </div>
  );
}

const RunningForm = () => {
  return (
    <form id="data-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      <br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" />
      <br />
      <br />

      <label htmlFor="weight">Weight:</label>
      <input type="number" id="weight" name="weight" />
      <br />
      <br />

      <label htmlFor="running">Current Running (Minutes):</label>
      <input type="number" id="running" name="running" />
      <br />
      <br />

      <button type="button">Add Data</button>
    </form>
  );
};

const TableDisplay = (props) => {
  const detailsData = props.showData;
  const detailsMoreData = props.showExtraData;
  return (
    <div>
      <h1>Entered Data</h1>
      <table id="data-table" border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Current Running (Minutes)</th>
            <th>Good Running</th>
          </tr>
        </thead>
        <TableBody rowData={detailsData} rowAnotherData={detailsMoreData} />
      </table>
    </div>
  );
};

const TableBody = (props) => {
  const rowData = props.rowData;
  const rowAnotherData = props.rowAnotherData;
  return (
    <tbody>
      {rowData.map((runMember) => {
        return (
          <tr key={runMember.name}>
            <td>{runMember.name}</td>
            <td>{runMember.age}</td>
            <td>{runMember.weight}</td>
            <td>{runMember.running}</td>
            <td>{runMember.status}</td>
          </tr>
        );
      })}
      {rowAnotherData.map((runMember) => {
        return (
          <tr key={runMember.name}>
            <td>{runMember.name}</td>
            <td>{runMember.age}</td>
            <td>{runMember.weight}</td>
            <td>{runMember.running}</td>
            <td>{runMember.status}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default App;
