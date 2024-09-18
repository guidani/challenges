import Calculator from "./Calculator";

export default function Page() {
  return (

    <main className="flex flex-col items-center bg-slate-700 text-white">
      <h1 className="text-4xl font-bold p-4">Calculator</h1>
      <Calculator />
    </main>
  )
}