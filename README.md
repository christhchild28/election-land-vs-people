# Land vs people

Interactive election cartograms. Each page opens on a country's real map; tap a region and it morphs in place from land area to a hexagon cluster sized by population (or voters, or electoral votes). A dashed outline keeps the true shape.

**Live:** https://christhchild28.github.io/election-land-vs-people/

| Page | Election | Hexagon = | Regions |
|---|---|---|---|
| [`usa/`](usa/) | 2024 presidential | electoral votes | 50 states + DC |
| [`brazil/`](brazil/) | 2026 presidential runoff | ~250,000 registered voters | 27 states |
| [`bulgaria/`](bulgaria/) | April 2026 parliamentary | ~100,000 registered voters | 28 provinces + abroad |
| [`trinidad-tobago/`](trinidad-tobago/) | 2025 general | population | 41 constituencies |

Each page is a single standalone HTML file (D3 7.9.0 from cdnjs, Google Fonts). No build step is needed to host them.

## Using the pages

Tap a region to resize it; tap several to compare; drag a box to select many; use the menu to search, sort and switch the colour mode; Rearrange lets you drag hexagons (saved in your browser). On phones the details panel is a bottom sheet.

## Data sources and caveats

Full source notes are in each page's footnote. Summary:

**United States**
- Results aggregated from a public county-level GitHub dataset of 2020 and 2024 presidential results (CSVs in `scripts/usa/`). State boundaries are from public-domain US Census-derived TopoJSON.
- Turnout figures (from Ballotpedia) are approximate.
- Swing is the change in Harris/Biden two-party share vs 2020, capped at 6 points for colour. "Flipped" means the popular-vote winner changed.
- Maine and Nebraska electoral-vote splits are shown. Alaska is drawn at 40% scale and Hawaii is an inset; DC is drawn as an enlarged circle.
- Texas's hexagon cluster stays stringy whatever the layout seed.

**Brazil**
- State results are first-round/runoff totals by state as entered in `scripts/brazil/results.py`. Turnout change is missing for RO, TO, AL, PB, PI and SE.

**Bulgaria**
- Province-level results for the April 2026 election. There is no 2024 comparison, and final turnout by province was not obtainable, so turnout is shown against the domestic average (48.1%).
- Plovdiv city and province share one shape; Sofia city's three districts share one. "Abroad" appears as two small hexes in the Population view.

**Trinidad and Tobago**
- Constituency results for 2025. Swing is missing for Tobago constituencies.

## Repository layout

```
index.html            landing page
usa/ brazil/ bulgaria/ trinidad-tobago/   the pages (index.html each)
assets/thumbs/        landing-page thumbnails
scripts/              reference build pipelines and data
```

`scripts/` holds the Python pipelines (projection, hexagon packing by annealing, piece generation, template patching and assembly) and intermediate data. They are reference material, not turnkey: several scripts contain absolute paths from the original scratch workspace and need adjusting to run.

## Licence

Code: MIT (see `LICENSE`). Election data and boundaries stay under their original sources' terms.
