"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const INTRO =
  "As demand for reliable power grows, Aktiv Enerji helps you stay ahead. From Poland and Azerbaijan, we design, build, test and maintain the critical electrical infrastructure behind industry, commercial sites and utilities.";

export function ScrollRevealIntro() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = textRef.current;
    if (!el) return;

    const words = INTRO.split(" ").map((word) => {
      const span = document.createElement("span");
      span.className = "reveal-word";
      span.textContent = word;
      return span;
    });

    el.replaceChildren();
    words.forEach((span, i) => {
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });

    const tween = gsap.to(words, {
      opacity: 1,
      ease: "none",
      stagger: 0.08,
      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        end: "bottom 45%",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="section home-intro">
      <div className="container home-intro__inner">
        <h2 ref={textRef} className="home-intro__text">
          {INTRO}
        </h2>
        <Link href="/about" className="btn btn-blue">
          Who we are
        </Link>
      </div>
    </section>
  );
}
