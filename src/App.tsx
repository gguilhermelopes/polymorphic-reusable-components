import React from "react";
import "./App.css";
import Text from "./Components/Text";

const Emphasis = ({ children }: { children: React.ReactNode }) => {
  return (
    <em style={{ background: "yellow", color: "black", fontSize: "4rem" }}>
      {children}
    </em>
  );
};

function App() {
  return (
    <div className="App">
      <Text as="h1">Hello</Text>
      <Text as="a" href="https://www.google.com">
        Google!
      </Text>{" "}
      <br />
      <Text as={Emphasis}>This is important!</Text>
    </div>
  );
}

export default App;
