import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString("en-GB");
  let [Time, setTime] = useState(time);

  function refresh() {
    let newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }
  setInterval(refresh, 1000);

  return (
    <div className="container">
      <h1>{Time}</h1>
    </div>
  );
}

export default App;
