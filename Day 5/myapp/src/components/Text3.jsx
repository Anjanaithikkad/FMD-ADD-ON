import { Button } from '@mui/material'
import React, { useState } from 'react'

const Text3 = () => {
    var[a, seta] = useState()

    const Text1 = () => {
        seta("React")
    }

    const Text2 = () => {
        seta("Angular")
    }

    const Text3 = () => {
        seta("Nestjs")
    }
  return (
      <div>
          <h2>Welcome, { a}</h2>
          <Button variant='contained' onClick={Text1}> React </Button> &nbsp; &nbsp;
          <Button variant='contained' onClick={Text2}> Angular </Button> &nbsp; &nbsp;
          <Button variant='contained' onClick={Text3}> Nestjs </Button> &nbsp; &nbsp;
    </div>
  )
}

export default Text3