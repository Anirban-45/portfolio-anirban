import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOT = "public";
const DRY = process.argv.includes("--dry");

// Don't touch anything smaller than this — not worth the risk
const MIN_BYTES = 200 * 1024;

// Max width to keep. 1600 = crisp at ~800px display on 2x screens.
const MAX_WIDTH = 1600;

// Filenames to leave completely alone
const SKIP = new Set(["favicon.png", "og.png"]);

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk(ROOT);
let before = 0, after = 0, changed = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

  const name = file.split(/[\\/]/).pop();
  if (SKIP.has(name)) continue;

  const orig = await readFile(file);
  if (orig.length < MIN_BYTES) continue;

  const meta = await sharp(orig).metadata();
  let pipe = sharp(orig).rotate(); // honors EXIF orientation

  if (meta.width > MAX_WIDTH) {
    pipe = pipe.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  const out =
    ext === ".png"
      ? await pipe.png({ quality: 80, compressionLevel: 9, palette: true, effort: 10 }).toBuffer()
      : await pipe.jpeg({ quality: 82, mozjpeg: true, progressive: true }).toBuffer();

  before += orig.length;

  // Never write a file that got bigger
  if (out.length >= orig.length) {
    after += orig.length;
    console.log(`skip  ${name.padEnd(32)} ${kb(orig.length)} (no gain)`);
    continue;
  }

  after += out.length;
  changed++;
  const pct = Math.round((1 - out.length / orig.length) * 100);
  console.log(
    `${DRY ? "DRY  " : "write"} ${name.padEnd(32)} ${meta.width}px ${kb(orig.length)} -> ${kb(out.length)}  -${pct}%`
  );

  if (!DRY) await writeFile(file, out);
}

function kb(n) { return (n / 1024 / 1024).toFixed(2) + "MB"; }

console.log(
  `\n${changed} files. ${kb(before)} -> ${kb(after)} (-${Math.round((1 - after / before) * 100)}%)`
);
