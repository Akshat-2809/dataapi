/** All page copy and numbers, ported word for word from design/project/Main.dc.html. */

/* hero demo */
export type Format = "toon" | "json" | "md";

export const SAMPLES: { label: string; url: string; out: Record<Format, [head: string, body: string]> }[] = [
  {
    label: "Leadership",
    url: "api.dataapi.live/autoex/get_people/?url=apple.com/leadership",
    out: {
      toon: ['@autoex:v3 entity="leadership" src="apple.com/leadership"\n', '[team | name, title, role]\n1: "Tim Cook" | "CEO" | "Executive"\n2: "Craig Federighi" | "SVP Software" | "Executive"\n3: "Deirdre O\'Brien" | "SVP Retail" | "Executive"'],
      json: ["", '{\n  "entity": "leadership",\n  "team": [\n    {"name": "Tim Cook", "title": "CEO"},\n    {"name": "Craig Federighi", "title": "SVP Software"},\n    {"name": "Deirdre O\'Brien", "title": "SVP Retail"}\n  ]\n}'],
      md: ["# Leadership\n", "\n| Name | Title |\n|---|---|\n| Tim Cook | CEO |\n| Craig Federighi | SVP Software |\n| Deirdre O'Brien | SVP Retail |"],
    },
  },
  {
    label: "Table",
    url: "api.dataapi.live/autoex/get_tables/?url=…/cloud-market-share",
    out: {
      toon: ['@autoex:v3 topic="Q3 Cloud Infrastructure Market Share"\n', "[cloud_providers | provider, revenue_b, growth]\nAWS | 28.4 | +19%\nAzure | 22.1 | +29%\nGoogle Cloud | 11.3 | +35%\nOracle | 3.2 | +52%\nAlibaba | 4.8 | +7%"],
      json: ["", '{\n  "cloud_providers": [\n    {"provider": "AWS", "revenue_b": 28.4, "growth": "+19%"},\n    {"provider": "Azure", "revenue_b": 22.1, "growth": "+29%"},\n    {"provider": "Google Cloud", "revenue_b": 11.3, "growth": "+35%"}\n  ]\n}'],
      md: ["## Q3 Cloud Infrastructure Market Share\n", "\n| Provider | Revenue ($B) | Growth |\n|---|---|---|\n| AWS | 28.4 | +19% |\n| Azure | 22.1 | +29% |\n| Google Cloud | 11.3 | +35% |"],
    },
  },
  {
    label: "Article",
    url: "api.dataapi.live/autoex/get_md/?url=docs.docker.com/engine/install/",
    out: {
      toon: ['@autoex:v3 type="article" src="docs.docker.com"\n', '[sections | heading, level]\n"Install Docker Engine" | 1\n"Supported Operating Systems" | 2\n"Quick Installation Script" | 2'],
      json: ["", '{\n  "title": "Install Docker Engine",\n  "sections": [\n    "Supported Operating Systems",\n    "Quick Installation Script"\n  ]\n}'],
      md: ["# Install Docker Engine\n", "\nLearn how to install Docker Engine on your operating system.\n\n## Supported Operating Systems\n\n| Distribution | Architecture |\n|---|---|\n| Ubuntu 24.04 LTS | x86_64, arm64 |"],
    },
  },
];

export const FORMATS: { id: Format; label: string; tokens: number; note: string }[] = [
  { id: "toon", label: "TOON_COMPACT", tokens: 680, note: "tokens · −97.6%" },
  { id: "json", label: "JSON", tokens: 4200, note: "tokens · −85.0%" },
  { id: "md", label: "Markdown", tokens: 1150, note: "tokens · clean Markdown" },
];

/** One slice of a scraped page, as a crawler sees it. `k` parts are the tags the wall highlights. */
export const RAW_NOISE: { t: string; k?: boolean }[] = [
  { t: '<div class="nav-wrapper js-sticky" data-track="hdr"><script src="/static/js/vendor.8f3a.js" async></script>' },
  { t: '<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/>', k: true },
  { t: '<style>.cookie-banner{position:fixed;z-index:9999}</style><div class="gdpr-overlay" aria-hidden="true"></div>' },
  { t: '<div class="css-1x8w9 e1qz4 ad-slot-728">', k: true },
  { t: '<noscript><img src="//px.tracker/collect?id=88"></noscript><div class="leader-card"><img class="lazy" data-src="/i/42.webp"><h3 class="t">' },
];

