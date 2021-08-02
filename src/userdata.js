import React, { useState } from "react";
// import initialFValues from "./pages/SignUp";

export function Userdata(initialFValues) {
  // const [data, setData] = useState(initialFValues);
  let email, pass;
  const write = (values) => {
    // setData(values);
    email = values.email;
    pass = values.password;
    console.log(email);
    console.log(pass);
    // console.log(data["email"]);
    // return data;
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
  };

  const read = (loginValues) => {
    localStorage.getItem("email")
    console.log(loginValues.email);
    localStorage.getItem("pass")
    console.log(loginValues.pass);
    if (localStorage.getItem("email") == loginValues.email) {
      if (localStorage.getItem("pass") == loginValues.pass) {
        alert("Successfully logged in")
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
