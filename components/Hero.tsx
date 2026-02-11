import Section from "@/components/Section";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <Section>
      <div className="max-w-4xl space-y-8">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
          Engineering intelligent systems for the real world
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl">
          Bengals Inc. builds AI-first platforms spanning large language models,
          agentic systems, and cloud infrastructure.
        </p>

        <div className="flex gap-4">
          <Button href="/technology">Explore technology</Button>
          <Button href="/company" variant="secondary">
            About the company
          </Button>
        </div>
      </div>
    </Section>
  );
}
