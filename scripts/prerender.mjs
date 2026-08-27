import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const indexPath = path.join(root, "dist", "index.html");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const template = fs.readFileSync(indexPath, "utf8");
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error(`prerender: could not find ${marker} in dist/index.html`);
}

// Function replacer so `$` sequences in the markup are not treated as
// replacement patterns.
const out = template.replace(marker, () => `<div id="root">${appHtml}</div>`);
fs.writeFileSync(indexPath, out);

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });

console.log(`prerender: injected ${appHtml.length} chars of HTML into dist/index.html`);
