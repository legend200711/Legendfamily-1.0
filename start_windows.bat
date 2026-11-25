@echo off
cd /d "%~dp0"
echo Starting The Legendary Twelve at http://localhost:8765  (keep this window open)
start "" http://localhost:8765
python -m http.server 8765 || py -m http.server 8765
