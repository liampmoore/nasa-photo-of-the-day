import React from "react";
import Data from "./data";
import Header from "./components/header/header"

function App() {
  Data({date:"&date=2012-03-14"});
  return (
      <>
        <Header/>

      </>
  );
}

export default App;
