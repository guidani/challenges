import { CHALLENGES_DATA } from "@/app/DATA";
import Link from "next/link";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-700 text-white">
      <main className="flex flex-col w-full gap-8 row-start-2 items-center sm:items-start">
        {CHALLENGES_DATA.beginner.map((item, index) => {
          return <div key={index} className="border rounded-md px-10 w-full text-center py-2 hover:bg-black hover:text-green-500">
            <Link href={`/beginner${item.link}`} >{item.name}</Link>
          </div>
        })}
      </main>
    </div >
  );
}
