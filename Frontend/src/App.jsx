import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Questions from "./pages/Questions"
import Tag from "./pages/Tag"

const App = () => {
  return (<>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/questions' element={<Questions/>} />
        <Route path='/tags' element={<Tag/>}/>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App