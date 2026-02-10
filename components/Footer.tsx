export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Bengals Inc. All rights reserved.
      </div>
    </footer>
  );
}
