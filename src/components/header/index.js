import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
  <AppBar>
    <Toolbar>
      <Typography variant="h5" color="inherit">
        Photo Grid
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
