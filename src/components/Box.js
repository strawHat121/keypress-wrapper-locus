import "./Box.css";

function Box({ style = {}, children }) {
  return (
    <div style={style} className="box">
      {children}
    </div>
  );
}

export default Box;
