
export default function BeginnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1 className="text-2xl md:text-4xl">Beginner Challenges</h1>
      </header>
      {children}
    </>
  )
}