/// <reference types="vite/client" />

/**
 * Prepends Vite's BASE_URL so assets resolve correctly on both
 * localhost (base = "/") and GitHub Pages (base = "/abhishek-portfolio/").
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
