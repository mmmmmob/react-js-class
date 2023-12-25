import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <h1>Entered Data</h1>
      <TableDisplay />
    </div>
  );
}

const RunningForm = () => {
  return (
    <div>
      <form id="data-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" />
        <br />
        <br />

        <label for="weight">Weight:</label>
        <input type="number" id="weight" name="weight" />
        <br />
        <br />

        <label for="running">Current Running (Minutes):</label>
        <input type="number" id="running" name="running" />
        <br />
        <br />

        <button type="button" onClick="addData()">
          Add Data
        </button>
      </form>
    </div>
  );
};

const TableDisplay = () => {
  let runnerName = ["John Doe", "Jane Doe", "David Lynch"];
  let runnerAge = [35, 28, 17];
  let runnerWeight = ["75 kg", "46 kg", "98 kg"];
  let runningTime = ["4.02 min", "3.25 min", "7.59 min"];
  let isGoodRunning = ["Yes", "Yes", "No"];
  return (
    <div>
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
        <tbody>
          <tr>
            <td>{runnerName[0]}</td>
            <td>{runnerAge[0]}</td>
            <td>{runnerWeight[0]}</td>
            <td>{runningTime[0]}</td>
            <td>{isGoodRunning[0]}</td>
          </tr>
          <tr>
            <td>{runnerName[1]}</td>
            <td>{runnerAge[1]}</td>
            <td>{runnerWeight[1]}</td>
            <td>{runningTime[1]}</td>
            <td>{isGoodRunning[1]}</td>
          </tr>
          <tr>
            <td>{runnerName[2]}</td>
            <td>{runnerAge[2]}</td>
            <td>{runnerWeight[2]}</td>
            <td>{runningTime[2]}</td>
            <td>{isGoodRunning[2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
