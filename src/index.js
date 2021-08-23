import React, { useState } from "react";
import { render } from "react-dom";
import { Input, message, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = (event) => {
    // String value = document.getElementById("dataSelection").value;
    const value = document.getElementById("dataSelection").value;
    message.info(`Selected Date: ${value ? value : "None"}`);
    setDate(value);
  };
  return (
    <div style={{ width: 500, margin: "100px auto" }}>
      <Input id="dataSelection" />
      <br></br>
      <Button type="primary" onClick={handleChange}>
        Click
      </Button>
      <div style={{ marginTop: 16 }}>Selected Date: {date ? date : "None"}</div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
