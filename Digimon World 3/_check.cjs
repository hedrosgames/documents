/**
 * Consistency check for Digimon World 3 docs.
 * node _check.cjs
 */
const fs = require("fs");
const path = require("path");

const DIR = __dirname;
const NAV = [
  "digimon-world-3-agumon-tree.html",
  "digimon-world-3-steal-items.html",
  "digimon-world-3-boosters.html",
  "digimon-world-3-elemental-weakness.html",
  "digimon-world-3-monster-stats.html",
  "digimon-world-3-level-exp.html",
  "digimon-world-3-walkthrough.html",
  "digimon-world-3-routes.html",
  "digimon-world-3-balance-gdd.html"
];

const files = [...NAV, "index.html"];
let fails = 0;

function fail(msg) {
  console.error("FAIL:", msg);
  fails++;
}

for (const f of files) {
  const fp = path.join(DIR, f);
  if (!fs.existsSync(fp)) { fail(f + " missing"); continue; }
  const h = fs.readFileSync(fp, "utf8");
  if (!h.includes('href="dw3-shell.css"')) fail(f + " missing dw3-shell.css");
  if (!/<html[^>]*lang="pt-BR"/i.test(h)) fail(f + " lang not pt-BR");
  if (f !== "index.html") {
    const navOrder = [...h.matchAll(/href="(digimon-world-3-[a-z-]+\.html)"/g)]
      .map(m => m[1])
      .filter((v, i, a) => NAV.includes(v) && a.indexOf(v) === i);
    // first 9 unique guide links in doc-nav should match NAV order
    const slice = navOrder.slice(0, 9);
    if (slice.join() !== NAV.join()) {
      fail(f + " nav order: " + slice.join(" → "));
    }
  }
}

if (!fs.existsSync(path.join(DIR, "dw3-shell.css"))) fail("dw3-shell.css missing");

const wt = fs.readFileSync(path.join(DIR, "digimon-world-3-walkthrough.html"), "utf8");
const placeRefs = [...wt.matchAll(/href="#(place-[a-z0-9-]+)"/g)].map(m => m[1]);
const placeIds = [...wt.matchAll(/id="(place-[a-z0-9-]+)"/g)].map(m => m[1]);
const missing = [...new Set(placeRefs)].filter(r => !placeIds.includes(r));
if (missing.length) fail("WT missing place anchors: " + missing.join(", "));

const routes = fs.readFileSync(path.join(DIR, "digimon-world-3-routes.html"), "utf8");
const i = routes.indexOf("const ROUTES =");
const j = routes.indexOf("const WORLD_LABEL");
const ROUTES = eval(routes.slice(i + "const ROUTES =".length, j).replace(/;\s*$/, ""));
const ids = new Set(ROUTES.map(r => r.id));
ROUTES.forEach(r => {
  r.destinations.forEach(d => {
    if (d.link && !ids.has(d.link)) fail("Routes bad link " + r.id + " → " + d.link);
  });
});

const jargon = ["bifurcação", "rede de três", "Todos os destinos visíveis", "Seabed com bifurcação"];
jargon.forEach(j => {
  for (const f of NAV) {
    const h = fs.readFileSync(path.join(DIR, f), "utf8");
    // ignore JSON blobs / comments mentioning GameFAQs as source attribution in data
    if (j === "FAQs") continue;
    if (h.includes(j)) fail(f + " jargon: " + j);
  }
});

if (fails) {
  console.error("\n" + fails + " failure(s)");
  process.exit(1);
}
console.log("OK ·", files.length, "html ·", ROUTES.length, "routes ·", placeIds.length, "places ·", placeRefs.length, "place links");
