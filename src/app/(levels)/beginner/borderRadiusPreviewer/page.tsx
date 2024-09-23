"use client"
import { useReducer } from "react";

const rangeReducer = (state: Array<number>, action: { type: string, index: number, value: number, key: string }) => {
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const [rangeValues, dispatch] = useReducer(rangeReducer, {
    top_right: 0,
    top_left: 0,
    bottom_right: 0,
    bottom_left: 0,
  });

  const handleInputChange = (key: string, value: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatch({ type: 'SET_VALUE', key, value });
  };

  const borderRadiusStyle = `${rangeValues.top_left}% ${rangeValues.top_right}% ${rangeValues.bottom_right}% ${rangeValues.bottom_left}%`;

  return (
    <main className="flex flex-col items-center bg-slate-700 text-white">
      <h1 className="text-4xl font-bold p-4">Border Radius Previewer</h1>
      <div className="grid grid-cols-3">
        <label>Top Right:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValues.top_right}

          onChange={(e) => handleInputChange('top_right', Number(e.target.value))}

        />
        <span>{rangeValues.top_right} %</span>
      </div>

      <div className="grid grid-cols-3">
        <label>Top Left:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValues.top_left}
          onChange={(e) => handleInputChange('top_left', Number(e.target.value))}
        />
        <span>{rangeValues.top_left} %</span>
      </div>

      <div className="grid grid-cols-3">
        <label>Bottom Right:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValues.bottom_right}
          onChange={(e) => handleInputChange('bottom_right', Number(e.target.value))}
        />
        <span>{rangeValues.bottom_right} %</span>
      </div>

      <div className="grid grid-cols-3">
        <label>Bottom Left:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={rangeValues.bottom_left}
          onChange={(e) => handleInputChange('bottom_left', Number(e.target.value))}
        />
        <span>{rangeValues.bottom_left} %</span>
      </div>
      <div className="mt-4"></div>
      <div className={"w-64 h-64 border-white border-2"} style={{ borderRadius: borderRadiusStyle }}>

      </div>

      <h2 className="mt-4">CSS Output:</h2>
      <pre>
        <p className="bg-black p-2"><span className="text-purple-500">boder-radius</span>: {`${rangeValues.top_left}% ${rangeValues.top_right}% ${rangeValues.bottom_right}% ${rangeValues.bottom_left}%;`}</p>
      </pre>
    </main>
  )
}