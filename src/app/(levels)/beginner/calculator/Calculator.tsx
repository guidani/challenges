"use client"

import { useState } from "react";

export default function Calculator() {
  const [calculo, setCalculo] = useState<string>("");

  function handler(e: HTMLButtonElement) {
    setCalculo(prev => prev + e.innerHTML);
  }

  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-1">
      <div className="display row-span-1 col-span-4 border rounded-md border-white flex justify-end items-end p-1">
        {calculo}
      </div>
      <button className="p-4 border rounded-md">CA</button>
      <button className="p-4 border rounded-md">C</button>
      <button className="p-4 border rounded-md">DEL</button>
      <button className="p-4 border rounded-md">/</button>
      <button className="p-4 border rounded-md">7</button>
      <button className="p-4 border rounded-md">8</button>
      <button className="p-4 border rounded-md">9</button>
      <button className="p-4 border rounded-md">x</button>
      <button className="p-4 border rounded-md">4</button>
      <button className="p-4 border rounded-md">5</button>
      <button className="p-4 border rounded-md">6</button>
      <button className="p-4 border rounded-md">-</button>
      <button className="p-4 border rounded-md">1</button>
      <button className="p-4 border rounded-md">2</button>
      <button className="p-4 border rounded-md">3</button>
      <button className="p-4 border rounded-md">+</button>
      <button className="p-4 border rounded-md">+/-</button>
      <button className="p-4 border rounded-md" onClick={() => handler}>0</button>
      <button className="p-4 border rounded-md">,</button>
      <button className="p-4 border rounded-md">=</button>
    </div>
  )
}