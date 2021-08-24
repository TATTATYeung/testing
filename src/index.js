<<<<<<< CodeSandbox
import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  useHistory
} from "react-router-dom";
//import { useHistory } from "react-router";
//useHistory,
//Redirect

const Index = () => {
  let history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    if (true) {
      //return <Redirect to="/search" />;
      //history.push("/search");
      this.props.history.push("/search");
    }
  };

  return (
    <Router>
      <Route>
        <div>
          <form>
            <input placeholder="email" type="email" />
            <input placeholder="password" type="password" />
            <button onClick={onSubmit}>Login</button>
          </form>
=======
import React, { useState } from "react";
import { render } from "react-dom";
import { useHistory } from "react-router-dom";
import { Input, message, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const App = () => {
  const [date, setDate] = useState(null);
  let history = useHistory();
  const handleChange = (event) => {
    // String value = document.getElementById("dataSelection").value;
    const value = document.getElementById("dataSelection").value;
    message.info(`Selected Date: ${value ? value : "None"}`);
    setDate(value);

    this.history.push("/search");
  };
  return (
    <div style={{ width: 500, margin: "100px auto" }}>
      <Input id="dataSelection" />
      <br></br>
      <Button type="primary" onClick={handleChange} history={this.history}>
        Click
      </Button>
      <div style={{ marginTop: 16 }}>
        Selected Date2: {date ? date : "None"}
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));

>>>>>>> GitHub
        </div>
      </Route>
    </Router>
  );
};

render(<Index />, document.getElementById("root"));

export default withRouter(Index);
