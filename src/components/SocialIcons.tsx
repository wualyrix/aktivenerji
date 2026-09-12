import { site } from "@/data/site";

type Props = {
  className?: string;
  tone?: "light" | "dark";
};

export function SocialIcons({ className = "", tone = "dark" }: Props) {
  return (
    <div className={`social-icons social-icons--${tone} ${className}`.trim()}>
      <a
        href={site.social.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 9h3V6h-3c-1.7 0-3 1.4-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
        </svg>
      </a>
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6.2-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 9.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
        </svg>
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.3-1.4A9.9 9.9 0 1 0 12.04 2zm5.8 14.1c-.24.68-1.4 1.24-1.94 1.32-.5.08-1.14.11-1.84-.12-.42-.14-.97-.32-1.67-.63a8.5 8.5 0 0 1-3.73-3.5c-.4-.68-.83-1.6-.8-2.4.03-.8.45-1.5.93-1.9.28-.24.64-.3.95-.3h.7c.22 0 .52-.08.8.62.3.74.98 2.4 1.07 2.57.09.17.14.37.03.58-.12.24-.18.38-.35.58-.17.2-.36.45-.51.6-.17.17-.35.35-.15.68.2.34.9 1.48 1.93 2.4 1.33 1.17 2.45 1.54 2.8 1.7.34.17.54.14.74-.08.2-.22.84-.98 1.06-1.32.22-.34.45-.28.75-.17.3.12 1.9.9 2.22 1.06.32.17.54.25.62.38.08.14.08.78-.16 1.46z" />
        </svg>
      </a>
    </div>
  );
}
