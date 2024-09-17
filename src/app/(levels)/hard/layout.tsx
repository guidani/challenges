
export default function HardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1 className="text-2xl md:text-4xl">Hard Challenges</h1>
      </header>
      {children}
    </>
  )
}