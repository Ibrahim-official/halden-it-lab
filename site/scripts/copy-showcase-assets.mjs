/**
 * Copies sanitized showcase assets from the project folders into the site's public directory.
 *
 *   projects/<folder>/evidence/public/**  ->  site/public/projects/<folder>/**
 *
 * The site's showcase frontmatter references evidence with paths relative to the project folder
 * (e.g. "./evidence/public/p03-hero.svg"). Those files are never committed under site/public —
 * they are copied at dev/build time from the single source of truth.
 *
 * Runs automatically via the `predev` and `prebuild` npm scripts.
 */
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const repoRoot = resolve(siteRoot, '..');
const projectsDir = join(repoRoot, 'projects');
const targetRoot = join(siteRoot, 'public', 'projects');

if (!existsSync(projectsDir)) {
  console.warn(`[assets] No projects directory at ${projectsDir} — skipping.`);
  process.exit(0);
}

// Rebuild the target from scratch so removed evidence disappears from the site too.
rmSync(targetRoot, { recursive: true, force: true });
mkdirSync(targetRoot, { recursive: true });

let copied = 0;
for (const entry of readdirSync(projectsDir)) {
  const source = join(projectsDir, entry, 'evidence', 'public');
  if (!existsSync(source) || !statSync(source).isDirectory()) continue;

  const files = readdirSync(source, { recursive: true }).filter((f) =>
    statSync(join(source, String(f))).isFile(),
  );
  if (files.length === 0) continue;

  const target = join(targetRoot, entry);
  mkdirSync(target, { recursive: true });
  cpSync(source, target, { recursive: true });
  copied += files.length;
  console.log(`[assets] ${entry}: ${files.length} file(s)`);
}

console.log(`[assets] Done — ${copied} file(s) copied to public/projects/.`);
