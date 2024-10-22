import React, { useRef, useState } from "react";

function Calculator() {
  //   const [input, setInput] = useState('');
  //   const [result, setResult] = useState('');
  const inputRef = useRef("");
  const resultRef = useRef("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // setResult(eval(input).toString());
        resultRef.current = eval(inputRef.current).toString();
        document.getElementById("resultvalue").innerHTML = resultRef.current;
      } catch (error) {
        // setResult('Error');
        resultRef.current = "Error";
        document.getElementById("resultvalue").innerHTML = resultRef.current;
      }
    } else if (value === "C") {
      //   setInput('');
      inputRef.current = "";
      //   setResult('');
      resultRef.current = "";
      document.getElementById("resultvalue").innerHTML = resultRef.current;
      document.getElementById("inputvalue").innerHTML = inputRef.current;
    } else if (value === "DEL") {
      //   setInput(input.slice(0, -1));
      inputRef.current = inputRef.current.slice(0, -1);
      document.getElementById("inputvalue").innerHTML = inputRef.current;
    } else {
      //   setInput(input + value);
      inputRef.current += value;
      document.getElementById("inputvalue").innerHTML = inputRef.current;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-80 p-4 bg-gray-800 rounded-lg shadow-lg">
        {/* Display Screen */}
        <div className="bg-black text-white text-right text-3xl p-4 rounded mb-4 h-20 flex flex-col justify-center">
          <div id="inputvalue">{inputRef.current || "0"}</div>
          <div id="resultvalue" className="text-xl text-gray-400">
            {resultRef.current}
          </div>
        </div>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {["C", "DEL", "/", "*"].map((symbol) => (
            <button
              key={symbol}
              onClick={() => handleClick(symbol)}
              className="bg-gray-600 text-white p-4 rounded-lg text-xl"
            >
              {symbol}
            </button>
          ))}
          {["7", "8", "9", "-"].map((symbol) => (
            <button
              key={symbol}
              onClick={() => handleClick(symbol)}
              className="bg-gray-700 text-white p-4 rounded-lg text-xl"
            >
              {symbol}
            </button>
          ))}
          {["4", "5", "6", "+"].map((symbol) => (
            <button
              key={symbol}
              onClick={() => handleClick(symbol)}
              className="bg-gray-700 text-white p-4 rounded-lg text-xl"
            >
              {symbol}
            </button>
          ))}
          {["1", "2", "3", "="].map((symbol) => (
            <button
              key={symbol}
              onClick={() => handleClick(symbol)}
              className={`p-4 rounded-lg text-xl ${
                symbol === "="
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              {symbol}
            </button>
          ))}
          {["0", ".", "%"].map((symbol) => (
            <button
              key={symbol}
              onClick={() => handleClick(symbol)}
              className="bg-gray-700 text-white p-4 rounded-lg text-xl span-3 grid grid-col-3 "
            >
              {symbol}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
