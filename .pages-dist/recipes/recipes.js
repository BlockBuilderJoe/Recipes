export const siteConfig = {
  title: "Recipes",
  defaultRecipeSlug: "coconut-chickpea-curry"
};

export const recipes = [
  {
    slug: "coconut-chickpea-curry",
    title: "Coconut Chickpea Curry",
    kicker: "Deeply spiced coconut curry",
    heroImage: "/recipes/assets/coconut-chickpea-curry.jpeg",
    thumbnailImage: "/recipes/assets/coconut-chickpea-curry-square.jpeg",
    heroPosition: "center",
    description:
      "A richly layered chickpea curry with toasted whole spices, ginger, tomatoes, coconut milk, tahini, greens, and fresh herbs.",
    source: {
      label: "Rainbow Plant Life",
      url: "https://rainbowplantlife.com/chickpea-curry/",
      linkText: "Original recipe"
    },
    baseServings: 6,
    yieldLabel: "Serves 6 with rice",
    totalTime: "About 1 hour",
    ingredientSections: [
      {
        title: "Toast the whole spices",
        items: [
          {
            id: "coconut-oil",
            quantity: 2,
            unit: "tablespoon",
            name: "coconut oil",
            methodPhrase: "{quantity} {unit} of coconut oil"
          },
          {
            id: "coriander-seeds",
            quantity: 2,
            unit: "teaspoon",
            name: "coriander seeds",
            methodPhrase: "{amount} coriander seeds"
          },
          {
            id: "cumin-seeds",
            quantity: 1,
            unit: "heaped teaspoon",
            name: "cumin seeds",
            methodPhrase: "{amount} cumin seeds"
          }
        ]
      },
      {
        title: "Build the curry base",
        items: [
          {
            id: "onion",
            quantity: 1,
            unit: "large",
            name: "yellow or red onion",
            preparation: "finely diced",
            methodPhrase: "{quantity} finely diced large onion"
          },
          {
            id: "garlic-paste",
            quantity: 2,
            unit: "tablespoon",
            name: "garlic paste",
            methodPhrase: "{amount} garlic paste"
          },
          {
            id: "ginger-paste",
            quantity: 2,
            unit: "tablespoon",
            name: "ginger paste",
            methodPhrase: "{amount} ginger paste"
          },
          {
            id: "serrano-pepper",
            quantity: 1,
            unit: "serrano chilli",
            name: "",
            preparation: "finely diced; use up to 3 for more heat",
            methodPhrase: "{amount}, finely diced"
          },
          {
            id: "tomato-paste",
            quantity: 2,
            unit: "tablespoon",
            name: "tomato purée",
            methodPhrase: "{amount} tomato purée"
          },
          {
            id: "curry-powder",
            quantity: 1.5,
            unit: "teaspoon",
            name: "curry powder",
            methodPhrase: "{amount} curry powder"
          },
          {
            id: "ground-coriander",
            quantity: 1,
            unit: "teaspoon",
            name: "ground coriander",
            methodPhrase: "{amount} ground coriander"
          },
          {
            id: "ground-cinnamon",
            quantity: 0.5,
            unit: "teaspoon",
            name: "ground cinnamon",
            methodPhrase: "{amount} ground cinnamon"
          },
          {
            id: "nutmeg",
            quantity: 0.5,
            unit: "teaspoon",
            name: "freshly grated nutmeg",
            methodPhrase: "{amount} freshly grated nutmeg"
          },
          {
            id: "turmeric",
            quantity: 0.25,
            unit: "teaspoon",
            name: "ground turmeric",
            methodPhrase: "{amount} ground turmeric"
          },
          {
            id: "black-pepper",
            quantity: 0.5,
            unit: "teaspoon",
            name: "freshly ground black pepper",
            methodPhrase: "{amount} freshly ground black pepper"
          },
          {
            id: "tomatoes",
            quantity: 0.5,
            unit: "400g can",
            name: "chopped tomatoes",
            methodPhrase: "{amount} chopped tomatoes"
          },
          {
            id: "salt",
            quantity: 1.25,
            unit: "teaspoon",
            name: "fine sea salt",
            preparation: "plus more to taste",
            methodPhrase: "{amount} fine sea salt"
          }
        ]
      },
      {
        title: "Simmer",
        items: [
          {
            id: "chickpeas",
            quantity: 2,
            unit: "400g can",
            name: "chickpeas",
            preparation: "drained and rinsed",
            methodPhrase: "{amount} chickpeas, drained and rinsed"
          },
          {
            id: "coconut-milk",
            quantity: 400,
            unit: "ml",
            name: "full-fat coconut milk",
            methodPhrase: "{amount} full-fat coconut milk"
          },
          {
            id: "water",
            quantity: 120,
            unit: "ml",
            name: "water",
            preparation: "plus a little extra for deglazing",
            methodPhrase: "{amount} water"
          },
          {
            id: "tahini",
            quantity: 1.5,
            unit: "tablespoon",
            name: "tahini",
            preparation: "well stirred",
            methodPhrase: "{amount} tahini"
          },
          {
            id: "sugar",
            quantity: 0.5,
            unit: "teaspoon",
            name: "brown or coconut sugar",
            methodPhrase: "{amount} brown or coconut sugar"
          },
          {
            id: "bay-leaf",
            quantity: 1,
            unit: "bay leaf",
            name: "",
            preparation: "optional",
            methodPhrase: "{amount}"
          }
        ]
      },
      {
        title: "Finish",
        items: [
          {
            id: "greens",
            quantity: 200,
            unit: "g",
            name: "Swiss chard or kale",
            preparation: "stalks removed and leaves thinly sliced; spinach also works",
            methodPhrase: "{amount} thinly sliced Swiss chard or kale"
          },
          {
            id: "garam-masala",
            quantity: 2,
            unit: "teaspoon",
            name: "garam masala",
            methodPhrase: "{amount} garam masala"
          },
          {
            id: "lime-juice",
            quantity: 0.5,
            unit: "tablespoon",
            name: "fresh lime or lemon juice",
            preparation: "plus more to taste",
            methodPhrase: "{amount} fresh lime or lemon juice"
          },
          {
            id: "coriander",
            quantity: 1,
            unit: "large handful",
            name: "fresh coriander",
            preparation: "leaves and tender stalks chopped",
            methodPhrase: "{amount} chopped fresh coriander"
          },
          {
            id: "mint",
            quantity: 1,
            unit: "large handful",
            name: "fresh mint leaves",
            preparation: "chopped",
            methodPhrase: "{amount} chopped fresh mint"
          }
        ]
      }
    ],
    method: [
      {
        text: "Heat {coconut-oil} in a wide, heavy pan over medium heat. Add {coriander-seeds} and {cumin-seeds}, tossing until fragrant and slightly darker.",
        time: "1 minute"
      },
      {
        text: "Add {onion} with a small pinch of salt. Cook until it softens and begins to colour, adding a splash of water if the spices start catching.",
        time: "5 minutes"
      },
      {
        text: "Stir in {garlic-paste}, {ginger-paste}, and {serrano-pepper}. Cook until the raw aroma fades.",
        time: "1-2 minutes"
      },
      {
        text: "Add {tomato-paste}, {curry-powder}, {ground-coriander}, {ground-cinnamon}, {nutmeg}, {turmeric}, and {black-pepper}. Stir constantly, loosening with a splash of water if needed.",
        time: "90 seconds"
      },
      {
        text: "Add {tomatoes} and {salt}. Scrape up the browned flavour from the pan and cook until the tomatoes soften and the oil begins to separate.",
        time: "5 minutes"
      },
      {
        text: "Stir in {chickpeas}, {coconut-milk}, {water}, {tahini}, {sugar}, and {bay-leaf}, if using. Cover and simmer gently, stirring occasionally.",
        time: "15-20 minutes"
      },
      {
        text: "Remove the bay leaf. Add {greens} and cook until tender, then stir in {garam-masala}.",
        time: "4-5 minutes"
      },
      {
        text: "Take off the heat and stir in {lime-juice}, {coriander}, and {mint}. Adjust the salt and acidity, then leave the curry to settle before serving.",
        time: "5-15 minutes"
      }
    ],
    addIns: [
      "Use baby spinach instead of Swiss chard or kale and cook it for only 1-2 minutes",
      "If you get curry leaves later, fry 15-20 fresh leaves briefly after the whole spices and omit the bay leaf",
      "Use two or three serrano chillies for a hotter curry"
    ],
    servingSuggestions: [
      "Serve with basmati rice",
      "Scoop up with naan or another flatbread",
      "Let the curry rest before serving so the flavours can settle"
    ],
    storage: [
      "Refrigerate for up to 5 days in an airtight container",
      "Reheat gently with a splash of water if the sauce has thickened"
    ]
  },
  {
    slug: "coconut-chickpea-curry-original",
    title: "Coconut Chickpea Curry (Original)",
    kicker: "Original weeknight version",
    heroImage: "/recipes/assets/coconut-chickpea-curry.jpeg",
    thumbnailImage: "/recipes/assets/coconut-chickpea-curry-square.jpeg",
    heroPosition: "center",
    description: "The original simple chickpea curry with tomatoes, garam masala, coconut milk, and lime.",
    source: {
      label: "Jessica in the Kitchen",
      url: "https://jessicainthekitchen.com/coconut-chickpea-curry-recipe/",
      linkText: "Original recipe"
    },
    baseServings: 8,
    yieldLabel: "6-8 generous portions",
    totalTime: "About 30 minutes",
    ingredientSections: [
      {
        title: "Heat the oil",
        items: [
          {
            id: "coconut-oil",
            quantity: 4,
            unit: "tablespoon",
            name: "coconut oil",
            methodPhrase: "{quantity} {unit} of coconut oil"
          }
        ]
      },
      {
        title: "Cook for 10 minutes",
        items: [
          {
            id: "onions",
            quantity: 2,
            unit: "medium",
            name: "red or yellow onions",
            preparation: "diced",
            methodPhrase: "{quantity} diced red or yellow onions"
          },
          {
            id: "tomatoes",
            quantity: 800,
            unit: "g",
            name: "fresh or canned tomatoes",
            preparation: "diced, about 2 cans",
            methodPhrase: "{amount} diced tomatoes"
          },
          {
            name: "sea salt and ground black pepper",
            preparation: "to taste"
          }
        ]
      },
      {
        title: "Add spices and chickpeas",
        items: [
          {
            id: "chickpeas",
            quantity: 908,
            unit: "g",
            name: "canned chickpeas",
            preparation: "drained and rinsed, about 2 cans",
            methodPhrase: "{amount} drained chickpeas"
          },
          {
            id: "garlic",
            quantity: 6,
            unit: "clove",
            name: "garlic",
            preparation: "minced",
            methodPhrase: "{quantity} minced garlic {unit}"
          },
          {
            id: "garam-masala",
            quantity: 3,
            unit: "tablespoon",
            name: "garam masala",
            methodPhrase: "{amount} garam masala"
          },
          {
            id: "curry-powder",
            quantity: 2,
            unit: "teaspoon",
            name: "curry powder",
            methodPhrase: "{amount} curry powder"
          },
          {
            id: "cumin",
            quantity: 0.5,
            unit: "teaspoon",
            name: "cumin",
            methodPhrase: "{amount} cumin"
          }
        ]
      },
      {
        title: "Add liquids and thickener",
        items: [
          {
            id: "coconut-milk",
            quantity: 766,
            unit: "g",
            name: "canned coconut milk",
            preparation: "27 ounces, about 2 cans",
            methodPhrase: "{amount} canned coconut milk"
          },
          {
            id: "coconut-flour",
            quantity: 4,
            unit: "teaspoon",
            name: "coconut flour",
            preparation: "optional, for thickening",
            methodPhrase: "{amount} coconut flour"
          }
        ]
      },
      {
        title: "Finish",
        items: [
          {
            id: "limes",
            quantity: 2,
            unit: "small",
            name: "limes",
            preparation: "juice only",
            methodPhrase: "the juice of {quantity} small limes"
          }
        ]
      }
    ],
    method: [
      {
        text: "Heat {coconut-oil} in a deep pot over medium-high heat.",
        time: "1-2 minutes"
      },
      {
        text: "Add {onions}, {tomatoes}, sea salt, and ground black pepper. Reduce heat to medium and cook until the tomatoes release their juices and the onions soften.",
        time: "10 minutes"
      },
      {
        text: "Add {chickpeas}, {garlic}, {garam-masala}, {curry-powder}, and {cumin}. Stir to combine.",
        time: "1 minute"
      },
      {
        text: "Pour in {coconut-milk} and {coconut-flour}, if using. Bring to a boil, then reduce heat to medium-low and simmer.",
        time: "13-16 minutes"
      },
      {
        text: "Remove from heat, squeeze in {limes}, and stir to combine.",
        time: "1 minute"
      },
      {
        text: "Let cool slightly and serve.",
        time: "2-3 minutes"
      }
    ],
    addIns: [
      "Sweet potatoes",
      "Bell peppers",
      "Spinach",
      "Broccoli",
      "Cauliflower",
      "Carrots"
    ],
    servingSuggestions: [
      "Serve over basmati rice, brown rice, or cauliflower rice",
      "Pair with naan bread",
      "Garnish with fresh cilantro"
    ],
    storage: [
      "Refrigerate for 3-4 days in an airtight container",
      "Freeze for 2-3 months in an airtight container"
    ]
  },
  {
    slug: "paneer-makhani",
    title: "Paneer Makhani",
    kicker: "Rich paneer curry",
    heroImage: "/recipes/assets/paneer-makhani-square-food.jpeg",
    thumbnailImage: "/recipes/assets/paneer-makhani-square-food.jpeg",
    heroPosition: "center",
    description: "A buttery paneer curry with tomatoes, cream, cardamom, and warm spices.",
    baseServings: 4,
    yieldLabel: "Serves 4",
    totalTime: "About 40 minutes",
    ingredientSections: [
      {
        title: "Start the base",
        items: [
          {
            id: "olive-oil",
            quantity: 1,
            unit: "tablespoon",
            name: "olive oil",
            methodPhrase: "{quantity} {unit} of olive oil"
          },
          {
            id: "green-cardamom",
            quantity: 5,
            unit: "green cardamom pod",
            name: "",
            methodPhrase: "{amount}"
          },
          {
            id: "black-cardamom",
            quantity: 2,
            unit: "black cardamom pod",
            name: "",
            methodPhrase: "{amount}"
          },
          {
            id: "cumin-seeds",
            quantity: 1,
            unit: "teaspoon",
            name: "cumin seeds",
            methodPhrase: "{amount} cumin seeds"
          },
          {
            id: "bay-leaves",
            quantity: 2,
            unit: "bay leaf",
            name: "",
            methodPhrase: "{amount}"
          },
          {
            id: "onion",
            quantity: 1,
            unit: "large",
            name: "onion",
            preparation: "chopped",
            methodPhrase: "{quantity} chopped large onion"
          }
        ]
      },
      {
        title: "Season",
        items: [
          {
            id: "salt",
            quantity: 2,
            unit: "teaspoon",
            name: "salt",
            methodPhrase: "{amount} salt"
          },
          {
            id: "black-pepper",
            quantity: 1,
            unit: "teaspoon",
            name: "ground black pepper",
            methodPhrase: "{amount} ground black pepper"
          },
          {
            id: "ginger-garlic-paste",
            quantity: 1,
            unit: "tablespoon",
            name: "ginger and garlic paste",
            methodPhrase: "{amount} ginger and garlic paste"
          },
          {
            id: "red-chilli-powder",
            quantity: 1,
            unit: "teaspoon",
            name: "red chilli powder",
            methodPhrase: "{amount} red chilli powder"
          }
        ]
      },
      {
        title: "Simmer the sauce",
        items: [
          {
            id: "tomatoes",
            quantity: 6,
            unit: "ripe",
            name: "tomatoes",
            preparation: "blended, or 1 tin chopped tomatoes",
            methodPhrase: "{quantity} blended ripe tomatoes"
          },
          {
            id: "double-cream",
            quantity: 4,
            unit: "tablespoon",
            name: "double cream",
            methodPhrase: "{amount} double cream"
          },
          {
            id: "kasoori-methi",
            quantity: 1,
            unit: "tablespoon",
            name: "kasoori methi",
            preparation: "dried fenugreek leaves",
            methodPhrase: "{amount} kasoori methi"
          },
          {
            id: "garam-masala",
            quantity: 1,
            unit: "teaspoon",
            name: "garam masala",
            methodPhrase: "{amount} garam masala"
          },
          {
            id: "sugar",
            quantity: 0.5,
            unit: "teaspoon",
            name: "sugar",
            methodPhrase: "{amount} sugar"
          },
          {
            id: "paneer",
            quantity: 500,
            unit: "g",
            name: "paneer",
            preparation: "diced into 1 inch chunks",
            methodPhrase: "{amount} diced paneer"
          }
        ]
      },
      {
        title: "Finish",
        items: [
          {
            id: "butter",
            quantity: 25,
            unit: "g",
            name: "butter",
            methodPhrase: "{amount} butter"
          },
          {
            id: "greek-yoghurt",
            quantity: 2,
            unit: "tablespoon",
            name: "Greek yoghurt",
            methodPhrase: "{amount} Greek yoghurt"
          },
          {
            id: "lemon",
            quantity: 1,
            unit: "lemon",
            name: "",
            preparation: "juice only",
            methodPhrase: "the juice of {amount}"
          },
          {
            id: "coriander",
            quantity: 1,
            unit: "tablespoon",
            name: "chopped coriander",
            preparation: "to garnish",
            methodPhrase: "{amount} chopped coriander"
          }
        ]
      }
    ],
    method: [
      {
        text: "Heat {olive-oil} in a large saucepan. Add {green-cardamom}, {black-cardamom}, {cumin-seeds}, and {bay-leaves}. Once sizzling, add {onion} and cook over medium heat, stirring regularly.",
        time: "10-12 minutes"
      },
      {
        text: "Add {salt}, {black-pepper}, {ginger-garlic-paste}, and {red-chilli-powder}. Cook until fragrant.",
        time: "5 minutes"
      },
      {
        text: "Add {tomatoes} and cook until the sauce thickens.",
        time: "15 minutes"
      },
      {
        text: "Add {double-cream}, {kasoori-methi}, {garam-masala}, and {sugar}, along with {paneer}. Let the curry simmer gently.",
        time: "5 minutes"
      },
      {
        text: "Stir in {butter} and {greek-yoghurt} until fully mixed through.",
        time: "1-2 minutes"
      },
      {
        text: "Serve with {lemon}, {coriander}, and some rice or naan.",
        time: "Serve immediately"
      }
    ],
    addIns: [],
    servingSuggestions: [
      "Serve with basmati rice",
      "Serve with naan",
      "Finish with extra coriander if you like"
    ],
    storage: [
      "Refrigerate for 2-3 days in an airtight container",
      "Reheat gently until piping hot"
    ]
  },
  {
    slug: "paneer-roasted-vegetable-biryani",
    title: "Paneer & Roasted Vegetable Biryani",
    kicker: "Indian Summer-style",
    heroImage: "/recipes/assets/paneer-vegetable-biryani.jpeg",
    thumbnailImage: "/recipes/assets/paneer-vegetable-biryani-square.jpeg",
    heroPosition: "center",
    description:
      "A copycat-style vegetarian biryani inspired by Indian Summer Brighton: buttery spiced rice, marinated roasted vegetables, paneer, fresh herbs, and raita.",
    baseServings: 4,
    yieldLabel: "Serves 3-4",
    totalTime: "About 1 hour 30 minutes",
    ingredientSections: [
      {
        title: "Marinate the vegetables and paneer",
        items: [
          {
            id: "paneer",
            quantity: 225,
            unit: "g",
            name: "paneer",
            preparation: "cubed",
            methodPhrase: "{amount} cubed paneer"
          },
          {
            id: "red-pepper",
            quantity: 1,
            unit: "red pepper",
            name: "",
            preparation: "chopped into chunks",
            methodPhrase: "{amount}"
          },
          {
            id: "aubergine-or-courgette",
            quantity: 1,
            unit: "small aubergine or courgette",
            name: "",
            preparation: "chopped",
            methodPhrase: "{amount}"
          },
          {
            id: "red-onion-wedges",
            quantity: 1,
            unit: "red onion",
            name: "",
            preparation: "cut into wedges",
            methodPhrase: "{amount}"
          },
          {
            id: "cauliflower",
            quantity: 0.5,
            unit: "cauliflower",
            name: "",
            preparation: "cut into small florets",
            methodPhrase: "{amount}"
          },
          {
            id: "greek-yoghurt",
            quantity: 150,
            unit: "g",
            name: "Greek yoghurt",
            methodPhrase: "{amount} Greek yoghurt"
          },
          {
            id: "lemon-juice",
            quantity: 1,
            unit: "tablespoon",
            name: "lemon juice",
            methodPhrase: "{amount} lemon juice"
          },
          {
            id: "garlic",
            quantity: 2,
            unit: "clove",
            name: "garlic",
            preparation: "grated",
            methodPhrase: "{quantity} grated garlic {unit}"
          },
          {
            id: "ginger",
            quantity: 1,
            unit: "tablespoon",
            name: "fresh ginger",
            preparation: "grated",
            methodPhrase: "{amount} grated fresh ginger"
          },
          {
            id: "ground-cumin",
            quantity: 1,
            unit: "teaspoon",
            name: "ground cumin",
            methodPhrase: "{amount} ground cumin"
          },
          {
            id: "ground-coriander",
            quantity: 1,
            unit: "teaspoon",
            name: "ground coriander",
            methodPhrase: "{amount} ground coriander"
          },
          {
            id: "turmeric",
            quantity: 0.5,
            unit: "teaspoon",
            name: "turmeric",
            methodPhrase: "{amount} turmeric"
          },
          {
            id: "chilli-powder",
            quantity: 0.5,
            unit: "teaspoon",
            name: "Kashmiri or mild chilli powder",
            methodPhrase: "{amount} Kashmiri or mild chilli powder"
          },
          {
            id: "garam-masala",
            quantity: 1,
            unit: "teaspoon",
            name: "garam masala",
            methodPhrase: "{amount} garam masala"
          },
          {
            id: "marinade-salt",
            quantity: 1,
            unit: "teaspoon",
            name: "salt",
            methodPhrase: "{amount} salt"
          },
          {
            id: "neutral-oil",
            quantity: 1.5,
            unit: "tablespoon",
            name: "neutral oil",
            methodPhrase: "{amount} neutral oil"
          }
        ]
      },
      {
        title: "Cook the rice",
        items: [
          {
            id: "basmati-rice",
            quantity: 300,
            unit: "g",
            name: "basmati rice",
            methodPhrase: "{amount} basmati rice"
          },
          {
            id: "bay-leaves",
            quantity: 2,
            unit: "bay leaf",
            name: "",
            methodPhrase: "{amount}"
          },
          {
            id: "cinnamon-stick",
            quantity: 1,
            unit: "cinnamon stick",
            name: "",
            methodPhrase: "{amount}"
          },
          {
            id: "green-cardamom",
            quantity: 3,
            unit: "green cardamom pod",
            name: "",
            methodPhrase: "{amount}"
          },
          {
            id: "cumin-seeds",
            quantity: 1,
            unit: "teaspoon",
            name: "cumin seeds",
            methodPhrase: "{amount} cumin seeds"
          },
          {
            name: "salt for the rice water"
          }
        ]
      },
      {
        title: "Layer and serve",
        items: [
          {
            id: "ghee",
            quantity: 3,
            unit: "tablespoon",
            name: "ghee or butter",
            methodPhrase: "{amount} ghee or butter"
          },
          {
            id: "sliced-onion",
            quantity: 1,
            unit: "large onion",
            name: "",
            preparation: "thinly sliced",
            methodPhrase: "{amount}, thinly sliced"
          },
          {
            id: "saffron-milk",
            quantity: 3,
            unit: "tablespoon",
            name: "warm milk",
            preparation: "with a pinch of saffron or turmeric soaked in it",
            methodPhrase: "{amount} saffron milk"
          },
          {
            id: "mint",
            quantity: 1,
            unit: "handful",
            name: "fresh mint",
            preparation: "chopped",
            methodPhrase: "{amount} chopped fresh mint"
          },
          {
            id: "coriander",
            quantity: 1,
            unit: "handful",
            name: "fresh coriander",
            preparation: "chopped",
            methodPhrase: "{amount} chopped fresh coriander"
          },
          {
            id: "raita",
            name: "raita",
            methodPhrase: "raita"
          },
          {
            id: "mango-chutney",
            name: "mango chutney",
            preparation: "optional",
            methodPhrase: "mango chutney, if using"
          }
        ]
      }
    ],
    method: [
      {
        text: "Mix {greek-yoghurt}, {lemon-juice}, {garlic}, and {ginger} in a large bowl.",
        time: "5 minutes"
      },
      {
        text: "Stir in {ground-cumin}, {ground-coriander}, {turmeric}, {chilli-powder}, {garam-masala}, {marinade-salt}, and {neutral-oil}.",
        time: "1 minute"
      },
      {
        text: "Coat {paneer}, {red-pepper}, {aubergine-or-courgette}, {red-onion-wedges}, and {cauliflower} gently in the marinade, then leave to rest.",
        time: "At least 30 minutes"
      },
      {
        text: "Heat the oven to 220°C. Spread the vegetables on a tray and roast until lightly charred.",
        time: "20-25 minutes"
      },
      {
        text: "Add the paneer for the final 10-12 minutes so it browns without drying out.",
        time: "10-12 minutes"
      },
      {
        text: "Rinse {basmati-rice} until mostly clear, then boil with {bay-leaves}, {cinnamon-stick}, {green-cardamom}, {cumin-seeds}, and salt until 70% cooked.",
        time: "8-10 minutes"
      },
      {
        text: "Melt {ghee} in a pan and fry {sliced-onion} until golden and sweet. Set half aside for topping.",
        time: "10-12 minutes"
      },
      {
        text: "Layer half the rice, roasted vegetables, paneer, {mint}, {coriander}, fried onion, and {saffron-milk} in an ovenproof dish.",
        time: "5 minutes"
      },
      {
        text: "Repeat the layers, cover tightly with foil or a lid, and bake at 170°C until fragrant.",
        time: "20-25 minutes"
      },
      {
        text: "Rest for 10 minutes, then gently fluff and serve with {raita} and {mango-chutney}.",
        time: "10 minutes"
      }
    ],
    addIns: [
      "Use courgette instead of aubergine if you want a lighter roasted vegetable mix",
      "Use turmeric milk if you do not have saffron",
      "Be generous with the ghee or butter for a richer restaurant-style finish"
    ],
    servingSuggestions: [
      "Serve with raita",
      "Add mango chutney on the side if you like",
      "Keep the rice separate and fluffy rather than wet or curry-like"
    ],
    storage: [
      "Refrigerate leftovers for 2-3 days in an airtight container",
      "Reheat until piping hot, adding a splash of water if the rice feels dry"
    ]
  },
  {
    slug: "kale-vegetarian-caesar-salad",
    title: "Kale Vegetarian Caesar Salad",
    kicker: "Crisp vegetarian Caesar",
    heroImage: "/recipes/assets/kale-vegetarian-caesar-salad.jpeg",
    thumbnailImage: "/recipes/assets/kale-vegetarian-caesar-salad-square.jpeg",
    heroPosition: "center right",
    description:
      "A Quorn-inspired vegetarian Caesar salad with kale, cos lettuce, crisp chickpeas, croutons, sliced vegetarian fillets, and a lighter mustard dressing.",
    source: {
      label: "Quorn",
      url: "https://www.quorn.co.uk/recipes/kale-vegetarian-caesar-salad",
      linkText: "Source recipe"
    },
    sourcePages: "Dijon mustard reduced by half",
    baseServings: 4,
    yieldLabel: "Serves 4",
    totalTime: "About 1 hour 30 minutes",
    ingredientSections: [
      {
        title: "Roast the chickpeas",
        items: [
          {
            id: "chickpeas",
            quantity: 1,
            unit: "can",
            name: "chickpeas",
            preparation: "drained",
            methodPhrase: "{amount} drained chickpeas"
          },
          {
            id: "roasting-oil",
            quantity: 1,
            unit: "tablespoon",
            name: "oil",
            methodPhrase: "{amount} oil"
          },
          {
            id: "paprika",
            quantity: 0.5,
            unit: "teaspoon",
            name: "ground paprika",
            methodPhrase: "{amount} ground paprika"
          },
          {
            id: "ground-cumin",
            quantity: 0.5,
            unit: "teaspoon",
            name: "ground cumin",
            methodPhrase: "{amount} ground cumin"
          },
          {
            name: "salt and black pepper"
          }
        ]
      },
      {
        title: "Make the dressing",
        items: [
          {
            id: "garlic",
            quantity: 1,
            unit: "clove",
            name: "garlic",
            preparation: "crushed",
            methodPhrase: "{quantity} crushed garlic {unit}"
          },
          {
            id: "greek-yoghurt",
            quantity: 4,
            unit: "tablespoon",
            name: "Greek yoghurt",
            methodPhrase: "{amount} Greek yoghurt"
          },
          {
            id: "mayonnaise",
            quantity: 4,
            unit: "tablespoon",
            name: "mayonnaise",
            methodPhrase: "{amount} mayonnaise"
          },
          {
            id: "dijon-mustard",
            quantity: 1.5,
            unit: "teaspoon",
            name: "Dijon mustard",
            methodPhrase: "{amount} Dijon mustard"
          },
          {
            id: "parmesan",
            quantity: 2,
            unit: "tablespoon",
            name: "Parmesan",
            preparation: "finely grated",
            methodPhrase: "{amount} finely grated Parmesan"
          },
          {
            id: "extra-virgin-olive-oil",
            quantity: 2,
            unit: "tablespoon",
            name: "extra virgin olive oil",
            methodPhrase: "{amount} extra virgin olive oil"
          },
          {
            id: "lemon",
            quantity: 1,
            unit: "lemon",
            name: "",
            preparation: "juice only",
            methodPhrase: "the juice of {amount}"
          },
          {
            id: "sugar",
            quantity: 0.5,
            unit: "teaspoon",
            name: "sugar",
            methodPhrase: "{amount} sugar"
          },
          {
            id: "capers",
            quantity: 1,
            unit: "teaspoon",
            name: "capers",
            preparation: "finely chopped",
            methodPhrase: "{amount} finely chopped capers"
          }
        ]
      },
      {
        title: "Build the salad",
        items: [
          {
            id: "vegetarian-fillets",
            quantity: 4,
            unit: "Quorn Vegetarian Fillet",
            name: "",
            methodPhrase: "{amount}"
          },
          {
            id: "cos-lettuce",
            quantity: 1,
            unit: "head",
            name: "Cos lettuce",
            preparation: "roughly chopped",
            methodPhrase: "{amount} Cos lettuce"
          },
          {
            id: "kale",
            quantity: 1,
            unit: "small bunch",
            name: "kale",
            preparation: "stems removed and roughly chopped",
            methodPhrase: "{amount} kale"
          },
          {
            id: "crusty-bread",
            quantity: 0.5,
            unit: "small loaf",
            name: "crusty bread",
            preparation: "torn into chunks",
            methodPhrase: "{amount} crusty bread"
          }
        ]
      }
    ],
    method: [
      {
        text: "Heat the oven to 180°C fan. Toss {chickpeas} with {roasting-oil}, {paprika}, {ground-cumin}, salt, and black pepper on a tray.",
        time: "5 minutes"
      },
      {
        text: "Roast the chickpeas until crisp, shaking the tray once or twice.",
        time: "45-50 minutes"
      },
      {
        text: "Blend {garlic}, {greek-yoghurt}, {mayonnaise}, {dijon-mustard}, {parmesan}, {extra-virgin-olive-oil}, {lemon}, {sugar}, and 1-2 tablespoons of water until smooth.",
        time: "5 minutes"
      },
      {
        text: "Stir {capers} through the dressing, then season with salt and black pepper.",
        time: "1 minute"
      },
      {
        text: "Toss {crusty-bread} with a little oil, salt, and black pepper, then bake until crisp.",
        time: "10-12 minutes"
      },
      {
        text: "Cook {vegetarian-fillets} according to the packet, then slice.",
        time: "Follow pack"
      },
      {
        text: "Toss {cos-lettuce} and {kale} with enough dressing to coat.",
        time: "2 minutes"
      },
      {
        text: "Top with sliced fillets, crisp chickpeas, croutons, and extra dressing.",
        time: "Serve"
      }
    ],
    addIns: [
      "Use extra kale if you want a greener salad",
      "Add more lemon juice at the end for a sharper dressing",
      "Keep the mustard at this reduced amount for a softer Caesar-style dressing"
    ],
    servingSuggestions: [
      "Serve once the chickpeas and croutons are crisp",
      "Keep some dressing back for drizzling at the table",
      "Slice the fillets just before serving so they stay warm"
    ],
    storage: [
      "Best eaten straight after assembling",
      "Store undressed leaves, dressing, chickpeas, croutons, and fillets separately if preparing ahead"
    ]
  },
  {
    slug: "maple-only-flapjacks",
    title: "Maple-Only Flapjacks",
    kicker: "Oat tray bake",
    heroImage: "",
    thumbnailImage: "",
    heroPosition: "center",
    description:
      "Chewy oat bars sweetened entirely with pure maple syrup, with no refined sugar or golden syrup.",
    baseServings: 16,
    yieldLabel: "Makes 16 bars",
    totalTime: "About 1 hour, plus cooling",
    ingredientSections: [
      {
        title: "Melt the base",
        items: [
          {
            id: "butter",
            quantity: 200,
            unit: "g",
            name: "unsalted butter",
            methodPhrase: "{amount} unsalted butter"
          },
          {
            id: "maple-syrup",
            quantity: 200,
            unit: "ml",
            name: "pure maple syrup",
            methodPhrase: "{amount} pure maple syrup"
          }
        ]
      },
      {
        title: "Mix the oats",
        items: [
          {
            id: "vanilla",
            quantity: 1,
            unit: "teaspoon",
            name: "vanilla extract",
            methodPhrase: "{amount} vanilla extract"
          },
          {
            id: "salt",
            quantity: 0.5,
            unit: "teaspoon",
            name: "fine sea salt",
            methodPhrase: "{amount} fine sea salt"
          },
          {
            id: "oats",
            quantity: 350,
            unit: "g",
            name: "rolled oats",
            methodPhrase: "{amount} rolled oats"
          }
        ]
      }
    ],
    method: [
      {
        text: "Preheat the oven to 170°C, or 150°C fan. Line a 20 cm square tin with parchment, leaving overhang for lifting.",
        time: "5 minutes"
      },
      {
        text: "Melt {butter} with {maple-syrup} in a large saucepan over low heat. Stir gently until smooth, but do not let it boil.",
        time: "3-5 minutes"
      },
      {
        text: "Remove from the heat. Stir in {vanilla} and {salt}, then add {oats} and mix until every oat is coated.",
        time: "2-3 minutes"
      },
      {
        text: "Tip the mixture into the lined tin and press it down very firmly with a spoon or spatula.",
        time: "2 minutes"
      },
      {
        text: "Bake until the edges are deeply golden. The centre will still feel soft, but it will firm as it cools.",
        time: "28-32 minutes"
      },
      {
        text: "Cool in the tin, score into bars while still warm, then leave to cool completely before lifting out and cutting through.",
        time: "At least 1 hour"
      }
    ],
    addIns: [
      "Use dark or robust maple syrup for the strongest flavour",
      "Add 1 mashed ripe banana for extra binding",
      "Add 2 tablespoons almond butter for extra binding and richness"
    ],
    servingSuggestions: [
      "Press the mixture firmly into the tin so the bars hold together",
      "Cut only once fully cool; maple-only flapjacks are more delicate than golden-syrup versions"
    ],
    storage: [
      "Store fully cooled bars in an airtight container",
      "Keep parchment between layers if stacking"
    ]
  }
];
