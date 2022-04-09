import React from "react";
import { Link } from "react-router-dom";
import {
    Grid,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
const linkStylle = {
    textDecoration: "none",
    color: "blue",
};
const listItems = [
    <span>
        Defaults:
        <ul>
            <li>
                Email: <code>keshav@demo.com</code>
            </li>
            <li>
                Password: <code>dev</code>
            </li>
        </ul>
        you can
        <Link to="/signin" style={linkStylle}>
            {" "}
            Sign In{" "}
        </Link>
        using the above credentials.
    </span>,
    <span>
        you can
        <Link to="/signup" style={linkStylle}>
            {" "}
            Sign Up{" "}
        </Link>
        and create an account.
    </span>,
    <span>
        you can directly go to my
        <Link to="/shop" style={linkStylle}>
            &nbsp;E-commerce website
        </Link>
        <br />
        What works:
        <ul>
            <li>Opening / closing of sidebar</li>
            <li>adding / removing items from cart</li>
            <li>Sign in and Sign up page</li>
        </ul>
    </span>,
];
const paperStyle = {
    padding: "30px 10px",
    width: "400px",
    margin: "0 auto",
    backgroundColor: "#ffffbe",
};
const Instructions = () => (
    <Grid style={{ marginTop: "15vh" }}>
        <Paper style={paperStyle}>
            <Typography variant="h5" align="center">
                Instructions
            </Typography>
            {listItems.map((item) => (
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <DoubleArrowIcon />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                </List>
            ))}
        </Paper>
    </Grid>
);

export default Instructions;
