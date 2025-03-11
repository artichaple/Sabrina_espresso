import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { OcassionPage } from './pages/OcassionPage'
import { ForPage } from './pages/ForPage'
import  Navbar  from './component/Navbar'
import { ShopPage } from './pages/ShopPage'

function App() {
  return (
    <div className=''>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/ocassions' element={<OcassionPage/>} />
          <Route path='/for' element={<ForPage/>} />
          <Route path='/shop' element={<ShopPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App