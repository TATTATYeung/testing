import React, { useState } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  useHistory,
  Redirect
} from "react-router-dom";
import {} from "react-router";
import { Input, message, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const App = () => {
  const [date, setDate] = useState(null);

  // function handleClick() {
  //   history.push("/search");
  // }
  //let history = useHistory();

  const handleClick = (event) => {
    // String value = document.getElementById("dataSelection").value;
    //this.props.history.push("/Search");
    //return  (<Redirect  to="/search" />);
    //generatePath("/search");
    // generatePath("/user/:id/:entity(posts|comments)", {
    //   id: 1,
    //   entity: "posts"
    // });
    // const value = document.getElementById("dataSelection").value;
    // message.info(`Selected Date: ${value ? value : "None"}`);
    // setDate(value);
    //SearchButton();
  };

  return (
    <div style={{ width: 500, margin: "100px auto" }}>
      <Input id="dataSelection" />
      <br></br>
      <Button type="primary" onClick={handleClick}>
        Click
      </Button>
      <div style={{ marginTop: 16 }}>
        Selected Date2: {date ? date : "None"}
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
