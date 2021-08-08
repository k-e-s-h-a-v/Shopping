import React from "react";
import {
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
} from "@material-ui/core";

import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
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

export default function Header() {
  const classes = useStyles();

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
            <Badge badgeContent={4} color="primary">
              <FormatListNumberedOutlinedIcon fontSize="medium" />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Cart">
          <IconButton>
            <Badge badgeContent={3} color="secondary">
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
  );
}
