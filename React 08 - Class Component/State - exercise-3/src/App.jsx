import React from "react";

// Legacy React class : State (translated from ./App-function.jsx)

class App extends React.Component {
  // add constructor for class props like before but add this.state as an object with stateValue inside
  // !! 1 state per class only
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  // outside constructor you can also setup function expression for setState function to be using inside return() with this.[functionname]
  SetColor = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <>
        {/* use stateValue with this.state.[object-key] to access a value */}
        {this.state.color === "yellow" && (
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "12px",
              background: "yellow",
            }}
          >
            YELLOW
          </div>
        )}

        {this.state.color === "blue" && (
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "12px",
              background: "blue",
            }}
          >
            BLUE
          </div>
        )}
        {/* call setState function for a button (use arrow function like normal onClick) */}
        <button onClick={() => this.SetColor("yellow")}>Show Yellow</button>
        <button onClick={() => this.SetColor("blue")}>Show Blue</button>
      </>
    );
  }
}

export default App;
