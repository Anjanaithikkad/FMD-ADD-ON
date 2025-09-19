import React, { useState } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Viewpage = () => {
    var navigate = useNavigate()
    
    var [emp, setEmp] = useState([])
    axios.get("http://localhost:3004/view")
        .then((res) => {
            console.log(res);
            setEmp(res.data);
        })
    const Del = (id) => {
        axios.delete(`http://localhost:3004/remove/${id}`)
            .then(() => {
    alert("Do you want to Delete?")
        })
    }
    const UpdateFn = (val) => {
        navigate("/add",{state:{val}})
    }
  return (
          <TableContainer>
              <Table sx={{ minWidth: 650, border: '1px solid black' }}>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>Department</TableCell>
                          <TableCell>Salary</TableCell>
                      </TableRow>
              </TableHead>
              <TableBody>
                  {emp.map((val) => {
                      return (
                      <TableRow>
                            <TableCell> {val.Name} </TableCell>
                            <TableCell> {val.Age} </TableCell>
                            <TableCell> {val.Department} </TableCell>
                              <TableCell> {val.Salary} </TableCell>
                              <Button variant='outlined' onClick={() => Del(val._id)}>Delete</Button>&nbsp; &nbsp; &nbsp;
                              <Button variant='outlined' onClick={() => UpdateFn(val)}>Update</Button>
                        </TableRow>
                      )
                       })}
              </TableBody>
          </Table>
          </TableContainer>
  )
}

export default Viewpage