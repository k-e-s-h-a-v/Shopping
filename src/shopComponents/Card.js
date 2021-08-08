import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";

function MyCard(props) {
  return (
    <Card key={props.id} item md={3}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={props.img}
          title={props.title}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Add to wishlist
        </Button>
        <Button size="small" color="primary" onClick={()=>console.log(props.title)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default MyCard;
