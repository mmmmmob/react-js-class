import React, { useState } from "react";

function App() {
  const [choices, setChoice] = useState();
  // always set state and state method

  return (
    <div>
      <button onClick={() => setChoice("Fullname")}>Fullname</button>
      <button onClick={() => setChoice("Age")}>Age</button>
      <button onClick={() => setChoice("Picture")}>Picture</button>
      <DisplayInfo choices={choices} />
    </div>
  );
}

function DisplayInfo(props) {
  let choices = props.choices;
  if (choices === "Fullname") {
    choices = <h2>John Doe</h2>;
  } else if (choices === "Age") {
    choices = <h2>30</h2>;
  } else if (choices === "Picture") {
    choices = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    choices = <p>Please select an option.</p>;
  }
  return <div>{choices}</div>;
  // return html elements from {choices} after passed conditional statement (if want to directly use as div you have to use a short-circuit writing)
}

export default App;
