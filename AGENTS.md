# Recipe Format

Future recipes should follow the current site format:

- Keep the page simple: black text on white, with a readable hero image and a light fade behind the title.
- Put a compact, scaled ingredient checklist near the top.
- Use a single `Process` section for cooking instructions.
- Write process steps naturally, with quantities embedded in the sentence: for example, "Heat 4 tablespoons of coconut oil..." rather than separating ingredients into "you need" boxes.
- Keep each process step short enough to cook from while standing in the kitchen.
- Add scalable quantities through ingredient tokens in `public/recipes.js`: give ingredients an `id` and a `methodPhrase`, then reference them in method text as `{ingredient-id}`.
- Set `baseServings`, `yieldLabel`, `totalTime`, `heroImage`, and optional `heroPosition` for each recipe.
- Add hero photos to `public/assets/` and reference them with `/recipes/assets/...`.

## Cloudflare Deployment Auth

This machine uses macOS Keychain-backed Wrangler profiles. Do not use `wrangler login` or ask for Cloudflare tokens in chat.

Available local profiles:

- `josephpalmer` -> `joe@josephpalmer.co.uk`, account `780e0c62af2e915d808987af2a12f80b`
- `blockbuilders` -> `joe@blockbuilders.co.uk`, account `4415c1d9654450d1b88157e2a0bf5934`

Before deploying, verify the project profile:

```bash
cf-token current .
cf-wrangler whoami
```
