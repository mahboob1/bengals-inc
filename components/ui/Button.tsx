import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ease-in-out";

  const styles =
    variant === "primary"
      ? `${baseStyles} bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-md hover:shadow-lg`
      : `${baseStyles} border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105 hover:shadow-md`;

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
