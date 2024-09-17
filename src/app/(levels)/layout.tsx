import Link from "next/link";

export default function LevelsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container mx-auto">

        <div className="bg-slate-700 text-white p-4">
          <Link href={'/'}>Home</Link >
          {children}
        </div>
      </div>
    </>
  )
}