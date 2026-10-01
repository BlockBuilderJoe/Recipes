export const manualsSource = {
  label: "Tormek HB-10 Handbook",
  url: "https://tormek.com/download/18.830063c18388ecce1c14d64/1666277445202/hb-10-en-v105.pdf"
};

export const manuals = [
  {
    slug: "three-quarter-roughing-gouge",
    title: "3/4\" Roughing Gouge",
    kicker: "Turning tool sharpening",
    description: "SVS-50 open-seat process for refreshing a square-ended roughing gouge.",
    sourcePages: "SVS-50 roughing gouge guidance, handbook pages 96-108",
    meta: [
      { label: "Jig", value: "SVS-50 open seat" },
      { label: "Support", value: "Horizontal" },
      { label: "Recommended angle", value: "Match existing bevel" }
    ],
    ingredientSections: [
      {
        title: "Setup",
        items: [
          { name: "SVS-50 Multi Jig with the open seat" },
          { name: "Universal Support mounted horizontally" },
          { name: "Seat locked straight at 0 deg" },
          { name: "Tool protrusion of 75-100 mm" },
          { name: "Recommended angle: match the existing bevel with the Marker Method" },
          { name: "Leather honing wheel for the bevel" }
        ]
      }
    ],
    method: [
      {
        text: "Mount the roughing gouge in the SVS-50 open seat with 75-100 mm protruding, and lock the seat at 0 deg.",
        time: "Setup"
      },
      {
        text: "Use the Marker Method to adjust the Universal Support until the wheel touches the full existing bevel; Tormek does not give a fixed roughing gouge angle in this section.",
        time: "Angle setting"
      },
      {
        text: "Roll the gouge on the Universal Support while sliding it across the stone, keeping the jig flange in full contact.",
        time: "Sharpen"
      },
      {
        text: "Grind only until a burr can be felt along the whole edge.",
        time: "Stop point"
      },
      {
        text: "Move to the leather honing wheel with the tool still in the jig, set the same honing angle, and polish the bevel.",
        time: "Hone"
      }
    ]
  },
  {
    slug: "three-eighth-spindle-gouge",
    title: "3/8\" Spindle Gouge",
    kicker: "Turning tool sharpening",
    description: "Standard SVD-186 R spindle gouge profile for an all-round spindle gouge.",
    sourcePages: "SVD-186 R spindle gouge selection chart and sharpening guidance, handbook pages 75-81",
    meta: [
      { label: "Jig", value: "SVD-186 R" },
      { label: "Support", value: "TTS-100 hole A" },
      { label: "Recommended angle", value: "45 deg standard profile" }
    ],
    ingredientSections: [
      {
        title: "Setup",
        items: [
          { name: "SVD-186 R Gouge Jig" },
          { name: "TTS-100 Turning Tool Setter" },
          { name: "Recommended angle: 45 deg standard profile" },
          { name: "Jig setting JS 2" },
          { name: "Tool protrusion P 65 mm" },
          { name: "Universal Support set with TTS-100 hole A" },
          { name: "Profiled leather honing wheel for the flute" }
        ]
      }
    ],
    method: [
      {
        text: "Set the SVD-186 R to JS 2 and mount the spindle gouge with 65 mm protruding from the jig.",
        time: "Setup"
      },
      {
        text: "Use the TTS-100 in hole A to set the Universal Support for the 45 deg standard spindle gouge profile.",
        time: "Angle setting"
      },
      {
        text: "Sharpen with light pressure, swinging the gouge smoothly from side to side so the bevel is touched evenly.",
        time: "Sharpen"
      },
      {
        text: "Stop as soon as the edge is refreshed and a burr is raised; this should be a touch-up, not a reshaping session.",
        time: "Stop point"
      },
      {
        text: "Hone the bevel in the jig at the same setting, then polish the flute freehand on the profiled honing wheel.",
        time: "Hone"
      }
    ]
  },
  {
    slug: "three-eighth-bowl-gouge",
    title: "3/8\" Bowl Gouge",
    kicker: "Turning tool sharpening",
    description: "Standard SVD-186 R bowl gouge profile with lightly swept-back wings.",
    sourcePages: "SVD-186 R bowl gouge selection chart and sharpening guidance, handbook pages 75-81",
    meta: [
      { label: "Jig", value: "SVD-186 R" },
      { label: "Support", value: "TTS-100 hole A" },
      { label: "Recommended angle", value: "45 deg standard profile" }
    ],
    ingredientSections: [
      {
        title: "Setup",
        items: [
          { name: "SVD-186 R Gouge Jig" },
          { name: "TTS-100 Turning Tool Setter" },
          { name: "Recommended angle: 45 deg standard profile" },
          { name: "Jig setting JS 2" },
          { name: "Tool protrusion P 65 mm" },
          { name: "Universal Support set with TTS-100 hole A" },
          { name: "Profiled leather honing wheel for the flute" }
        ]
      }
    ],
    method: [
      {
        text: "Set the SVD-186 R to JS 2 and mount the bowl gouge with 65 mm protruding from the jig.",
        time: "Setup"
      },
      {
        text: "Set the Universal Support with TTS-100 hole A to reproduce the 45 deg standard bowl gouge profile.",
        time: "Angle setting"
      },
      {
        text: "Sharpen with light pressure and swing the gouge side to side, keeping the wings even and slightly convex.",
        time: "Sharpen"
      },
      {
        text: "Check the bevel frequently and grind only where needed so the edge stays symmetrical.",
        time: "Shape control"
      },
      {
        text: "Hone the bevel with the same jig setting, then polish the flute on the profiled honing wheel to remove the burr.",
        time: "Hone"
      }
    ]
  },
  {
    slug: "three-quarter-skew-chisel",
    title: "3/4\" Skew Chisel",
    kicker: "Turning tool sharpening",
    description: "SVS-50 closed-seat setup for a broad-application skew chisel edge.",
    sourcePages: "SVS-50 skew chisel selection chart and sharpening guidance, handbook pages 96-106",
    meta: [
      { label: "Jig", value: "SVS-50 closed seat" },
      { label: "Support", value: "TTS-100 hole B" },
      { label: "Recommended angle", value: "45 deg broad-application edge" }
    ],
    ingredientSections: [
      {
        title: "Setup",
        items: [
          { name: "SVS-50 Multi Jig with the closed seat" },
          { name: "TTS-100 Turning Tool Setter" },
          { name: "Recommended angle: 45 deg broad-application edge" },
          { name: "Jig skew setting JS 20 deg" },
          { name: "Tool protrusion P 55 mm" },
          { name: "Universal Support set with TTS-100 hole B" },
          { name: "Leather honing wheel" }
        ]
      }
    ],
    method: [
      {
        text: "Lock the SVS-50 closed seat at 20 deg and mount the skew with 55 mm protruding.",
        time: "Setup"
      },
      {
        text: "Use TTS-100 hole B to set the Universal Support for the 45 deg broad-application skew profile.",
        time: "Angle setting"
      },
      {
        text: "Sharpen one bevel with forward pressure near the handle side, then turn the jig over and sharpen the opposite bevel.",
        time: "Sharpen"
      },
      {
        text: "Keep the bevels symmetrical, touching up the first side again if the second side needs more grinding.",
        time: "Shape control"
      },
      {
        text: "Move to the honing wheel and hone both bevels alternately at the same angle until the burr is gone.",
        time: "Hone"
      }
    ]
  },
  {
    slug: "diamond-parting-tool",
    title: "Diamond Parting Tool",
    kicker: "Turning tool sharpening",
    description: "SVS-50 open-seat process for a double-bevel parting tool.",
    sourcePages: "SVS-50 parting and beading tool guidance, handbook pages 96-107",
    meta: [
      { label: "Jig", value: "SVS-50 open seat" },
      { label: "Support", value: "Horizontal" },
      { label: "Recommended angle", value: "Match existing bevel" }
    ],
    ingredientSections: [
      {
        title: "Setup",
        items: [
          { name: "SVS-50 Multi Jig with the open seat" },
          { name: "Universal Support mounted horizontally" },
          { name: "Seat locked straight at 0 deg" },
          { name: "Tool protrusion of 75-100 mm" },
          { name: "Recommended angle: match the existing bevel with the Marker Method" },
          { name: "Leather honing wheel" }
        ]
      }
    ],
    method: [
      {
        text: "Mount the diamond parting tool in the SVS-50 open seat with 75-100 mm protruding, and lock the seat straight at 0 deg.",
        time: "Setup"
      },
      {
        text: "Use the Marker Method to set the Universal Support so the wheel follows the existing bevel; Tormek does not give a fixed parting-tool angle in this section.",
        time: "Angle setting"
      },
      {
        text: "Sharpen the first bevel while keeping the jig flange fully against the Universal Support and your fingers close to the edge for control.",
        time: "First side"
      },
      {
        text: "Turn the tool around in the jig and sharpen the second bevel until the two sides are symmetrical.",
        time: "Second side"
      },
      {
        text: "Hone both bevels at the same angle on the leather wheel, keeping the tool mounted in the jig.",
        time: "Hone"
      }
    ]
  }
];
