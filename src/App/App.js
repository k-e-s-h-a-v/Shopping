import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SignUpForm from "../pages/SignUp";
import SignInForm from "../pages/SignIn";
import Container from "../pages/Container"; //important
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "../shopComponents/Shop";

function App() {
  //redux action
  const addUser = (user) => ({
    type: "UPDATE_USERS",
    payload: user,
  });

  const users = useSelector((state) => state.users);
  
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "intern@albanero.in",
    password: "dev",
  });

  useEffect(() => {
    dispatch(addUser(user));
  }, [user]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      {/* <Container /> */}
      {/* <Example/> */}
      {/* <SignInForm users={users} /> */}
      {/* <UserList /> */}
      {/* <SignInForm /> */}
      <Router>
        <Switch>
          <Route
            exact
            path="/signup"
            render={() => <SignUpForm setUser={setUser} />}
          />
          <Route
            exact
            path="/signin"
            component={() => <SignInForm />}
          />
          {/* <Route exact path="/signin" render={() => <SignInForm users={users}  />} /> */}
          <Route exact path="/shop" render={() => <Shop />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
