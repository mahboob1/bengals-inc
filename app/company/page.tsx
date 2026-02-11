import Section from "@/components/Section";
import Button from "@/components/ui/Button";

export default function CompanyPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Engineering clarity in complex systems
          </h1>

          <p className="text-lg text-gray-600">
            Bengals Inc. is an AI-first engineering company focused on building
            intelligent systems that operate reliably at scale.
          </p>
        </div>
      </Section>

      {/* Who We Are */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-lg leading-relaxed">
          <p>
            We work at the intersection of artificial intelligence, distributed
            systems, and cloud infrastructure. Our approach combines rigorous
            engineering discipline with modern machine learning and agentic
            architectures.
          </p>

          <p>
            From large language model integrations and multi-agent orchestration
            to secure cloud-native deployments, we design systems that move
            beyond prototypes into durable production environments.
          </p>

          <p>
            Our philosophy is simple: intelligent systems should be modular,
            observable, secure, and scalable by design.
          </p>
        </div>
      </Section>

      {/* Core Principles */}
      <Section>
        <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-3 text-center">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Engineering Depth</h2>
            <p className="text-gray-600 text-sm">
              Strong foundations in systems design, infrastructure, and applied AI.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Production Mindset</h2>
            <p className="text-gray-600 text-sm">
              We prioritize reliability, security, observability, and cost efficiency.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Long-Term Architecture</h2>
            <p className="text-gray-600 text-sm">
              Systems designed to evolve, adapt, and scale with business growth.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Interested in working together?
          </h2>

          <p className="text-gray-600">
            Let’s discuss how we can design and deploy intelligent systems
            tailored to your organization.
          </p>

          <div className="flex justify-center gap-4">
            <Button href="/contact">Get in touch</Button>
            <Button href="/technology" variant="secondary">
              Explore Technology
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
