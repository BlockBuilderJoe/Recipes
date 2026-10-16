import { manuals, manualsSource } from "./manuals.js";
import { recipes, siteConfig } from "./recipes.js";

const collections = {
  recipes: {
    basePath: "/recipes",
    detailHeading: "Ingredients",
    items: recipes,
    landingEyebrow: "Kitchen notes",
    landingTitle: "Recipes",
    navLabel: "Recipes",
    source: null,
    title: siteConfig.title
  },
  manuals: {
    basePath: "/manuals",
    aliases: ["/tools"],
    detailHeading: "Setup",
    items: manuals,
    landingEyebrow: "Tormek notes",
    landingTitle: "Tools",
    navLabel: "Tools",
    navPath: "/tools",
    source: manualsSource,
    title: "Tools"
  }
};

const elements = {
  sectionSwitcher: document.querySelector("#section-switcher"),
  landingView: document.querySelector("#landing-view"),
  landingEyebrow: document.querySelector("#landing-eyebrow"),
  landingTitle: document.querySelector("#landing-title"),
  landingSource: document.querySelector("#landing-source"),
  recipeView: document.querySelector("#recipe-view"),
  recipeList: document.querySelector("#recipe-list"),
  recipeSwitcher: document.querySelector("#recipe-switcher"),
  detailSource: document.querySelector("#detail-source"),
  recipeKicker: document.querySelector("#recipe-kicker"),
  recipeTitle: document.querySelector("#recipe-title"),
  recipeDescription: document.querySelector("#recipe-description"),
  servingsPanel: document.querySelector("#servings-panel"),
  servings: document.querySelector("#servings"),
  decreaseServings: document.querySelector("#decrease-servings"),
  increaseServings: document.querySelector("#increase-servings"),
  baseServings: document.querySelector("#base-servings"),
  totalTimeLabel: document.querySelector("#total-time-label"),
  totalTime: document.querySelector("#total-time"),
  yieldLabel: document.querySelector("#yield-label"),
  yield: document.querySelector("#yield"),
  storageSummaryLabel: document.querySelector("#storage-summary-label"),
  storageSummary: document.querySelector("#storage-summary"),
  ingredientsHeading: document.querySelector("#ingredients-heading"),
  ingredients: document.querySelector("#ingredients"),
  shoppingPanel: document.querySelector("#shopping-panel"),
  shoppingList: document.querySelector("#shopping-list"),
  copyShoppingList: document.querySelector("#copy-shopping-list"),
  shareShoppingList: document.querySelector("#share-shopping-list"),
  openReminders: document.querySelector("#open-reminders"),
  shoppingStatus: document.querySelector("#shopping-status"),
  method: document.querySelector("#method"),
  addIns: document.querySelector("#add-ins"),
  servingSuggestions: document.querySelector("#serving-suggestions"),
  storage: document.querySelector("#storage"),
  notFoundView: document.querySelector("#not-found-view")
};

let currentCollection = findCollectionFromLocation();
let routeNotFound = false;
let currentItem = findItemFromLocation();
let currentServings = currentItem?.baseServings || 1;

function findCollectionFromLocation() {
  return (
    Object.values(collections).find((collection) =>
      getCollectionPaths(collection).some((path) => pathMatchesBase(window.location.pathname, path))
    ) || collections.recipes
  );
}

