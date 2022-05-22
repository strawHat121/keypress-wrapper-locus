import React, { useState } from "react";
import { KeyboardShortcut } from "../KeyboardShortcut";

import Box from "./Box";

const ComponentB = () => {
  const [color, setColor] = useState(
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );
  const toggleColor = () => {
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  return (
    <>
      <KeyboardShortcut
        combo="shift alt s"
        callback={toggleColor}
        description="Toggles the component B's color"
      />
      <Box style={{ backgroundColor: color }}> </Box>
    </>
  );
};

export default ComponentB;
