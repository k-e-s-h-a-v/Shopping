import React, { useState, useEffect } from "react";
import SignUpForm from "../pages/SignUp";
import SignInForm from "../pages/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from '../shopComponents/Shop'
import ReactDOM from 'react-dom';
// import Example from "../pages/Cards";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setUsers([...users, user]);
  }, [user]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const write = (values) => {
    setUser({ email: values.email, password: values.password });
  };

  const read = (values, users) => {
    // console.log(values);
    let found = false;
    for (let item of users) {
      if (item.email === values.email) {
        if(item.password === values.password) {
          found = true;
          ReactDOM.render(<Shop />, document.getElementById("ac"));
          break;
        }else{
          console.log("please check your password");
        }
      }
    }
    if (!found) {
      console.log("please check your email");
    }
  };

  return (
    <div>
      {/* <Example/> */}
      <Router>
        <Switch>
          <Route path="/signup" render={() => <SignUpForm write={write} />} />
          <Route path="/signin" render={() => <SignInForm users={users} read={read} />} />
          <Route path="/shop" component={Shop } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
