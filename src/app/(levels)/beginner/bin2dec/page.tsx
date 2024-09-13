import Bin2Dec from "./bin2dec";

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-slate-700 text-white">
      <h1 className="text-4xl font-bold p-4">Bin2Dec</h1>
      <Bin2Dec />
    </main>
  )
}