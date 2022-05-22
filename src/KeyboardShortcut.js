import React, { useContext, useEffect, Fragment } from "react";
import { KeyboardShortcutContext } from "./context/context";
import { Listener } from "keypress.js";

const listener = new Listener();

export const allKeyboardShortcuts =
  (Component) =>
  ({ ...props }) => {
    const { combos } = useContext(KeyboardShortcutContext);
    return <Component keyboardShortcuts={combos} {...props} />;
  };

export const KeyboardShortcut = (props) => {
  const { setCombos } = useContext(KeyboardShortcutContext);
  useEffect(() => {
    const comboId = listener.simple_combo(props.combo, props.callback);
    setCombos((combos) => [
      ...combos,
      {
        id: `${Math.random()}`,
        value: props.combo,
        description: props.description,
        comboId,
      },
    ]);
    return () => {
      listener.unregister_combo(comboId);
      setCombos((combos) =>
        combos.filter((diffCombo) => diffCombo.comboId !== comboId)
      );
    };
  }, []);
  return <Fragment />;
};
