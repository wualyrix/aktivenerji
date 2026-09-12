"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/site";
import { asset } from "@/lib/paths";

export function SolutionsPanel() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-solutions">
      <div className="container">
        <div className="solutions-head">
          <p className="eyebrow">What we do</p>
          <h2>
            Your challenges.{" "}
            <span className="solutions-mark">Our solutions.</span>
          </h2>
          <Link href="/services" className="btn btn-orange">
            View all services
          </Link>
        </div>

        <div className="solutions-grid">
          <ul className="solutions-list">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className={index === active ? "is-active" : undefined}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                >
                  <span className="solutions-list__title">{service.title}</span>
                  <span className="solutions-list__arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="solutions-media" aria-hidden="true">
            {services.map((service, index) => (
              <img
                key={service.slug}
                src={asset("/hero.jpg")}
                alt=""
                className={index === active ? "is-active" : undefined}
              />
            ))}
            <div className="solutions-media__label">
              <p className="eyebrow on-dark">Active focus</p>
              <p>{services[active].title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
