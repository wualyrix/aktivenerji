export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";

/** Prefix public asset paths for GitHub Pages (/aktivenerji). */
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
