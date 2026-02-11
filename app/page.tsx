import Section from "@/components/Section";
import Button from "@/components/ui/Button";

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

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section>
        <div className="max-w-3xl space-y-6 text-center mx-auto">
          <h1 className="text-5xl font-bold tracking-tight">
            Engineering intelligent systems for the real world
          </h1>
          <p className="text-lg text-gray-600">
            Bengals Inc. builds AI-first platforms spanning large language models,
            agentic systems, and cloud infrastructure.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex justify-center gap-4">
            <Button href="/contact">Get in touch</Button>
            <Button href="/technology" variant="secondary">
              Explore Technology
            </Button>
          </div>
        </div>
      </Section>

      {/* Feature Grid Section */}
      <Section>
        <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-3 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
