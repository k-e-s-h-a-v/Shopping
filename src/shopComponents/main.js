import React, { useState, useEffect } from "react";
import MyCard from "./Card";
import { Grid } from "@material-ui/core/";

function Main() {
  const objSlice = (obj, upto) => {
    let filteredKeys = Object.keys(obj).slice(0, upto);
    let newObj = {};
    filteredKeys.forEach((key) => {
      newObj[key] = obj[key];
    });
    return newObj;
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    // setCart([...cart, items.title])
    // console.log(title);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/4")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          // console.log(objSlice(result, 3));
          // console.log(typeof(result));
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
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid md={2}>
            <MyCard
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
