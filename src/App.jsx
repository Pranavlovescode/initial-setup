import React, { useEffect, useRef, useState } from 'react'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import PropsGetting from './components/PropsGetting';
import Hero from './components/Hero';
import Calculator from './components/Calculator';

const data = [
  {
    id: 1,
    name: "Billy Butcher",
  },
  {
    id: 2,
    name: "Hughie Campbell", 
  }
  ,{
    id: 3,
    name: "Mother's Milk",
  },
  {
    id: 4,
    name: "Frenchie",
  },
  {
    id: 5,
    name: "Solider Boy",
  }
]


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/props' element={<PropsGetting prop={data}/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
