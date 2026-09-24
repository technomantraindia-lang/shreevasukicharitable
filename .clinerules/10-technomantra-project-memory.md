# Technomantra Project Memory

> This is a persistent locator map, not a claim that file contents are current. Read each target only once per task and rely on normal invalidation after edits.

- Workspace: shreevasukicharitabletrust
- Technology: Node.js/npm
- Active file at refresh: donation-pending.html
- Local code graph: 22 files · 7 edges · 0 matched flows
- Refreshed: 2026-09-22T09:36:38.902Z

## Framework Intelligence (V4.7.8)
- Profiles: node, html-static
- Package manager: npm
- Node framework: Node.js

### Entry / bootstrap candidates
- server.js
- index.html

### Node route / backend symbols
- api/ccavenue-crypto.js: getAlgorithmKey, getIv, encrypt, decrypt
- api/ccavenue-response.js: getSiteUrl, handler, orderStatus
- api/create-payment.js: getSiteUrl, createOrderId, handler, cleanMobile, cleanPan
- server.js: POST /api/contact

### Node route -> handler graph
- server.js: POST /api/contact -> handler

### Node handler/service/DB chains
- api/ccavenue-response.js -> api/ccavenue-crypto.js
- api/create-payment.js -> api/ccavenue-crypto.js

### Backend API contracts
- server.js: POST /api/contact -> handler

### Safe runtime configuration hints
- server.js: env PORT

### API / client services
- api/ccavenue-crypto.js
- api/ccavenue-response.js
- api/create-payment.js

### Node routes
- server.js

### Available validation scripts
- start: node server.js

### Local dependency hints
- api/ccavenue-response.js -> api/ccavenue-crypto.js
- api/create-payment.js -> api/ccavenue-crypto.js

### Reverse dependency hints
- api/ccavenue-crypto.js <- api/ccavenue-response.js, api/create-payment.js

## Recently edited files
- None recorded yet

## High-value project files
- donation-pending.html
- index.html
- package.json
- gallery-page.html
- trustee-page.html
- .claude/agents/kfc/spec-design.md
- .claude/agents/kfc/spec-impl.md
- .claude/agents/kfc/spec-judge.md
- .claude/agents/kfc/spec-requirements.md
- .claude/agents/kfc/spec-system-prompt-loader.md
- .claude/agents/kfc/spec-tasks.md
- .claude/agents/kfc/spec-test.md
- .claude/settings/kfc-settings.json
- .claude/system-prompts/spec-workflow-starter.md
- .clinerules/05-technomantra-execution-mode.md
- .clinerules/06-technomantra-developer-mode.md
- .clinerules/08-technomantra-task-watchdog.md
- .clinerules/09-technomantra-multitask-isolation.md
- .clinerules/10-technomantra-project-memory.md
- .clinerules/11-technomantra-code-knowledge.md
- .clinerules/12-technomantra-task-capsules.md
- .clinerules/13-technomantra-runtime-price-optimizer.md
- .clinerules/90-technomantra-selected-agent.md
- .clinerules/technomantra-developer-learning.md
- .clinerules/technomantra-team-learning.md
- .vscode/settings.json
- .vscode/technomantra-project.json
- about-us.html
- api/ccavenue-crypto.js
- api/ccavenue-response.js
- api/create-payment.js
- CCAVENUE_SETUP.md
- contact-us.html
- contact.html
- donate.html
- donation-failed.html
- donation-success.html
- functions.php
- gallery.html
- index.backup-before-hero.html
- send-mail.php
- server.js
- trustee.html
- vatsalya-group.html
- vatsalya.html
- vatsalyagroup.html
- vercel.json
