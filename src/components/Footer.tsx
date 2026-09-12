import Link from "next/link";
import { nav, services, site } from "@/data/site";
import { asset } from "@/lib/paths";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img
                src={asset("/logo.png")}
                alt={site.name}
                width={170}
                height={68}
              />
            </Link>
            <p>{site.tagline}</p>
            <p className="footer-contact">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <SocialIcons tone="light" />
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
              <p key={office.label} className="footer-office">
                <strong>{office.label}</strong>
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
          <SocialIcons tone="light" className="footer-bottom__social" />
        </div>
      </div>
    </footer>
  );
}
