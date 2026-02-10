export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between">
        <span className="font-semibold">Bengals Inc.</span>
        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="/solutions">Solutions</a>
          <a href="/technology">Technology</a>
          <a href="/company">Company</a>
        </nav>
      </div>
    </header>
  );
}
