import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Addpage = () => {
  var [input, setinput] = useState({ Name: "", Age: "", Department: "", Salary: "" })
  var navigate = useNavigate()
  var location = useLocation()
  console.log(location.state)

  const inputHandler = (e) => {
    setinput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }
  var InpData = () => {
    if (location.state !== null) {
      //update
      axios.put("http://localhost:3004/update/"+location.state.val._id, input)
        .then((res) => {
          alert(res.data)
          navigate("/view")
        })
    }
    else {
      axios.post("http://localhost:3004/add", input)
        .then((res) => {
          alert(res.data)
          navigate("/view")
    })
      
    }
}
  if (location.state !== null) {
  
    useEffect(() => {
      setinput({
        ...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Department: location.state.val.Department,
        Salary: location.state.val.Salary
      })
    }, [])
  }
  
  return (
    <div>
          <h1>Add Form</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" name='Name'
        value={input.Name}
        onChange={inputHandler} />
      <br /><br />
      <TextField id="outlined-basic" label="Age" variant="outlined" name='Age'
        value={input.Age}
        onChange={inputHandler} />
          <br /><br />
      <TextField id="outlined-basic" label="Department" variant="outlined" name='Department'
        value={input.Department}
        onChange={inputHandler} />
          <br /><br />
      <TextField id="outlined-basic" label="Salary" variant="outlined" name='Salary'
        value={input.Salary}
        onChange={inputHandler} />
      <br /><br />
      
      <Button variant='contained' onClick={InpData}>ADD</Button>
    </div>
  )
}

export default Addpage