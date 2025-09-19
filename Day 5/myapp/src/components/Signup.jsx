import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'


const Signup = () => {
  return (
      <div>
          <div class="signup"> 
              
          <h2>SignUp Here</h2>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <br /><br />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <br /><br />
          <TextField id="filled-basic" label="Password" variant="filled" /> <br /><br />
          <Button variant="contained">SignUp</Button>
          </div>
    </div>
  )
}

export default Signup