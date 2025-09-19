import React from 'react'
import { AppBar,Toolbar,Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <h1>Employee</h1> &nbsp;&nbsp;
          <Link to="/add">
            <Button variant='contained'>Add</Button>
          </Link>&nbsp;
          <Link to="/view">
            <Button variant='contained'>View</Button>
          </Link>&nbsp;
        </Toolbar>
      </AppBar>
      <br /><br /><br />
    </div>
  )
}

export default Navbar