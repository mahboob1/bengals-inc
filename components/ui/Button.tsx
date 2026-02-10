import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium transition";

  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border hover:bg-gray-50",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}
