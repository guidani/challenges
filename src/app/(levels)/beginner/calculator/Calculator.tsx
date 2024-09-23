/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react";

export default function Calculator() {
  // const [calculo, setCalculo] = useState<string>("");
  const [firstOperand, setFirstOperand] = useState<string>("");
  const [secondOperand, setSecondOperand] = useState<string>("");
  const [operation, setOperation] = useState<string>("")
  const [result, setResult] = useState<string>("")

  function handler(e: any) {
    if (e.target.innerText == "x" || e.target.innerText == "+" || e.target.innerText == "-" || e.target.innerText == "/") {
      return null;
    }
    if (operation == "") {

      if (firstOperand.length != 8) {
        setFirstOperand(prev => prev + e.target.innerText)
      }
    } else {
      if (secondOperand.length != 8) {
        if (result != "") {
          return false;
        }
        setSecondOperand(prev => prev + e.target.innerText)
      }
    }
  }

  function handlerOperation(e: any) {
    if (operation == "" && firstOperand != "") {
      setOperation(e.target.innerText)
    } else if (operation == "x" || operation == "+" || operation == "-" || operation == "/") {
      setOperation(e.target.innerText)
    }
  }

  function CAHandler() {
    setFirstOperand("")
    setOperation("")
    setSecondOperand("")
    setResult("");
  }

  function DELHandler() {
    if (result != "") {
      return false;
    }
    if (secondOperand != "") {
      setSecondOperand(secondOperand.substring(0, secondOperand.length - 1))
    } else if (operation != "") {
      setOperation("")
    } else if (firstOperand != "") {
      setFirstOperand(firstOperand.substring(0, firstOperand.length - 1))
    }
  }

  function clearLastOperand() {
    if (result != "") {
      return false;
    }
    if (secondOperand != "") {
      setSecondOperand("")
    } else if (firstOperand != "") {
      setFirstOperand("")
    } else {
      return;
    }
  }

  function calcResult() {
    const str = `${firstOperand}${operation}${secondOperand}`;
    console.log(str)
    const r = eval(str)
    setResult(`=${r}`);
  }

  function invertSignals() {
    if (secondOperand != "") {
      const secondInverted = Number(secondOperand) * -1
      setSecondOperand(`(${secondInverted})`)
    } else {
      const firstInverted = Number(firstOperand) * -1
      setFirstOperand(`${firstInverted}`)
    }
  }

  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-1">
      <div className="display row-span-1 col-span-4 border rounded-md border-white flex justify-end items-end p-1 ">
        {firstOperand}
        {operation}
        {secondOperand}
        {result && result}
      </div>

      <button onClick={CAHandler} className="p-4 border rounded-md">CA</button>
      <button onClick={clearLastOperand} className="p-4 border rounded-md">C</button>
      <button onClick={DELHandler} className="p-4 border rounded-md">DEL</button>
      <button onClick={handlerOperation} className="p-4 border rounded-md">/</button>
      <button onClick={handler} className="p-4 border rounded-md">7</button>
      <button onClick={handler} className="p-4 border rounded-md">8</button>
      <button onClick={handler} className="p-4 border rounded-md">9</button>
      <button onClick={handlerOperation} className="p-4 border rounded-md">*</button>
      <button onClick={handler} className="p-4 border rounded-md">4</button>
      <button onClick={handler} className="p-4 border rounded-md">5</button>
      <button onClick={handler} className="p-4 border rounded-md">6</button>
      <button onClick={handlerOperation} className="p-4 border rounded-md">-</button>
      <button onClick={handler} className="p-4 border rounded-md">1</button>
      <button onClick={handler} className="p-4 border rounded-md">2</button>
      <button onClick={handler} className="p-4 border rounded-md">3</button>
      <button onClick={handlerOperation} className="p-4 border rounded-md">+</button>
      <button onClick={invertSignals} className="p-4 border rounded-md">+/-</button>
      <button onClick={handler} className="p-4 border rounded-md">0</button>
      <button onClick={handler} className="p-4 border rounded-md">,</button>
      <button onClick={calcResult} className="p-4 border rounded-md">=</button>
    </div>
  )
}