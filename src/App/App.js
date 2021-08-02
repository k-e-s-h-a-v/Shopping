import React from "react";
// import "./App.css";
import SignUpForm from "../pages/SignUp";
import SignInForm from "../pages/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>

    <Router>
      <Switch>
        <Route path="/signup" component={SignUpForm} />
        <Route path="/signin" component={SignInForm} />
      </Switch>
    </Router>
    </div>
  );
}
export default App;
