"use client"
import { useReducer } from "react";

const rangeReducer = (state: Array<number>, action: { type: string, index: number, value: number }) => {
  switch (action.type) {
    case 'SET_VALUE':
      // Retorna um novo estado com o valor atualizado no índice específico
      return state.map((value: number, index: number) =>
        index === action.index ? action.value : value
      );
    default:
      return state;
  }
};

export default function Page() {

  const [rangeValues, dispatch] = useReducer(rangeReducer, [0, 0, 0, 0]);

  const handleInputChange = (index: number, value: number) => {
    dispatch({ type: 'SET_VALUE', index, value });
  };
  return (
    <main className="flex flex-col items-center bg-slate-700 text-white">
      <h1 className="text-4xl font-bold p-4">Border Radius Previewer</h1>
      <div>
        {rangeValues.map((value: number, index: number) => (
          <div key={index}>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => handleInputChange(index, Number(e.target.value))}
            />
            <span>Valor: {value}</span>
          </div>
        ))}
      </div>

      <div className="square w-64 h-64 border-white border-2">

      </div>
    </main>
  )
}