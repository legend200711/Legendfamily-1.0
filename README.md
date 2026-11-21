# LEGEND FAMILY — Unified AI Interface
## Phase 2 — Standalone Application

---

## What This Is

LEGEND FAMILY is the unified interface for the complete ten-assistant AI ecosystem.
It runs as an independent Python HTTP server + Microsoft Edge --app= window.

**This application does NOT modify any existing project.**

---

## The Ten Assistants

### OG FIVE (Shadow Nexus Social Core ecosystem)

| Assistant         | Role                         | Color    |
|-------------------|------------------------------|----------|
| Shadow Reaper     | Primary Leader & Coordinator | Dark Red |
| Legendary Reaper  | Music & Radio AI             | Purple   |
| FALLEN            | Research & Knowledge         | Dark     |
| Axle Spike        | Personal Assistant           | Blue     |
| Monica            | Support Assistant            | Purple   |

### LEGENDARY FIVE (Local AI assistants)

| Assistant | Role                        | Color  |
|-----------|-----------------------------|--------|
| ELITE     | Master Computer Controller  | Yellow |
| PEPPER    | Personal Email Assistant    | Purple |
| MIDNIGHT  | System Performance          | Red    |
| LUNA      | Music & Media               | Blue   |
| SIMBA     | Digital Investigator        | Green  |

---

## Running the App

```
START_LEGEND_FAMILY.bat
```
or:
```
python server.py
```

The server binds to `http://127.0.0.1:8000` only (loopback, never exposed to network).
Microsoft Edge opens automatically in `--app=` mode (no browser chrome).

Default passphrase: `legend_family_phase2`
Set a custom passphrase with the environment variable: `LF_PASSPHRASE=your_passphrase`

---

## Stopping the App

- Press `Ctrl+C` in the terminal
- Or use the `⏻` button inside the interface
- Or run `STOP_LEGEND_FAMILY.bat`

---

## Running Tests

```
python test_legend_family.py
```

Tests run on port 18765 (not 8000) so they don't interfere with a running instance.

---

## Architecture

```
legend_family/
├── server.py                ← Python stdlib HTTP server (no Flask)
├── START_LEGEND_FAMILY.bat  ← Launch script
├── STOP_LEGEND_FAMILY.bat   ← Stop script
├── test_legend_family.py    ← Phase 2 test suite
├── README.md
├── static/
│   ├── index.html           ← Full unified interface
│   ├── style.css            ← Dark theme stylesheet
│   └── app.js               ← Frontend application logic
└── logs/
    └── legend_family.log    ← Runtime log (auto-created)
```

---

## Ports Used (Read-Only Reference — Do Not Touch)

| Port  | Service                            |
|-------|------------------------------------|
| 7432  | FALLEN HTTP bridge                 |
| 7474  | Shadow Nexus Social Core gateway   |
| 5001  | Legendary Reaper web API           |
| 11434 | Ollama inference backend           |
| 8000  | **Legend Family (this app)**       |

---

## Security

- Server binds to `127.0.0.1` only — never `0.0.0.0`
- Session token authentication via secure HttpOnly cookie
- HMAC-SHA256 request signing on all chat API calls
- Path traversal protection on static file serving
- Input validation: max 4096 chars per message, assistant ID whitelist
- Error logging to `logs/legend_family.log`
- Graceful shutdown via SIGINT/SIGTERM or API endpoint

---

## Phase 2 Status

- ✓ All ten assistant profile cards rendered
- ✓ OG Five and Legendary Five sections
- ✓ Central conversation workspace
- ✓ Per-assistant status indicators
- ✓ Shadow Nexus database status indicators
- ✓ Mock/simulated responses for all ten assistants
- ✓ Authentication and session management
- ✓ HMAC request validation
- ✓ Error logging
- ✓ Safe shutdown
- ⏸ ShadowEngine: DISABLED
- ⏸ Live assistant integration: Phase 3 pending authorization
- ⏸ Monica archive seeding: Phase 3 pending authorization

---

## Isolation Guarantees

This application:
- Does NOT modify Legendary-Reaper-Radio-Core-Update
- Does NOT modify Axle-Spike-AI
- Does NOT modify SHADOW NEXUS SOCIAL CORE
- Does NOT modify macia (Monica)
- Does NOT modify ShadowReaperKnowledge
- Does NOT modify FALLEN's HTTP bridge (port 7432)
- Does NOT merge databases
- Does NOT touch Ollama configuration
- Does NOT seed Monica's archive
