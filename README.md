# Strixhaven D&D Campaign Site

A static website for the Strixhaven Dungeons & Dragons campaign. The project is built with multiple HTML pages, shared CSS styling, and small JavaScript modules that handle background effects and dynamic content.

## Tech Stack
- **HTML5**: Separate pages for the landing view, player characters, NPCs, lore, and locations.
- **CSS**: Global styling lives in `style.css`, while page-specific styles are found under `assets/css/`.
- **JavaScript**:
  - Animated rune and spark backgrounds via `assets/js/runes.js` and `assets/js/spark.js`.
  - Dynamic NPC cards loaded from `npcs/npcs.json` through `assets/js/npc-script.js`.
- **Google Fonts**: `Cinzel Decorative` and `Uncial Antiqua` power the thematic headings.

## Project Structure
- `index.html` – campaign landing page.
- `characters.html` + `characters/` – roster and detail pages for player characters.
- `npcs.html` + `npcs/` – NPC list and JSON data that is fetched at runtime.
- `lore.html`, `locations.html` – sections for lore and key locations (currently under construction).
- `style.css` – global layout, background, and animation rules.
- `assets/css/` – supplemental styles scoped to specific subpages.
- `assets/js/` – scripts for visual effects and data fetching.
- `images/` – artwork for characters, colleges, and backgrounds.

## Getting Started
1. Clone or download the repository to your machine.
2. Launch a lightweight development server (required so that `fetch` can read the JSON file), for example:
   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000/index.html` in your browser.

## Next Steps
- Fill out the content on `lore.html` and `locations.html`.
- Adjust the script tag paths so every JavaScript module loads correctly from `assets/js/`.
- Expand `npcs/npcs.json` with more entries or organize the data by Strixhaven college.
