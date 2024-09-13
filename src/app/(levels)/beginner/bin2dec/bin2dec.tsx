'use client'

import { ChangeEvent, useCallback, useState } from "react";

export default function Bin2Dec() {
  const [bin, setBin] = useState<string>("");
  const [dec, setDec] = useState<number | null>(null);
  const [alert, setAlert] = useState<boolean>(false)

  const handleBinChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const val = e.target.value
    if (val === '' || /^[01]+$/.test(val)) {
      setAlert(false)
      setBin(val);
      const result = parseInt(val, 2);
      setDec(result);
    } else {
      setAlert(true)
    }
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="border rounded-lg flex flex-col items-center justify-center p-4">
        <label htmlFor="Bin" className="text-2xl">Bin</label>
        <input type="text" name="bin" id="bin" onChange={handleBinChange} value={bin} className="border rounded-sm text-black" maxLength={8} />
        {alert && <><p className="text-red-600">Apenas 0s e 1s são permitidos</p></>}
        <p className="text-2xl">Resultado</p>
        {dec ? <span className="text-2xl">{dec}</span> : <span>{""}</span>}
      </div>
    </div>
  )
}