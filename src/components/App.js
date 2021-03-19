import React from "react";
import Restaurants from "./restaurants";

function App(props) {
  return (
    <div className="App">
      <Restaurants restaurants={props.restaurants} />
    </div>
  );
}

export default App;
