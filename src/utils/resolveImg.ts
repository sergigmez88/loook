import { existsSync } from 'node:fs';
import { join } from 'node:path';

const EXTS = ['png', 'jpg', 'jpeg', 'webp'];

export function resolveImg(src: string): string {
  if (!src || src.startsWith('http') || src.startsWith('//')) return src;
  const base = src.replace(/\.(png|jpe?g|webp)$/i, '');
  const publicDir = join(process.cwd(), 'public');
  for (const ext of EXTS) {
    if (existsSync(join(publicDir, `${base}.${ext}`))) return `${base}.${ext}`;
  }
  return src;
}
