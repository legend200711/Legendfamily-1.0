#!/bin/sh
cd "$(dirname "$0")"
echo "Starting The Legendary Twelve at http://localhost:8765 (Ctrl+C to stop)"
( sleep 1; (xdg-open http://localhost:8765 || open http://localhost:8765) >/dev/null 2>&1 ) &
python3 -m http.server 8765
