# Recipes

A small static recipe site deployed at `josephpalmer.co.uk/recipes` with
Cloudflare Workers Assets.

It also serves tool sharpening notes at `josephpalmer.co.uk/tools`.
`/manuals` remains supported as an alias.

## Local development

```sh
npm run dev
```

## Deploy

```sh
npm run deploy
```

## Add a recipe

Add another object to `public/recipes.js`. Ingredients with a numeric `quantity`
scale automatically from the recipe's `baseServings`.
