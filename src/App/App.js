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
  // const check = (user, users) => {
  //   // console.log(values);
  //   let found = false;
  //   for (let item of users) {
  //     if (item.email === user.email) {
  //       if(item.password === user.password) {
  //         found = true;
  //         ReactDOM.render(<Shop />, document.getElementById("ac"));
  //         break;
  //       }else{
  //         console.log("please check your password");
  //       }
  //     }
  //   }
  //   if (!found) {
  //     console.log("please check your email");
  //   }
  // };

  return (
    <div>
      <Container />
      {/* <Example/> */}
      {/* <SignInForm users={users} /> */}
      {/* <Router>
        <Switch>
          <Route path="/signin" render={() => <SignInForm setUser={setUser} check={check} />} />
          <Route path="/signup" render={() => <SignUpForm setUser={setUser} />} />
          <Route path="/shop" render={() => <Shop />} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
