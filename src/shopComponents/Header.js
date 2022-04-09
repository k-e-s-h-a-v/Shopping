import React from "react";
import {
    Grid,
    InputBase,
    IconButton,
    Badge,
    makeStyles,
    Typography,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from "@material-ui/core";

import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";

import DeleteIcon from "@material-ui/icons/Delete";

import FormatListNumberedOutlinedIcon from "@material-ui/icons/FormatListNumberedOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import TemporaryDrawer from "./Cart-Items";

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    root: {
        backgroundColor: "#000",
    },
    searchInput: {
        opacity: "0.6",
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: "0.8rem",
        backgroundColor: "#a7f7ff",
        "&:hover": {
            backgroundColor: "#fff",
        },
        "& .MuiSvgIcon-root": {
            marginRight: theme.spacing(1),
        },
    },
}));

export default function Header({ cart, setCart, wish, setWish }) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div>
                    <Typography variant="h5" align="center">
                        Cart items
                    </Typography>
                    <Typography
                        variant="caption"
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        press Esc to close cart
                    </Typography>
                    {/* <IconButton onClick={()=> setState({right: false})}><CloseIcon /></IconButton> */}
                </div>
                <Divider />
                {cart.map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                        <ListItemIcon>
                            <DeleteIcon
                                onClick={() =>
                                    setCart(
                                        cart.filter((item) => item !== text)
                                    )
                                }
                            />
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Grid container alignItems="center">
            <Grid item>
                <InputBase
                    placeholder="Search Products"
                    className={classes.searchInput}
                    startAdornment={<SearchIcon fontSize="medium" />}
                />
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
                <Tooltip title="Wishlist">
                    <IconButton>
                        <Badge badgeContent={wish.length} color="primary">
                            <FormatListNumberedOutlinedIcon
                                style={{ color: "#fff" }}
                                fontSize="medium"
                            />
                        </Badge>
                    </IconButton>
                </Tooltip>

                <IconButton onClick={toggleDrawer("right", true)}>
                    <Badge badgeContent={cart.length} color="secondary">
                        <Tooltip title="Cart">
                            <ShoppingCartOutlinedIcon
                                style={{ color: "#fff" }}
                                fontSize="medium"
                            />
                        </Tooltip>
                        <Drawer
                            anchor="right"
                            open={state["right"]}
                            onClose={toggleDrawer("right", false)}
                        >
                            {list("right")}
                        </Drawer>
                    </Badge>
                </IconButton>

                <Tooltip title="Logout">
                    <IconButton>
                        <PowerSettingsNewIcon
                            style={{ color: "#fff" }}
                            fontSize="medium"
                        />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
    );
}
