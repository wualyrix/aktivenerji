"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-bar">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Aktiv Enerji"
            width={160}
            height={64}
            priority
          />
        </Link>

        <nav className={`nav${open ? " open" : ""}`} aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <Link href="/services" className="btn btn-ghost-dark">
            What we do
          </Link>
          <Link href="/contact" className="btn btn-orange">
            Contact
          </Link>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
