import { Flag } from "lucide-react"

export default function Header() {
  return (
    <header className="text-center pt-8 pb-4">
      {/* <div className="flex items-center justify-center mb-4">
        <Flag className="h-8 w-8 text-red-600 mr-2" />
      </div> */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent leading-[1.15] pb-1">
        Discover a FY2025 Budget for you
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
        Onward Together For A Better Tomorrow
      </p>
    </header>
  )
}