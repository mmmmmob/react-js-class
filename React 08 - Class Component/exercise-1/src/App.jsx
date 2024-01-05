import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <RegistrationForm />
      <DisplayMember />
    </div>
  );
}

// Legacy React class : Component (translated from ./App-function.jsx)

class RegistrationForm extends React.Component {
  // put everything we want to display (including variables) under render()
  render() {
    return (
      <div>
        <h1>Registration Form</h1>
        <form id="registrationForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

// another component that use legacy class component method with render()
class DisplayMember extends React.Component {
  render() {
    // also put variables inside render()
    const people = [
      "John Doe (john@example.com)",
      "Jane Smith (jane@example.com)",
    ];

    return (
      <div class="members">
        <h2>Registered Members</h2>
        <div class="member">{people[0]}</div>
        <div class="member">{people[1]}</div>
      </div>
    );
  }
}

export default App;
