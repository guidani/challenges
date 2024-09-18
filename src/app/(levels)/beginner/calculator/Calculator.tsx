export default function Calculator() {
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-1">
      <div className="display row-span-1 col-span-4 border rounded-sm border-white flex justify-end items-end p-1">
        DISPLAY
      </div>
      <button className="p-4 border rounded-sm">CA</button>
      <button className="p-4 border rounded-sm">C</button>
      <button className="p-4 border rounded-sm">DEL</button>
      <button className="p-4 border rounded-sm">/</button>
      <button className="p-4 border rounded-sm">7</button>
      <button className="p-4 border rounded-sm">8</button>
      <button className="p-4 border rounded-sm">9</button>
      <button className="p-4 border rounded-sm">x</button>
      <button className="p-4 border rounded-sm">4</button>
      <button className="p-4 border rounded-sm">5</button>
      <button className="p-4 border rounded-sm">6</button>
      <button className="p-4 border rounded-sm">-</button>
      <button className="p-4 border rounded-sm">1</button>
      <button className="p-4 border rounded-sm">2</button>
      <button className="p-4 border rounded-sm">3</button>
      <button className="p-4 border rounded-sm">+</button>
      <button className="p-4 border rounded-sm">+/-</button>
      <button className="p-4 border rounded-sm">0</button>
      <button className="p-4 border rounded-sm">,</button>
      <button className="p-4 border rounded-sm">=</button>
    </div>
  )
}