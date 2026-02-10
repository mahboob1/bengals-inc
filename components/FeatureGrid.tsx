const features = [
  {
    title: "Agentic AI Systems",
    desc: "Multi-agent orchestration, MCP, autonomous workflows, and tool-using agents.",
  },
  {
    title: "LLMs & Embeddings",
    desc: "OpenAI, Gemini, Claude, fine-tuning, vector search, and RAG pipelines.",
  },
  {
    title: "Cloud & Infrastructure",
    desc: "AWS, Azure, Terraform, Kubernetes, secure and scalable deployments.",
  },
  {
    title: "IoT & Edge",
    desc: "Event-driven systems, real-time ingestion, and device orchestration.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title}>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-3 text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
