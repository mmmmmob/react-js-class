import React, { useEffect, useState } from "react";

const App = () => {
  const [rate, setRate] = useState(0);
  const [exchange, setExchange] = useState(0);

  const syncRate = () => {
    setRate(44);
  };

  const handleExchangeChange = (event) => {
    const newExchange = event.target.value;
    setExchange(newExchange);
  };

  // useEffect will automatically run the function (from 1st argument whenever the state(s) inside array from 2nd argument has been re-rendered if it's an empty array [] it will constantly update when every state has been re-rendered)
  useEffect(syncRate, []);

  return (
    <div>
      <h1>Current Rate: {rate}</h1>
      <input type="number" value={exchange} onChange={handleExchangeChange} />
      <h2>Calculated Exchange: {exchange * rate}</h2>
    </div>
  );
};

export default App;
