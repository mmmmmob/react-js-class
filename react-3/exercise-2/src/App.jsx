import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState();
  const [bio, setBio] = useState();

  return (
    <>
      <img src="https://placekitten.com/150/150" alt="avatar" />
      <input
        type="text"
        placeholder="name here"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        id="bio"
        type="text"
        placeholder="bio here"
        onChange={(e) => {
          setBio(e.target.value);
        }}
      />
      <Info name={name} bio={bio} />
    </>
  );
}

function Info({ name, bio }) {
  // ?? destructuring of props object should be in the same brackets
  // const name = props.name;
  // const bio = props.bio;
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
      <a href="google.com" target="_blank">
        X
      </a>
      <a href="facebook.com" target="_blank">
        Facebook
      </a>
    </div>
  );
}

export default App;
