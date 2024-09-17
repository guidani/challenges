"use client"
import { useReducer } from "react";

const rangeReducer = (state: Array<number>, action: { type: string, index: number, value: number }) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default function Page() {

  // const [rangeValues, dispatch] = useReducer(rangeReducer, [0, 0, 0, 0]);
  // Inicializa o reducer com um objeto contendo 4 valores
  const [rangeValues, dispatch] = useReducer(rangeReducer, {
    top_right: 0,
    top_left: 0,
    bottom_right: 0,
    bottom_left: 0,
  });

  const handleInputChange = (key, value) => {
    dispatch({ type: 'SET_VALUE', key, value });
  };
  return (
    <main className="flex flex-col items-center bg-slate-700 text-white">
      <h1 className="text-4xl font-bold p-4">Border Radius Previewer</h1>
      <div>
        <label>Top Right:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValues.top_right}
          onChange={(e) => handleInputChange('top_right', Number(e.target.value))}
        />
        <span>Valor: {rangeValues.top_right}</span>
      </div>

      <div>
        <label>Top Left:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValues.top_left}
          onChange={(e) => handleInputChange('top_left', Number(e.target.value))}
        />
        <span>Valor: {rangeValues.top_left}</span>
      </div>

      <div>
        <label>Bottom Right:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValues.bottom_right}
          onChange={(e) => handleInputChange('bottom_right', Number(e.target.value))}
        />
        <span>Valor: {rangeValues.bottom_right}</span>
      </div>

      <div>
        <label>Bottom Left:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValues.bottom_left}
          onChange={(e) => handleInputChange('bottom_left', Number(e.target.value))}
        />
        <span>Valor: {rangeValues.bottom_left}</span>
      </div>

      <div className="square w-64 h-64 border-white border-2">

      </div>
    </main>
  )
}