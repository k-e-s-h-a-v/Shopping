import React, { useState } from "react";
import Greet from './components/Functional-Component'
import ReactDOM from 'react-dom';

export function Userdata(initialFValues) {
  let email, pass;
  const write = (values) => {
    email = values.email;
    pass = values.password;
    console.log(values);
    // console.log(email);
    // console.log(pass);
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
  };

  const read = (loginValues) => {
    if (localStorage.getItem("email") === loginValues.email) {
      if (localStorage.getItem("pass") === loginValues.password) {
        ReactDOM.render(<Greet />, document.getElementById("ac"));
      }else{
        alert("please check your password")
      }
    }else{
      alert("wrong email")
    }
  };

  return {
    read,
    write,
  };
}
