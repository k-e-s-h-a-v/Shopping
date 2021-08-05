import React, { useEffect, useState } from "react";
import Card from '@material-ui/core/Card';
import { CssBaseline } from "@material-ui/core";

function usePosts() {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        setPerson(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return person;
}

export default function Example() {
  const someone = usePosts();
  return (
    <div>
      {/* <h1>Cool app</h1>
      {someone.length > 0 ? (
        someone.map((item) => <p>{item}</p>)
      ) : (
        <h1>Loading a random person...</h1>
      )} */}
      <Card md={4}>
      This is a card
      </Card>
      <CssBaseline />
    </div>
  );
}
