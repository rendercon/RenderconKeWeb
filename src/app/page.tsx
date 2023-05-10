import { Source_Code_Pro } from 'next/font/google'

const sourceCodePro = Source_Code_Pro({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1
        className="text-6xl font-bold text-center text-stone-50 pb-10"
      >RenderconKe 2023
      </h1>
      <p
        className={`text-2xl font-medium text-center text-stone-50 ${sourceCodePro.className}`}
      >Initializing...
      </p>
    </main>
  )
}
