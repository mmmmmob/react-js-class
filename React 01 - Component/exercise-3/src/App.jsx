// eslint-disable-next-line no-unused-vars
import React from "react";
import "../src/assets/style.css";
import "./App.css";

function App() {
  return (
    <div id="app">
      <RegistrationForm />
      <DisplayMember />
    </div>
  );
}

const RegistrationForm = () => {
  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form id="registrationForm">
        <FormGroup />
      </form>
    </div>
  );
};

const FormGroup = () => {
  return (
    <div className="form-group">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <button type="submit">Register</button>
    </div>
  );
};

const DisplayMember = () => {
  let johnDoe = "John Doe (john@example.com)";
  let janeSmith = "Jane Smith (jane@example.com)";
  // or set an array for our data
  return (
    <div className="members">
      <h2>Registered Members</h2>
      <div className="member">{johnDoe}</div>
      <div className="member">{janeSmith}</div>
    </div>
  );
};

export default App;
