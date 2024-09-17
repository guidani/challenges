
export default function IntermediateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1 className="text-2xl md:text-4xl">Intermediate Challenges</h1>
      </header>
      {children}
    </>
  )
}