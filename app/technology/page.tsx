import Section from "@/components/Section";
import Button from "@/components/ui/Button";
import { FaRobot, FaCloud, FaMicrochip, FaLayerGroup } from "react-icons/fa";

const techColumns = [
  {
    title: "AI & Machine Learning",
    icon: <FaRobot className="text-3xl text-blue-600" />,
    items: [
      "Large Language Models: OpenAI, Gemini, Claude, open-source LLMs, prompt engineering, fine-tuning, evaluation.",
      "Agentic Systems: Tool-using agents, planners, memory, multi-agent coordination, MCP-based architectures.",
      "Embeddings & Retrieval: Vector databases, semantic search, RAG pipelines, hybrid retrieval strategies.",
      "Data & Labeling: Dataset curation, labeling workflows, quality control, feedback loops.",
      "Learning Foundations: Neural networks, backpropagation, gradient descent, feature extraction, model optimization.",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: <FaCloud className="text-3xl text-blue-600" />,
    items: [
      "Cloud Platforms: AWS, Azure, GCP with multi-account and multi-region strategies.",
      "Infrastructure as Code: Terraform, CloudFormation, automated provisioning and drift control.",
      "Containers & Orchestration: Docker, Kubernetes, service meshes, CI/CD pipelines.",
      "Reliability & Observability: Logging, metrics, tracing, alerting, cost optimization.",
    ],
  },
  {
    title: "IoT, Edge & Data Pipelines",
    icon: <FaMicrochip className="text-3xl text-blue-600" />,
    items: [
      "IoT Integration: Secure device onboarding, telemetry ingestion, real-time processing.",
      "Streaming Systems: Event-driven architectures, message queues, asynchronous processing.",
      "Data Platforms: Warehouses, feature stores, analytics-ready pipelines.",
    ],
  },
  {
    title: "Architecture Philosophy",
    icon: <FaLayerGroup className="text-3xl text-blue-600" />,
    items: [
      "Modular: Clear service boundaries, replaceable components, composable systems.",
      "Secure: Least-privilege access, identity-first design, compliance-aware architecture.",
      "Scalable: Horizontally scalable services, async workflows, cloud-native primitives.",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <main className="space-y-16">
      {/* Hero Section */}
      <Section>
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            Technology built for intelligent systems at scale
          </h1>

          <p className="text-lg text-gray-600">
            Bengals Inc. designs and engineers AI-first platforms that move from
            research to production—combining modern machine learning, agentic
            systems, and cloud-native infrastructure.
          </p>

          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>

      {/* Tech Columns */}
      <Section>
        <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {techColumns.map((col) => (
            <div
              key={col.title}
              className="space-y-4 p-6 rounded-xl hover:shadow-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {col.icon}
                <h2 className="text-xl font-semibold">{col.title}</h2>
              </div>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <Section>
        <div className="text-center text-gray-500 text-sm">
          © 2026 Bengals Inc. All rights reserved.
        </div>
      </Section>
    </main>
  );
}
