"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const INTRO =
  "As demand for reliable power grows, Aktiv Enerji helps you stay ahead. From Poland and Azerbaijan, we design, build, test and maintain the critical electrical infrastructure behind industry, commercial sites and utilities.";

export function ScrollRevealIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = textRef.current;
    const section = sectionRef.current;
    if (!el || !section) return;

    let killed = false;
    let tween: { scrollTrigger?: { kill: () => void }; kill: () => void } | null =
      null;

    (async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        if (killed) return;

        gsap.registerPlugin(ScrollTrigger);

        const words = INTRO.split(" ").map((word) => {
          const span = document.createElement("span");
          span.className = "reveal-word";
          span.textContent = word;
          return span;
        });

        el.replaceChildren();
        words.forEach((span, i) => {
          el.appendChild(span);
          if (i < words.length - 1) {
            el.appendChild(document.createTextNode(" "));
          }
        });

        tween = gsap.to(words, {
          opacity: 1,
          ease: "none",
          stagger: 0.06,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "center 40%",
            scrub: true,
          },
        });
      } catch {
        // Keep static text if animation libs fail.
      }
    })();

    return () => {
      killed = true;
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="home-intro">
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