export const TICKER = [
  ["97.6%", "token reduction with TOON_COMPACT vs raw HTML"],
  ["18 ms", "direct-socket recognition latency"],
  ["13", "production gateways: 7 GET + 6 POST"],
  ["0", "CSS selectors to babysit. Self-adapting semantics."],
];

/* the problem */
export const RACE = [
  { name: "Raw HTML / DOM dump", meta: "baseline · 8,500 ms", w: "100%", color: "#FF5B2E", tokens: "28,000" },
  { name: "Standard JSON", meta: "−85.0% · 22 ms", w: "15%", color: "#9A9D94", tokens: "4,200" },
  { name: "TOON", meta: "−95.9% · 20 ms", w: "4.1%", color: "#4FC08D", tokens: "1,150" },
  { name: "TOON_COMPACT", meta: "−97.6% · 18 ms", w: "2.4%", color: "var(--sig)", tokens: "680" },
];

/* formats */
export const OUTPUTS = [
  {
    title: "Clean Markdown", sub: "For RAG, Claude Desktop, Cursor rules", pill: "24–180 ms", ep: "GET /autoex/get_md/?url=…", file: "content.md",
    pre: "# Install Docker Engine\n\nLearn how to install Docker Engine on your operating system.\n\n## Supported Operating Systems\n\n| Distribution | Architecture | Support Status |\n|---|---|---|\n| Ubuntu 24.04 LTS | x86_64, arm64 | Tier 1 (Active) |\n| Debian 12 (Bookworm) | x86_64, arm64 | Tier 1 (Active) |",
    li: ["Pure semantic headings (# H1, ## H2, ### H3)", "Links with anchor text preserved", "Fenced code blocks with language identification", "95%+ token reduction vs raw HTML"],
  },
  {
    title: "Deterministic JSON", sub: "Strictly typed, schema-guaranteed", pill: "typed", ep: "GET /autoex/get_people/?url=…", file: "people.json",
    pre: '{\n  "entity": "leadership",\n  "team": [\n    {"name": "Tim Cook", "title": "CEO", "role": "Executive"},\n    {"name": "Craig Federighi", "title": "SVP Software", "role": "Executive"}\n  ]\n}',
    li: ["Strictly typed output with schema guarantee", "Zero LLM hallucinations", "Six domain endpoints: Products, Articles, Tables, People, Lists, Markdown"],
  },
  {
    title: "TOON Compact", sub: "Token-optimized object notation", pill: "−82.5%", ep: "GET /autoex/get_list_plain/?url=…", file: "records.toon",
    pre: '@autoex:v3 topic="Q3 Cloud Infrastructure Market Share" date="2026-09-12"\n[cloud_providers | provider, revenue_b, growth]\nAWS | 28.4 | +19%\nAzure | 22.1 | +29%\nGoogle Cloud | 11.3 | +35%',
    li: ["Eliminates punctuation and schema redundancy", "Keeps full LLM reasoning accuracy", "Leaves the context window open for reasoning"],
  },
  {
    title: "POST Plain HTML", sub: "Send in-memory HTML from your own browser agent", pill: "0 ms fetch", ep: "POST /autoex/… (plain HTML body)", file: "request.sh",
    pre: '# Already have the page in Playwright or Puppeteer?\n# Send the in-memory HTML: no fetch, sub-15 ms DOM compression.\ncurl -X POST "https://api.dataapi.live/autoex/…" \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  --data-binary @page.html',
    li: ["Zero-proxy: nothing is fetched again", "Pairs with your existing browser agent", "6 POST streamers among the 13 gateways"],
  },
];

/* calculator: requests/day × 30 × tokens/page × price / 1,000,000 */
export const RAW_TOKENS = 28000;
export const COMPACT_TOKENS = 680;
export const MODELS: [label: string, pricePerM: number][] = [
  ["Claude Sonnet 5 · $2.00/1M", 2],
  ["Claude Opus 5 · $5.00/1M", 5],
  ["Gemini 3.8 Flash · $0.75/1M", 0.75],
  ["DeepSeek V4.1 Flash · $0.30/1M", 0.3],
];
export const VOLUMES: [label: string, perDay: number][] = [
  ["200 · solo", 200],
  ["2,500 · agent fleet", 2500],
  ["10,000 · production", 10000],
  ["25,000 · scale", 25000],
];

