import React, { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from '@mui/material/Button';
import viteLogo from '/vite.svg'
import './App.css'
import PropsGetting from './components/PropsGetting';

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
  const [count, setCount] = useState(0)
  const ref = useRef();
  useEffect(()=>{
    console.log("render")
    ref.current.style.color = "red"
    ref.current.addEventListener("click",()=>{
      console.log("clicked")
      // localStorage.setItem("clicked",true)
    })    
  })
 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button ref={ref} variant="text">Hi im mui</Button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PropsGetting prop={data}/>
    </>
  )
}

export default App
