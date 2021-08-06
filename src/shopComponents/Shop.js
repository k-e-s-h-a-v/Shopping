import React from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import Main from "./main";
import {CssBaseline} from "@material-ui/core";


function Shop() {
  return (
    <div>
      {/* <SideMenu /> */}
      <Header />
      <Main />
      <CssBaseline />
    </div>
  );
}

export default Shop;
