import React, { useState, useEffect } from "react";
import MyCard from "./Card";
import { Grid } from "@material-ui/core/";

function Main({ cart, setCart, wish, setWish }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const random = Math.floor(Math.random() * 4500);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.slice(random, random + 20));
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
            <Grid
                item
                container
                spacing={2}
                // style={{padding:20}}
            >
                {items.map((item) => (
                    <Grid item>
                        <MyCard
                            id={item.id}
                            img={item.thumbnailUrl}
                            title={
                                item.title.charAt(0).toUpperCase() + // works too -> item.title[0].toUpperCase()
                                item.title.slice(1, item.title.search(" "))
                            }
                            cart={cart}
                            setCart={setCart}
                            wish={wish}
                            setWish={setWish}
                        />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default Main;