function findItemFromLocation() {
  routeNotFound = false;
  const currentBasePath = getCurrentBasePath();
  const path = window.location.pathname === currentBasePath ? "" : window.location.pathname;
  const pathSlug = path
    .replace(new RegExp(`^${escapeRegExp(currentBasePath)}/?`), "")
    .replace(/^\/|\/$/g, "");
  const hashSlug = window.location.hash.replace(/^#/, "");
  const slug = pathSlug || hashSlug;

  if (!slug) {
    return null;
  }

  const item = currentCollection.items.find((candidate) => candidate.slug === slug);
  routeNotFound = !item;
  return item || null;
}

function getCollectionPaths(collection) {
  return [collection.basePath, ...(collection.aliases || [])];
}

function pathMatchesBase(pathname, basePath) {
  return pathname === basePath || pathname.startsWith(`${basePath}/`);
}

function getCurrentBasePath() {
  return (
    getCollectionPaths(currentCollection).find((basePath) =>
      pathMatchesBase(window.location.pathname, basePath)
    ) || currentCollection.basePath
  );
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderSectionNavigation() {
  elements.sectionSwitcher.replaceChildren(
    ...Object.values(collections).map((collection) => {
      const link = document.createElement("a");
      link.href = collection.navPath || collection.basePath;
      link.textContent = collection.navLabel || collection.title;
      link.ariaCurrent = !routeNotFound && collection === currentCollection ? "page" : null;
      return link;
    })
  );
}

function renderNavigation() {
  const currentBasePath = getCurrentBasePath();
  elements.recipeSwitcher.replaceChildren(
    ...currentCollection.items.map((item) => {
      const link = document.createElement("a");
      link.href = `${currentBasePath}/${item.slug}`;
      link.textContent = item.title;
      link.dataset.slug = item.slug;
      link.ariaCurrent = item.slug === currentItem?.slug ? "page" : null;
      link.addEventListener("click", (event) => {
        event.preventDefault();
        openItem(item);
      });
      return link;
    })
  );
}

function renderLanding() {
  document.title = currentCollection.title;
  const currentBasePath = getCurrentBasePath();
  elements.landingEyebrow.textContent = currentCollection.landingEyebrow;
  elements.landingTitle.textContent = currentCollection.landingTitle;
  renderSource(elements.landingSource, currentCollection.source);
  elements.recipeList.replaceChildren(
    ...currentCollection.items.map((item, index) => {
      const link = document.createElement("a");
      const copy = document.createElement("span");
      const count = document.createElement("span");
      const title = document.createElement("strong");
      const description = document.createElement("span");
      const meta = document.createElement("span");

      link.className = item.thumbnailImage || item.heroImage ? "recipe-card" : "recipe-card text-card";
      link.href = `${currentBasePath}/${item.slug}`;
      link.addEventListener("click", (event) => {
        event.preventDefault();
        openItem(item);
      });

      if (item.thumbnailImage || item.heroImage) {
        const media = document.createElement("span");
        const image = document.createElement("img");
        media.className = "recipe-card-media";
        image.src = item.thumbnailImage || item.heroImage;
        image.alt = "";
        image.loading = index === 0 ? "eager" : "lazy";
        media.append(image);
        link.append(media);
      }

      copy.className = "recipe-card-copy";
      count.className = "recipe-count";
      count.textContent = String(index + 1).padStart(2, "0");
      title.textContent = item.title;
      description.className = "recipe-card-description";
      description.textContent = item.description;
      meta.className = "recipe-card-meta";
      meta.textContent = formatCardMeta(item);

      copy.append(count, title, description, meta);
      link.append(copy);
      return link;
    })
  );
}

function openItem(item) {
  history.pushState({}, "", `${getCurrentBasePath()}/${item.slug}`);
  routeNotFound = false;
  currentItem = item;
  currentServings = item.baseServings || 1;
  render();
}

function renderSource(target, source, pages = "") {
  target.hidden = !source;
  target.replaceChildren();

  if (!source) {
    return;
  }

  const text = document.createElement("span");
  const link = document.createElement("a");
  text.textContent = pages
    ? `Drawn from ${source.label} (${pages}). `
    : `Drawn from ${source.label}. `;
  link.href = source.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent =
    source.linkText || (source.url.toLowerCase().includes(".pdf") ? "Source PDF" : "Source");
  target.append(text, link);
}

function renderItemHeader() {
  document.title = `${currentItem.title} | ${currentCollection.title}`;
  elements.recipeKicker.textContent = currentItem.kicker;
  elements.recipeTitle.textContent = currentItem.title;
  elements.recipeDescription.textContent = currentItem.description;
  renderSource(
    elements.detailSource,
    currentItem.source || currentCollection.source,
    currentItem.sourcePages
  );

  document
    .querySelector(".recipe-hero")
    .style.setProperty(
      "--hero-image",
      currentItem.heroImage ? `url("${currentItem.heroImage}")` : "none"
    );
  document
    .querySelector(".recipe-hero")
    .style.setProperty("--hero-position", currentItem.heroPosition || "center");

  elements.servingsPanel.hidden = !currentItem.baseServings;
  if (currentItem.baseServings) {
    elements.servings.value = String(currentServings);
    elements.baseServings.textContent = `Ingredient amounts are based on ${currentItem.baseServings} servings.`;
  }

  renderMeta();
}

function renderMeta() {
  const meta = currentItem.meta || [
    { label: "Total time", value: currentItem.totalTime },
    { label: "Base yield", value: currentItem.yieldLabel },
    {
      label: "Storage",
      value: currentItem.storage?.[0]?.replace(/^Refrigerate for /, "") || ""
    }
  ];
  const [first, second, third] = meta;

  elements.totalTimeLabel.textContent = first?.label || "";
  elements.totalTime.textContent = first?.value || "";
  elements.yieldLabel.textContent = second?.label || "";
  elements.yield.textContent = second?.value || "";
  elements.storageSummaryLabel.textContent = third?.label || "";
  elements.storageSummary.textContent = third?.value || "";
}

function renderIngredients() {
  elements.ingredientsHeading.textContent = currentCollection.detailHeading;
  elements.ingredients.replaceChildren(
    ...currentItem.ingredientSections.flatMap((section) =>
      section.items.map((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = formatIngredient(item);
        return listItem;
      })
    )
  );
  renderShoppingList();
}

function renderShoppingList() {
  const showShoppingList = currentCollection === collections.recipes;
  elements.shoppingPanel.hidden = !showShoppingList;
  elements.shoppingStatus.textContent = "";

  if (!showShoppingList) {
    elements.shoppingList.value = "";
    return;
  }

  elements.shoppingList.value = getShoppingListText();
  elements.shoppingList.scrollTop = 0;
  elements.shareShoppingList.hidden = typeof navigator.share !== "function";
}

function getShoppingListText() {
  return currentItem.ingredientSections
    .flatMap((section) => section.items)
    .map((item) => formatIngredient(item))
    .filter(Boolean)
    .join("\n");
}

async function copyShoppingList() {
  const text = getShoppingListText();

  try {
    await navigator.clipboard.writeText(text);
    elements.shoppingStatus.textContent = "Copied.";
    return true;
  } catch {
    elements.shoppingList.focus();
    elements.shoppingList.select();
    elements.shoppingStatus.textContent = "Selected.";
    return false;
  }
}

async function shareShoppingList() {
  const text = getShoppingListText();

  if (typeof navigator.share !== "function") {
    await copyShoppingList();
    return;
  }

  try {
    await navigator.share({
      title: `${currentItem.title} shopping list`,
      text
    });
    elements.shoppingStatus.textContent = "Shared.";
  } catch (error) {
    if (error.name !== "AbortError") {
      elements.shoppingStatus.textContent = "Share unavailable.";
    }
  }
}

async function openShoppingListInReminders() {
  await copyShoppingList();
  window.location.href = "x-apple-reminderkit://";
}

function renderList(target, items) {
  target.closest("article").hidden = items.length === 0;
  target.replaceChildren(
    ...items.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    })
  );
}