/* MCP */
export const MCP_TOOLS = ["extract_product", "extract_tables", "extract_people", "extract_article", "extract_list", "read_webpage", "search_web"];
export const WORKS_WITH = ["Claude Desktop", "Cursor IDE", "LangChain", "CrewAI", "AutoGen", "LlamaIndex"];
export const CODES: [label: string, code: string][] = [
  ["MCP config", '{\n  "mcpServers": {\n    "dataapi": {\n      "command": "python3",\n      "args": ["-m", "dataapi_mcp"],\n      "env": {\n        "DATAAPI_KEY": "dapi_live_your_api_key",\n        "DATAAPI_BASE_URL": "https://api.dataapi.live"\n      }\n    }\n  }\n}'],
  ["cURL", '# Extract structured leadership profiles\ncurl -X GET "https://api.dataapi.live/autoex/get_people/?url=https://apple.com/leadership" \\\n  -H "x-api-key: YOUR_API_KEY"'],
  ["Python", 'import requests\n\nr = requests.get(\n    "https://api.dataapi.live/autoex/get_md/",\n    params={"url": "https://docs.docker.com/engine/install/"},\n    headers={"x-api-key": "YOUR_API_KEY"},\n)\nprint(r.text)'],
];

/* compare */
export const COMPARE_HEAD = ["Capability", "DataAPI direct recognition", "Probabilistic AI scrapers", "Traditional CSS / XPath"];
export const COMPARE_ROWS = [
  ["Extraction determinism", "100% strict type & schema guarantee", "Probabilistic LLM extract", "Fragile (regex / DOM tree)"],
  ["Selector maintenance", "0 hrs / month, self-adapting", "Occasional prompt tuning", "15–20 hrs / month"],
  ["Recognition latency (p95)", "18–32 ms, direct socket", "800–1,500 ms", "1,200–3,500 ms"],
  ["Token efficiency for LLMs", "Clean Markdown, zero noise", "Raw HTML / standard Markdown", "Full DOM bloat (300 KB+)"],
  ["Network architecture", "Fast TLS socket first + auto browser fallback", "Headless browser for all requests", "Single-thread Puppeteer cluster"],
];

/* founder */
export const FOUNDER_FACTS = [
  ["Based", "Navi Mumbai, India"],
  ["Building", "DataAPI, since Sep 2025"],
  ["Before", "Director, Course5i"],
  ["Studied", "Valliammai Engineering College"],
];
export const FOUNDER_BOOK = "Artificial Intelligence: A Cook's Perspective";
export const FOUNDER_STATS = [
  ["13M", "websites parsed for people information, at 85% accuracy, in a system he architected"],
  ["300+", "person-years a year saved through custom crawlers and automation tools"],
  ["700+", "websites designed and delivered by teams he directed"],
  ["200+", "team members upskilled through training he led"],
];
export const CAREER: { y: string; t: string; d: string; now?: boolean }[] = [
  { y: "2025 – now", t: "DataAPI · Founder & CTO", d: "Building AutoEx™, deterministic web content recognition for AI agents. Live on Product Hunt.", now: true },
  { y: "2022 – 2025", t: "Course5i · Director", d: "A configurable platform pulling e-commerce listings and product detail within 30 minutes, with multi-language extraction and image object detection." },
  { y: "2022", t: "GoSharpener · CTO", d: "Freelance." },
  { y: "2021 – 2022", t: "Course5i · Independent consultant", d: "A config-driven common extraction engine: browser and non-browser requests, pagination, JSON APIs, live selector validation." },
  { y: "2021", t: "Springbord · Senior Manager, Technology", d: "Built the MVP of a unified, configurable extraction platform for any website." },
  { y: "2021", t: "VeeTee Technologies · Principal Consultant", d: "Large-scale SERP and Google Maps data pipelines." },
  { y: "2019 – 2020", t: "Merit · Technical Manager", d: "Then Manager at Course5i in 2020." },
  { y: "2014 – 2019", t: "Scope e-Knowledge Center", d: "Technical Innovation Manager and Senior R&D Manager. Ethical crawling under every site's robots.txt." },
];
