import React, { useState } from "react";
// import initialFValues from "./pages/SignUp";

export function Userdata(initialFValues) {
  const [data, setData] = useState(initialFValues);

  const write = (values) => {
    setData(values);
    console.log(data["email"]);
    // return data;
  }

//   function read = (data) {
//    console.log
//   }

    return {
    //   read,
      write,
    };
  }