function renderMethod() {
  elements.method.replaceChildren(
    ...currentItem.method.map((step) => {
      const listItem = document.createElement("li");
      const text = document.createElement("p");
      const time = document.createElement("span");

      listItem.className = "process-step";
      text.textContent = formatStepText(step.text, getIngredientMap());
      time.textContent = step.time;
      time.className = "step-time";
      listItem.append(text, time);
      return listItem;
    })
  );
}

function getIngredientMap() {
  return new Map(
    currentItem.ingredientSections
      .flatMap((section) => section.items)
      .filter((item) => item.id)
      .map((item) => [item.id, item])
  );
}

function formatStepText(text, ingredientsById) {
  return text.replace(/\{([a-zA-Z0-9-]+)\}/g, (match, id) => {
    const item = ingredientsById.get(id);
    return item ? formatIngredientForMethod(item) : match;
  });
}

function formatIngredientForMethod(item) {
  if (!item.methodPhrase) {
    return formatIngredient(item);
  }

  const scale = currentServings / (currentItem.baseServings || 1);
  const scaledQuantity = item.quantity ? item.quantity * scale : null;
  const unit = item.unit ? formatUnit(item.unit, scaledQuantity) : "";

  return item.methodPhrase
    .replaceAll("{quantity}", scaledQuantity ? formatQuantity(scaledQuantity) : "")
    .replaceAll("{unit}", unit)
    .replaceAll("{amount}", formatAmount(item));
}

