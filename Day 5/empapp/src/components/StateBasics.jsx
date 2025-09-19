import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [a, seta] = useState("Soja")
    var [b, setb] = useState()
    
    const ChangeName = (e) => {
        console.log(e.target.value)
        seta(e.target.value)
    }
    const handleButtonClick = () => {
        setb(a)                            
    }
    return (
        <div>
            <h4>Welcome {b}</h4>
            <TextField variant='outlined' onChange={ChangeName} />
            <Button variant='contained' onClick={handleButtonClick}>Change</Button>
        </div>
    )
}

export default StateBasics