import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Gettable from './components/Gettable'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Text3 from './components/Text3'
import Product from './components/Product'

=======
import { Route, Routes } from 'react-router-dom'
import Addpage from './components/Addpage'
import Viewpage from './components/Viewpage'
import Navbar from './components/Navbar'
>>>>>>> bb56518 (Initial commit)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
<<<<<<< HEAD
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/tab' element={<Gettable />} />
        <Route path='/state' element={<StateBasics />} />
        <Route path='/count' element={<Counter />} />
        <Route path='/text' element={<Text3 />} />
        <Route path='/card' element={<Product/>} />
      </Routes>
      
=======
        
        <Route path='/add' element={< Addpage />} />
        <Route path='/view' element={< Viewpage />} />
      </Routes>
>>>>>>> bb56518 (Initial commit)
    </>
  )
}

export default App
