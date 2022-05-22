import React from "react";

import { KeyboardProvider } from "./context/context";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import AllShortcuts from "./components/AllShortcuts";

const App = () => {
  return (
    <KeyboardProvider>
      <div className="app">
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <AllShortcuts />
      </div>
    </KeyboardProvider>
  );
};

export default App;
