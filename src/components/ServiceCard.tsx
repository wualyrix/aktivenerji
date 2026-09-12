import Link from "next/link";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="card card-link">
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <div className="more">Explore service →</div>
    </Link>
  );
}
