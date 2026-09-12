"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/site";
import { asset } from "@/lib/paths";

const challengeCopy: Record<string, string> = {
  "high-voltage-electrical-systems":
    "You need HV networks designed, installed and handed over without delays.",
  "laboratory-center-services":
    "You need diagnostics that catch faults before they become outages.",
  "low-voltage-power-distribution":
    "You need LV distribution that is safe, documented and ready for use.",
  "low-current-and-it-systems":
    "You need building networks, CCTV and fire systems that work as one.",
  "uninterruptible-power-systems":
    "You need backup power that keeps critical sites online.",
  "automation-systems":
    "You need energy and building automation you can trust remotely.",
  "grounding-and-lightning-protection":
    "You need earthing and lightning protection matched to real site risk.",
};

export function SolutionsPanel() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="solutions">
      <div className="solutions__copy">
        <p className="eyebrow">Services</p>
        <h2>Your challenges. Our solutions.</h2>
        <ul className="solutions__list">
          {services.map((service, index) => (
            <li key={service.slug}>
              <button
                type="button"
                className={index === active ? "is-active" : undefined}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
              >
                <span className="solutions__challenge">
                  {challengeCopy[service.slug] ?? service.short}
                </span>
                <span className="solutions__answer">{service.title}</span>
              </button>
            </li>
          ))}
        </ul>
        <Link href={`/services/${current.slug}`} className="btn btn-orange">
          Explore {current.title}
        </Link>
      </div>
      <div className="solutions__visual">
        <img src={asset("/hero.jpg")} alt="" />
        <div className="solutions__caption">
          <p className="eyebrow on-dark">Active focus</p>
          <h3>{current.title}</h3>
          <p>{current.short}</p>
        </div>
      </div>
    </div>
  );
}
