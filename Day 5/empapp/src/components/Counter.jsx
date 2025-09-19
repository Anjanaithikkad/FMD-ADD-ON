import { Button } from '@mui/material'
import React,{ useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
    }
  return (
      <div>
          <h3>{ count}</h3>
          <Button variant='contained' onClick={Increment}>+</Button> &nbsp;&nbsp;
          <Button variant='contained' onClick={Decrement}>-</Button>
    </div>
  )
}

export default Counter