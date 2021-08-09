import React, { useState, useEffect} from "react";
import clsx from "clsx";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import ViewQuiltOutlinedIcon from "@material-ui/icons/ViewQuiltOutlined";
import SwapHorizOutlinedIcon from "@material-ui/icons/SwapHorizOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
  useTheme,
  ListItemText,
  ListItemIcon,
  Drawer,
  List,
  CssBaseline,
  Typography,
  Divider,
  ListItem,
  Tooltip,
} from "@material-ui/core";

import Main from "./main";
import Header from "./Header";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideDrawer() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);

  useEffect(() => {
    console.log(wish);
  }, [wish]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const delFromCart = (e) => {
    let name = e.target.value;
    setCart(cart((item) => item !== name));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Header cartCount={cart.length} wishCount={wish.length} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Offers"}>
            <ListItemIcon>
              <LocalOfferOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Offers"} />
          </ListItem>
          <ListItem button key={"Deals"}>
            <ListItemIcon>
              <StorefrontOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Deals"} />
          </ListItem>
          <ListItem button key={"Orders"}>
            <ListItemIcon>
              <ViewQuiltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Orders"} />
          </ListItem>
          <ListItem button key={"Transections"}>
            <ListItemIcon>
              <SwapHorizOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Transections"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          {["Account", "Setting"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <AccountCircleOutlinedIcon />
                ) : (
                  <SettingsOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Main cart={cart} setCart={setCart} wish={wish} setWish={setWish} />
      </main>
    </div>
  );
}
