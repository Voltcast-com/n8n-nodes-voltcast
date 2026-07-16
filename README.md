# @voltcast/n8n-nodes-voltcast

n8n community node for [Voltcast](https://voltcast.com) — European
electricity prices, forecasts, carbon intensity and optimization by API.
43 bidding zones at native 15-minute resolution, history to 2015, and price
forecasts whose accuracy is published daily (losses included) at
[voltcast.com/accuracy](https://voltcast.com/accuracy).

## Operations

| Operation | What it returns |
|---|---|
| Get Prices | Day-ahead prices for a zone/date, 15-minute native (EUR/MWh) |
| Get Forecast | P50 (P10/P90 on paid tiers) price curve up to 7 days ahead |
| Get Carbon Intensity | gCO2eq/kWh + green score from the live generation mix |
| Get Imbalance Prices | Imbalance prices incl. German reBAP and Belgian 1-minute NRT |
| Find Cheapest Window | Cheapest contiguous window for a load in the next 48h |

Declarative-style node — no custom execute code, no runtime dependencies.

## Installation

**Self-hosted n8n:** Settings → Community Nodes → Install →
`@voltcast/n8n-nodes-voltcast`

## Credentials

Create a **Voltcast API** credential with an API key from
[voltcast.com/dashboard](https://voltcast.com/dashboard). The free tier
(DE-LU, no card) works; paid tiers unlock all zones and quantile forecasts.
The credential is verified against `GET /api/v1/zones` on save.

## Compatibility

Requires n8n 1.x (tested against `n8n-workflow` ≥ 1.70). Node.js ≥ 20.

## Resources

- [Voltcast API docs](https://voltcast.com/docs)
- [Live forecast accuracy scorecard](https://voltcast.com/accuracy)
- [Starter workflow (plain HTTP variant)](https://voltcast.com/integrations/n8n-voltcast-workflow.json)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

## Development

```bash
npm install
npm run build   # tsc + copy the node icon into dist/
```

Releases are published from GitHub Actions with an npm provenance
statement (`.github/workflows/publish.yml`) — push a `v*.*.*` tag.

## License

[MIT](LICENSE)
