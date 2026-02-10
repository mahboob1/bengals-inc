export default function TechnologyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24 space-y-32">
      {/* Hero */}
      <section className="space-y-6 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Technology built for intelligent systems at scale
        </h1>
        <p className="text-lg text-gray-600">
          Bengals Inc. designs and engineers AI-first platforms that move from
          research to production—combining modern machine learning, agentic
          systems, and cloud-native infrastructure.
        </p>
      </section>

      {/* AI & ML */}
      <section className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold">AI & Machine Learning</h2>
          <p className="mt-4 text-gray-600">
            We work across the full AI stack—from foundational learning theory
            to applied large-scale systems.
          </p>
        </div>

        <ul className="space-y-6 text-gray-700">
          <li>
            <strong>Large Language Models:</strong> OpenAI, Gemini, Claude,
            open-source LLMs, prompt engineering, fine-tuning, evaluation.
          </li>
          <li>
            <strong>Agentic Systems:</strong> Tool-using agents, planners,
            memory, multi-agent coordination, MCP-based architectures.
          </li>
          <li>
            <strong>Embeddings & Retrieval:</strong> Vector databases, semantic
            search, RAG pipelines, hybrid retrieval strategies.
          </li>
          <li>
            <strong>Data & Labeling:</strong> Dataset curation, labeling
            workflows, quality control, feedback loops.
          </li>
          <li>
            <strong>Learning Foundations:</strong> Neural networks, backpropagation,
            gradient descent, feature extraction, model optimization.
          </li>
        </ul>
      </section>

      {/* Cloud */}
      <section className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold">Cloud & Infrastructure</h2>
          <p className="mt-4 text-gray-600">
            Our systems are designed to be observable, secure, and scalable from
            day one.
          </p>
        </div>

        <ul className="space-y-6 text-gray-700">
          <li>
            <strong>Cloud Platforms:</strong> AWS, Azure, GCP with multi-account
            and multi-region strategies.
          </li>
          <li>
            <strong>Infrastructure as Code:</strong> Terraform, CloudFormation,
            automated provisioning and drift control.
          </li>
          <li>
            <strong>Containers & Orchestration:</strong> Docker, Kubernetes,
            service meshes, CI/CD pipelines.
          </li>
          <li>
            <strong>Reliability & Observability:</strong> Logging, metrics,
            tracing, alerting, cost optimization.
          </li>
        </ul>
      </section>

      {/* IoT & Data */}
      <section className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold">IoT, Edge & Data Pipelines</h2>
          <p className="mt-4 text-gray-600">
            We connect intelligent software with the physical world and
            high-volume data streams.
          </p>
        </div>

        <ul className="space-y-6 text-gray-700">
          <li>
            <strong>IoT Integration:</strong> Secure device onboarding, telemetry
            ingestion, real-time processing.
          </li>
          <li>
            <strong>Streaming Systems:</strong> Event-driven architectures,
            message queues, asynchronous processing.
          </li>
          <li>
            <strong>Data Platforms:</strong> Warehouses, feature stores,
            analytics-ready pipelines.
          </li>
        </ul>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl space-y-6">
        <h2 className="text-2xl font-semibold">Architecture Philosophy</h2>
        <p className="text-gray-600">
          We design systems that are modular, secure, and evolvable—capable of
          supporting rapid experimentation without sacrificing production
          stability.
        </p>

        <ul className="grid sm:grid-cols-3 gap-6 text-sm text-gray-700">
          <li>
            <strong>Modular:</strong> Clear service boundaries, replaceable
            components, composable systems.
          </li>
          <li>
            <strong>Secure:</strong> Least-privilege access, identity-first
            design, compliance-aware architecture.
          </li>
          <li>
            <strong>Scalable:</strong> Horizontally scalable services, async
            workflows, cloud-native primitives.
          </li>
        </ul>
      </section>
    </main>
  );
}
