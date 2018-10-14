import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Photo Grid
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
