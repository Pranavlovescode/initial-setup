import React, { useEffect, useRef, useState } from "react";
import reactLogo from "../assets/react.svg";
// import Button from '@mui/material/Button';
import { Button } from "../components/ui/button";
import viteLogo from "/vite.svg";
import "../App.css";

export default function () {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    console.log("render");
    ref.current.style.color = "red";
    ref.current.addEventListener("click", () => {
      console.log("clicked");
      // localStorage.setItem("clicked",true)
    });
  });
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
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button ref={ref} variant="text">
          Hi im mui
        </Button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
