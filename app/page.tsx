export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#031B34] text-white">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-6xl font-bold">
          El Salam Cool
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-blue-100">
          Modern Air Conditioning E-commerce Platform
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Shop Now
          </button>

          <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10">
            Installation Services
          </button>
        </div>
      </div>
    </main>
  )
}
