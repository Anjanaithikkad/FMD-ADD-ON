import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Gettable = () => {
    var[user,setuser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res.data)
            setuser(res.data)
    })
    return (
    
        <TableContainer>
            <Table sx={{ minWidth:650, border:'1px solid black'}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val) => {
                        return (
                            <TableRow>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.username}</TableCell>
                                <TableCell>{val.address.city}</TableCell>
                                <TableCell>{val.email}</TableCell>
                            </TableRow>
                        )
                    })}
                    
                </TableBody>
            </Table>
      </TableContainer>
  )
}

export default Gettable