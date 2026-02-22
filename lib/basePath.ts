// Prepends the GitHub Pages base path to asset URLs.
// In local dev (no env var set), returns the path unchanged.
// In CI build, NEXT_PUBLIC_BASE_PATH=/prathmesh_honrao is injected.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
