import React from "react";
import { useState } from "react";

export const KeyboardShortcutContext = React.createContext({
  combos: [],
  setCombos: () => {},
});

export const KeyboardProvider = ({ children }) => {
  const [combos, setCombos] = useState([]);
  return (
    <KeyboardShortcutContext.Provider value={{ combos, setCombos }}>
      {children}
    </KeyboardShortcutContext.Provider>
  );
};
