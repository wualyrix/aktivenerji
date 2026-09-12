import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / Contact
          </p>
          <p className="eyebrow on-dark">Let’s talk</p>
          <h1>Tell us about your project.</h1>
          <p>
            Have a question, a site survey need or a partnership in mind? Our
            team typically replies within an hour during support hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="card">
            <p className="eyebrow">Direct lines</p>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
              Reach Aktiv Enerji
            </h2>
            <p>
              <strong>Email</strong>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p style={{ marginTop: "1rem" }}>
              <strong>Phone / WhatsApp</strong>
              <br />
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <p style={{ marginTop: "1rem" }}>
              <strong>Support</strong>
              <br />
              {site.supportHours}
            </p>
            <div style={{ marginTop: "1.5rem" }} className="grid-2">
              {site.offices.map((office) => (
                <div key={office.label}>
                  <strong>{office.label}</strong>
                  {office.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <form className="card contact-form" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <p className="eyebrow">Project inquiry</p>
            <h3>Send a message</h3>
            <label>
              Full name
              <input name="name" required placeholder="Jane Smith" />
            </label>
            <label>
              Work email
              <input
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
              />
            </label>
            <label>
              Company
              <input name="company" placeholder="Company name" />
            </label>
            <label>
              How can we help?
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Site type, voltage level, timeline…"
              />
            </label>
            <p className="form-note">
              By submitting, you agree we may contact you about this inquiry.
              Support hours: {site.supportHours}.
            </p>
            <button className="btn btn-orange" type="submit">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
