import React from "react";
import "./App.css";
import Text from "./Components/Text";

function App() {
  return (
    <div className="App">
      <Text as="h1">Hello</Text>
      <Text as="a" href="https://www.google.com">
        Google!
      </Text>
    </div>
  );
}

export default App;
