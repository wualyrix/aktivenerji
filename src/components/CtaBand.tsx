import Link from "next/link";

type Props = {
  title: string;
};

export function CtaBand({ title }: Props) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <h2>{title}</h2>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-orange">
            Work with us
          </Link>
          <Link href="/services" className="btn btn-ghost">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
