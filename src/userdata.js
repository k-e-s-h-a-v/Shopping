import React, { useState } from "react";
// import initialFValues from "./pages/SignUp";

export function Userdata(initialFValues) {
  const [data, setData] = useState(initialFValues);

  const write = (values) => {
    setData(values);
    console.log(data);
    // console.log(data["email"]);
    // return data;
  };

  const read = (loginValues) => {

    console.log(loginValues);
    console.log(data);
  };

  return {
    read,
    write,
  };
}
