import { mkdir, rm, copyFile, cp, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { manuals } from "../public/manuals.js";
import { recipes } from "../public/recipes.js";

const outputDirectory = ".pages-dist";
const appFiles = ["app.js", "manuals.js", "recipes.js", "styles.css"];
const collectionRoutes = [
  { basePath: "recipes", items: recipes },
  { basePath: "manuals", items: manuals },
  { basePath: "tools", items: manuals }
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(join(outputDirectory, "recipes"), { recursive: true });

await cp("public/assets", join(outputDirectory, "recipes", "assets"), { recursive: true });
await copyFile("public/index.html", join(outputDirectory, "index.html"));
await copyFile("public/404.html", join(outputDirectory, "404.html"));

for (const file of appFiles) {
  await copyFile(join("public", file), join(outputDirectory, "recipes", file));
}

for (const route of collectionRoutes) {
  const routeDirectory = join(outputDirectory, route.basePath);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile("public/app.html", join(routeDirectory, "index.html"));

  for (const item of route.items) {
    const itemDirectory = join(routeDirectory, item.slug);
    await mkdir(itemDirectory, { recursive: true });
    await copyFile("public/app.html", join(itemDirectory, "index.html"));
  }
}

await writeFile(join(outputDirectory, "_redirects"), "");
