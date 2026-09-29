/**
 * Helpers for showcase assets.
 *
 * `showcase.md` files reference evidence with paths relative to their project folder,
 * e.g. "./evidence/public/p03-bloodhound-after.png". A prebuild script copies everything
 * from `projects/<folder>/evidence/public/**` into `site/public/projects/<folder>/`, so the
 * public URL for the example above is "/projects/p03-ad-security/p03-bloodhound-after.png".
 */

export function projectFolder(repoPath: string): string {
  return repoPath.split('/').filter(Boolean).pop() ?? '';
}

export function assetUrl(repoPath: string, src: string): string {
  if (!src) return '';
  if (src.startsWith('/') || src.startsWith('http')) return src;
  const clean = src.replace(/^\.\//, '').replace(/^evidence\/public\//, '');
  return `/projects/${projectFolder(repoPath)}/${clean}`;
}

import { GITHUB_REPO } from '../consts';

export function repoUrl(repoPath: string): string {
  // Link into the public GitHub repository.
  return `${GITHUB_REPO}/tree/main/${repoPath}`;
}

export function planUrl(planFile: string): string {
  return `${GITHUB_REPO}/blob/main/docs/plan/${planFile}`;
}

export function sortByOrder<T extends { data: { order: number } }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => a.data.order - b.data.order);
}