function formatIngredient(item) {
  const scale = currentServings / (currentItem.baseServings || 1);
  const scaledQuantity = item.quantity ? item.quantity * scale : null;
  const parts = [
    scaledQuantity ? formatQuantity(scaledQuantity) : "",
    item.unit ? formatUnit(item.unit, scaledQuantity) : "",
    item.name || ""
  ].filter(Boolean);
  const preparation = item.preparation ? ` (${item.preparation})` : "";

  return `${parts.join(" ")}${preparation}`.trim();
}

function formatAmount(item) {
  const scale = currentServings / (currentItem.baseServings || 1);
  const scaledQuantity = item.quantity ? item.quantity * scale : null;
  const quantity = scaledQuantity ? `${formatQuantity(scaledQuantity)} ` : "";
  const unit = item.unit ? formatUnit(item.unit, scaledQuantity) : "";

  return `${quantity}${unit}`.trim();
}

function formatQuantity(value) {
  if (value >= 100) {
    return String(Math.round(value));
  }

  const rounded = Math.round(value * 4) / 4;
  const whole = Math.floor(rounded);
  const fraction = rounded - whole;
  const fractionLabels = new Map([
    [0.25, "1/4"],
    [0.5, "1/2"],
    [0.75, "3/4"]
  ]);

  if (fraction === 0) {
    return String(whole);
  }

  if (whole === 0) {
    return fractionLabels.get(fraction) || String(rounded);
  }

  return `${whole} ${fractionLabels.get(fraction) || fraction}`;
}

function formatUnit(unit, quantity) {
  const rounded = Math.round(quantity * 100) / 100;
  const pluralUnits = new Map([
    ["clove", "cloves"],
    ["pod", "pods"],
    ["bay leaf", "bay leaves"],
    ["green cardamom pod", "green cardamom pods"],
    ["black cardamom pod", "black cardamom pods"],
    ["lemon", "lemons"],
    ["red pepper", "red peppers"],
    ["small aubergine or courgette", "small aubergines or courgettes"],
    ["red onion", "red onions"],
    ["cauliflower", "cauliflowers"],
    ["cinnamon stick", "cinnamon sticks"],
    ["large onion", "large onions"],
    ["pinch", "pinches"],
    ["handful", "handfuls"],
    ["tablespoon", "tablespoons"],
    ["teaspoon", "teaspoons"],
    ["can", "cans"],
    ["head", "heads"],
    ["small bunch", "small bunches"],
    ["small loaf", "small loaves"],
    ["Quorn Vegetarian Fillet", "Quorn Vegetarian Fillets"]
  ]);

  if (rounded <= 1 || !pluralUnits.has(unit)) {
    return unit;
  }

  return pluralUnits.get(unit);
}

function formatCardMeta(item) {
  if (item.totalTime && item.yieldLabel) {
    return `${item.totalTime} / ${item.yieldLabel}`;
  }

  return item.meta?.map((entry) => entry.value).join(" / ") || "";
}

function setServings(nextServings) {
  if (!currentItem?.baseServings) {
    return;
  }

  currentServings = Math.max(1, Math.round(Number(nextServings) || currentItem.baseServings));
  renderItemHeader();
  renderIngredients();
  renderMethod();
}

function render() {
  renderSectionNavigation();

  elements.notFoundView.hidden = !routeNotFound;
  elements.landingView.hidden = Boolean(currentItem) || routeNotFound;
  elements.recipeView.hidden = !currentItem || routeNotFound;

  if (routeNotFound) {
    document.title = "Page Not Found";
    return;
  }

  if (!currentItem) {
    renderLanding();
    return;
  }

  renderNavigation();
  renderItemHeader();
  renderIngredients();
  renderMethod();
  renderList(elements.addIns, currentItem.addIns || []);
  renderList(elements.servingSuggestions, currentItem.servingSuggestions || []);
  renderList(elements.storage, currentItem.storage || []);
}

elements.decreaseServings.addEventListener("click", () => setServings(currentServings - 1));
elements.increaseServings.addEventListener("click", () => setServings(currentServings + 1));
elements.servings.addEventListener("input", (event) => setServings(event.target.value));
elements.servings.addEventListener("change", (event) => setServings(event.target.value));
elements.copyShoppingList.addEventListener("click", copyShoppingList);
elements.shareShoppingList.addEventListener("click", shareShoppingList);
elements.openReminders.addEventListener("click", openShoppingListInReminders);
window.addEventListener("popstate", () => {
  currentCollection = findCollectionFromLocation();
  currentItem = findItemFromLocation();
  currentServings = currentItem?.baseServings || 1;
  render();
});

render();
