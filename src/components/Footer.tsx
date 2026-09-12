import Link from "next/link";
import { nav, services, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{site.name}</h4>
            <p>{site.tagline}</p>
            <p style={{ marginTop: "1rem" }}>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Offices</h4>
            {site.offices.map((office) => (
              <p key={office.label} style={{ marginBottom: "1rem" }}>
                <strong style={{ color: "#fff" }}>{office.label}</strong>
                <br />
                {office.lines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            <a href={site.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            {" · "}
            <a href={site.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
