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
    console.log(loginValues);
    console.log(email);
  };

  return {
    read,
    write,
  };
}
