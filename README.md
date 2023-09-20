# Bulkdata Sniffer 🤥

This tool will read the bulkdata found at [Scryfall's API](https://scryfall.com/docs/api/bulk-data). I'd recommend using the 'default cards' option

You'll find the outputted JSON at `./data/outpu/[the file name here].json`

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts -set=[your set code here] -path=[path to your oracle-cards.json file]
```
