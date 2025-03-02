import Image from "next/image";
export default function Header() {
  return (
    <header className="text-center pt-8 pb-4">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent leading-[1.15] pb-1">
        Discover a FY2025 Budget for you
      </h1>
      <p className="flex items-center justify-center text-lg text-slate-600 max-w-2xl mx-auto mt-6 gap-2">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" 
          alt="Flag of Singapore" 
          width={24}
          height={24}
        />
        Onward Together For A Better Tomorrow
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" 
          alt="Flag of Singapore"
          width={24} 
          height={24}
        />
      </p>
    </header>
  )
}