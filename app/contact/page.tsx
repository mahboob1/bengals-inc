import Section from "@/components/Section";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Let’s build intelligent systems together
          </h1>

          <p className="text-lg text-gray-600">
            Whether you're scaling AI infrastructure, designing agentic workflows,
            or modernizing cloud platforms — we’re ready to collaborate.
          </p>
        </div>
      </Section>

      {/* Contact Card */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="p-10 rounded-2xl border border-gray-200 shadow-sm bg-white space-y-8 text-center">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">
                Start a conversation
              </h2>

              <p className="text-gray-600">
                Reach out directly and we’ll respond within 24–48 hours.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-900">
                m.chowdhury@bengalsinc.com
              </p>

              <Button href="mailto:m.chowdhury@bengalsinc.com">
                Email Us
              </Button>
            </div>

            <div className="pt-6 border-t border-gray-100 text-sm text-gray-500">
              Enterprise engagements, AI consulting, cloud architecture,
              and custom intelligent system development.
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
