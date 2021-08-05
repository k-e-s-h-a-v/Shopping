import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
} from "@material-ui/core";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
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
            <Tooltip title="Add to Wishlist">
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <PlaylistAddOutlinedIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Add to cart">
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ShoppingCartOutlinedIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout">
              <IconButton>
                <PowerSettingsNewIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
