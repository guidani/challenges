import GitHubIcon from "@/components/icons/githubIcon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)] bg-slate-700 text-white">
      <header className="pb-4">
        <h1 className="text-4xl">Challenges</h1>
      </header>
      <main className="grid md:grid-cols-3 w-full h-full max-w-screen-lg gap-2">
        <div className="flex items-center justify-center bg-green-700 bg-[url('/maths-learning.png')] bg-no-repeat bg-cover bg-center rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]">
          <Link href="/beginner" className="text-2xl">
            BEGINNER
          </Link>
        </div>
        <div className="flex items-center justify-center bg-blue-700 bg-[url('/digital-nomad.png')] bg-no-repeat bg-cover bg-center rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]">
          <Link href="/intermediate" className="text-2xl">
            INTERMEDIATE
          </Link>
        </div>
        <div className="flex items-center justify-center bg-red-700 bg-[url('/working-with-laptop.png')] bg-no-repeat bg-cover bg-center rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]">
          <Link href="/hard" className="text-2xl">
            HARD
          </Link>
        </div>
      </main>
      <footer className="flex items-center justify-center pt-4">
        <p>By: Guilherme Daniel </p><Link href={'http://www.github.com/guidani'} target="_blank" className="pl-4"><GitHubIcon /></Link>
      </footer>
    </div>
  );
}
