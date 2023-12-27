import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(30);
  // set default state value inside useState()
  return (
    <div id="app">
      <Header temp={temperature} />
      <Content tempContent={temperature} />
      <Footer tempStatus={temperature} tempAdd={setTemperature} />
    </div>
  );
}

function Header({ temp }) {
  return (
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {temp}</p>
    </header>
  );
}

function Content({ tempContent }) {
  return (
    <div>
      <Temperature tempTemperature={tempContent} />
    </div>
  );
}

function Temperature({ tempTemperature }) {
  return (
    <div id="temperature">
      <span>{tempTemperature} °C</span>
    </div>
  );
}

function Footer({ tempAdd, tempStatus }) {
  return (
    <footer>
      <button
        onClick={() => {
          tempAdd(tempStatus + 1);
        }}
      >
        Up
      </button>
      <button onClick={() => tempAdd((prevTemperature) => prevTemperature - 1)}>
        Down
      </button>
    </footer>
  );
}

export default App;
