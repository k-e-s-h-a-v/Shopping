import React, { useState } from "react";
// import initialFValues from "./pages/SignUp";

export function Userdata(initialFValues) {
  const [data, setData] = useState(initialFValues);
  let email;
  const write = (values) => {
    setData(values);
    email = values.email;
    console.log(email);
    // console.log(data["email"]);
    // return data;
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
