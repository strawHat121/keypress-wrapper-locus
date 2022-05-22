import { allKeyboardShortcuts } from "../KeyboardShortcut";

import Box from "./Box";

function ListAllShortcuts({ keyboardShortcuts }) {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      {keyboardShortcuts.map((combo) => (
        <div style={{ padding: 10 }} key={combo.id}>
          {combo.value} - ( {combo.description} )
        </div>
      ))}
    </div>
  );
}

export default allKeyboardShortcuts(ListAllShortcuts);
