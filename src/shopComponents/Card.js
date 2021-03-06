import React, { useEffect } from "react";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    CardMedia,
    CardActionArea,
    IconButton,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import ShareIcon from "@material-ui/icons/Share";

function MyCard({ id, img, title, cart, setCart, wish, setWish }) {
    return (
        <Card key={id} item md={3}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={title}
                    height="140"
                    image={img}
                    title={title}
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography> */}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton
                    color="secondary"
                    aria-label="add to wishlist"
                    onClick={() => {
                        console.log(title, "added to wishlist");
                        setWish([...wish, title]);
                    }}
                >
                    <PlaylistAddOutlinedIcon />
                </IconButton>

                <IconButton aria-label="share" color="green">
                    <ShareIcon />
                </IconButton>
                {/* <Button size="small" color="secondary">
          Add to wishlist
        </Button> */}
                <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={() => {
                        console.log(title, "added to cart");
                        setCart([...cart, title]);
                    }}
                >
                    <AddShoppingCartIcon />
                </IconButton>
                {/* <Button size="small" color="primary" onClick={()=>console.log(props.title)}>
          Add to cart
        </Button> */}
            </CardActions>
        </Card>
    );
}

export default MyCard;
