THE LEGENDARY TWELVE - DESKTOP USE + GITHUB BACKUP (v28)

RUN ON A COMPUTER (needs Python, python.org)
  Windows: double-click start_windows.bat
  Mac/Linux: run start_mac_linux.sh
  Always use the same address (http://localhost:8765). Memories live in the browser
  for that address. A different address = a different, empty copy, so use
  Export / Import (below) when moving between devices or addresses.

WHAT IS AND ISN'T OFFLINE
  Works offline after first load: all 12 assistants, the 360K-word dictionary and
  language pack (cached on first visit), your memories and knowledge.
  Not included: any neural AI / speech model. The assistants are rule-based and don't
  use one. Settings > "Offline readiness" shows what is really stored.

GITHUB-ONLY BACKUP (Settings > Backup & vault)
  1. On GitHub create a PRIVATE empty repository (e.g. legendary-twelve-backup).
  2. GitHub > Settings > Developer settings > Fine-grained tokens > new token:
     only that one repository, permission "Contents: Read and write", nothing else.
  3. In the app paste repository (owner/name), token and a passphrase you invent.
  4. Press "Back up everything now". Data is encrypted on your device first.
  The token stays on this device only. The passphrase is never in the repository.
  LOSE THE PASSPHRASE = BACKUPS CAN'T BE OPENED BY ANYONE.

RESTORE / NEW DEVICE
  Install the app, enter the same repository/token/passphrase, press "Show snapshots",
  pick one, "Restore". A safety copy of current data is saved first. Nothing local-only
  is deleted.

EXPORT / IMPORT FILE: moves everything without GitHub (encrypted or plain).

TOPIC ENCYCLOPEDIA (v29)
  165,341 offline topics in topics_1..64.json (about 22 MB). They download and cache the
  first time you open the app online (use Wi-Fi). Ask: "what is a wombat", "tell me about
  Texas", "who is Albert Einstein", "capital of Japan", "population of Brazil",
  "look up Swahili", "random topic". Data credits are in CREDITS.txt.
  Topics are word concepts (WordNet), world cities, countries, regions, languages and
  currencies. It is a reference list, not a full encyclopedia: no articles, no news.
