export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {children}
    </section>
  );
}
