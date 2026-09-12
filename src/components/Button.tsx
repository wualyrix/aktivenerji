import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "orange" | "blue" | "ghost" | "ghost-dark";
};

export function Button({ href, children, variant = "orange" }: Props) {
  return (
    <Link href={href} className={`btn btn-${variant}`}>
      {children}
    </Link>
  );
}
