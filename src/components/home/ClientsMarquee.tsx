import { clients } from "@/data/clients";
import { asset } from "@/lib/paths";

export function ClientsMarquee() {
  const track = [...clients, ...clients];

  return (
    <section className="section clients-section" aria-label="Clients">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Clients</p>
            <h2>Trusted across energy, telecom and retail.</h2>
          </div>
        </div>
      </div>

      <div className="clients-marquee">
        <div className="clients-marquee__fade clients-marquee__fade--left" />
        <div className="clients-marquee__fade clients-marquee__fade--right" />
        <div className="clients-marquee__track">
          {track.map((client, index) => (
            <div
              className="clients-marquee__item"
              key={`${client.name}-${index}`}
              title={client.name}
            >
              <img
                src={asset(client.logo)}
                alt={client.name}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
