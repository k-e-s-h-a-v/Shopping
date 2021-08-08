import React, { useState, useEffect } from "react";
import MyCard from "./Card";
import { Grid } from "@material-ui/core/";

function Main() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    // setCart([...cart, items.title])
    // console.log(title);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.slice(0,10));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid >
            <MyCard
              id={item.id}
              img={item.thumbnailUrl}
              title={
                item.title.charAt(0).toUpperCase() + // works too -> item.title[0].toUpperCase()
                item.title.slice(1, item.title.search(" "))
              }
              addToCart={addToCart}
              // description=""
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Main;
