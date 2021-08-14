import React, { useState, useEffect } from "react";
import SignUpForm from "../pages/SignUp";
import SignInForm from "../pages/SignIn";
import Container from "../pages/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from '../shopComponents/Shop'
// import Data from '../shopComponents/source'
import ReactDOM from 'react-dom';
// import Example from "../pages/Cards";

function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    email: "intern@albanero.in",
    password: "dev",
  });

  useEffect(() => {
    setUsers([...users, user]);
  }, [user]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      {/* <Container /> */}
      {/* <Example/> */}
      {/* <SignInForm users={users} /> */}
      <Router>
        <Switch>
          <Route exact path="/signup" render={() => <SignUpForm setUser={setUser} />} />
          <Route exact path="/signin" component={() => <SignInForm users={users} />} />
          {/* <Route exact path="/signin" render={() => <SignInForm users={users}  />} /> */}
          <Route exact path="/shop" render={() => <Shop />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
