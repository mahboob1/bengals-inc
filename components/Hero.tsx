export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 text-center">
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
        Engineering AI & Cloud Systems
        <span className="block text-gray-500 mt-3">
          Built for scale. Built for reality.
        </span>
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
        Bengals Inc. designs and builds production-grade AI platforms —
        from agentic workflows and embeddings to cloud-native infrastructure
        and IoT systems.
      </p>

      <div className="mt-10 flex justify-center gap-6">
        <a
          href="/solutions"
          className="rounded-md bg-black px-6 py-3 text-white text-sm font-semibold hover:bg-gray-800"
        >
          Explore Solutions
        </a>
        <a
          href="/technology"
          className="rounded-md border px-6 py-3 text-sm font-semibold hover:bg-gray-50"
        >
          Our Technology
        </a>
      </div>
    </section>
  );
}
