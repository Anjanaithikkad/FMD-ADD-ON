import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                      <MenuIcon />
                  </IconButton>
                  <h3>myapp</h3> &nbsp;&nbsp;
                  <Link to="/Login">
                      <Button variant='contained'>Login</Button>
                  </Link>&nbsp;
                  <Link to="/signup">
                      <Button variant='contained'>SignUp</Button>
                  </Link> &nbsp;
                  <Link to="/tab">
                      <Button variant='contained'>Table</Button>
                  </Link> &nbsp;
                  <Link to="/state">
                      <Button variant='contained'>State</Button>
                  </Link> &nbsp;
                  <Link to="/count">
                      <Button variant='contained'>Count</Button>
                  </Link> &nbsp;
                  <Link to="/text">
                      <Button variant='contained'>Texts</Button>
                  </Link> &nbsp;
                  <Link to="/card">
                      <Button variant='contained'>Cards</Button>
                  </Link> &nbsp;
              </Toolbar>
          </AppBar>
          <br /><br /> <br />
    </div>
  )
}

export default Navbar