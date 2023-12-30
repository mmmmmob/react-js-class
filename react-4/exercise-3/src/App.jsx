import React, { useEffect, useState } from "react";

// ? 1) there're three textboxes that have to be watching the value => 3 state constants should be in use ✅

// ? 2) the whole set of button is one set of state that define which type of data should be shown ✅
// !! always pass a function reference with () => {} to call a function at the time button has been clicked, if you directly use the function, it'll cause an infinite loop!!! [ref: https://chat.openai.com/share/4e195516-aa89-4f09-b0bb-401b3721678f]

// ? 4) set the new useEffect to change the value inside with if-else or switch conditionals when the state of button has been changed (return html element stateValue to below first div) ✅

function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [img, setImg] = useState();
  const [btn, setBtn] = useState();
  const [htmlResult, setHtmlResult] = useState();
  // !! the div of the result also have to use state to react their value and re-render according to the button pressed 🤔

  const btnClicked = (state) => {
    setBtn(state);
  };

  useEffect(() => {
    switch (btn) {
      case "fullname":
        setHtmlResult(<h1>{name}</h1>);
        break;
      case "age":
        setHtmlResult(<h1>{age}</h1>);
        break;
      case "picture":
        setHtmlResult(<img src={img} />);
        break;
      default:
        setHtmlResult(<p>Please select option above</p>);
    }
  }, [btn]);

  return (
    <div>
      <div>
        <input
          placeholder="Your full name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Your Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="Your image url"
          onChange={(e) => setImg(e.target.value)}
        />
        <button onClick={() => btnClicked("fullname")}>Fullname</button>
        <button onClick={() => btnClicked("age")}>Age</button>
        <button onClick={() => btnClicked("picture")}>Picture</button>
      </div>
      <div>{htmlResult}</div>
    </div>
  );
}

export default App;
