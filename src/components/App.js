// import React from 'react'
// import '../styles/App.css';
// const App = () => {
  
//   return (
//     <div id="main">

//     </div>
//   )
// }


// export default App;
import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [state, setState] = useState(0);
  const handle = (prev) => {
    setState(1 - state);
    //console.log(state);
  };
  return (
    <div id="main">
      <h1 id="marco-polo">{state ? "Polo" : "Marco"}</h1>
      <button id="marco-polo-toggler" onClick={(prev) => handle(prev)}>
        {state ? "Marco" : "Polo"}
      </button>
    </div>
  );
};

export default App;
