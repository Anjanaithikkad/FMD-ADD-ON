import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Addpage from './components/Addpage'
import Viewpage from './components/Viewpage'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path='/add' element={< Addpage />} />
        <Route path='/view' element={< Viewpage />} />
      </Routes>
    </>
  )
}

export default App
