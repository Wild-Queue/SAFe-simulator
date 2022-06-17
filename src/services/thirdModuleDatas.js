const sprints = [[], [], [], [], [], []];

export function getSprints3() {
  return sprints;
}

const cards = [
  {
    // blue epics
    epic: "Blueville Estate",
    feature: "Prefab Crescent",
    story:
      "No 1..4 Prefab Crescent 4x2 bedroom prefab houses foundations and framework",
    size: 8,
    id: "S-301",
  },
  {
    epic: "Blueville Estate",
    feature: "Prefab Crescent",
    story:
      "No 1..4 Prefab Crescent 4x2 bedroom prefab houses wiring and plumbing",
    size: 3,
    id: "S-302",
    dependsOn: "S-301",
  },
  {
    epic: "Blueville Estate",
    feature: "Prefab Crescent",
    story: "No 1..4 Prefab Crescent 4x2 bedroom prefab houses internal fitout",
    size: 5,
    id: "S-303",
    dependsOn: "S-302",
  },

  {
    epic: "Blueville Estate",
    feature: "Prefab Crescent",
    story:
      "No 5..8 Prefab Crescent 4x2 bedroom prefab houses foundations and framework",
    size: 8,
    id: "S-304",
  },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 5..8 Prefab Crescent 4x2 bedroom prefab houses wiring and plumbing",
  //   size: 3,
  //   id: "S-305",
  //   dependsOn: "S-304",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story: "No 5..8 Prefab Crescent 4x2 bedroom prefab houses internal fitout",
  //   size: 5,
  //   id: "S-306",
  //   dependsOn: "S-305",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 9..12 Prefab Crescent 4x2 bedroom prefab houses foundations and framework",
  //   size: 8,
  //   id: "S-307",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 9..12 Prefab Crescent 4x2 bedroom prefab houses wiring and plumbing",
  //   size: 3,
  //   id: "S-308",
  //   dependsOn: "S-307",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story: "No 9..12 Prefab Crescent 4x2 bedroom prefab houses internal fitout",
  //   size: 5,
  //   id: "S-309",
  //   dependsOn: "S-308",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 13..16 Prefab Crescent 4x2 bedroom prefab houses foundations and framework",
  //   size: 8,
  //   id: "S-310",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 13..16 Prefab Crescent 4x2 bedroom prefab houses wiring and plumbing",
  //   size: 3,
  //   id: "S-311",
  //   dependsOn: "S-310",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 13..16 Prefab Crescent 4x2 bedroom prefab houses internal fitout",
  //   size: 5,
  //   id: "S-312",
  //   dependsOn: "S-311",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 17..20 Prefab Crescent 4x2 bedroom prefab houses foundations and framework",
  //   size: 8,
  //   id: "S-313",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 17..20 Prefab Crescent 4x2 bedroom prefab houses wiring and plumbing",
  //   size: 3,
  //   id: "S-314",
  //   dependsOn: "S-313",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 17..20 Prefab Crescent 4x2 bedroom prefab houses internal fitout",
  //   size: 5,
  //   id: "S-315",
  //   dependsOn: "S-314",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 21..24 Prefab Crescent 4x2 bedroom prefab houses foundations and framework",
  //   size: 8,
  //   id: "S-316",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 21..24 Prefab Crescent 4x2 bedroom prefab houses wiring and plumbing",
  //   size: 3,
  //   id: "S-317",
  //   dependsOn: "S-316",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story:
  //     "No 21..24 Prefab Crescent 4x2 bedroom prefab houses internal fitout",
  //   size: 5,
  //   id: "S-318",
  //   dependsOn: "S-317",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Prefab Crescent",
  //   story: "Prefab Crescent connection to Electricity Grid, Sewer, Stormwater",
  //   size: 5,
  //   id: "S-319",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Bus Street",
  //   story: "No 1 Bus Street 3 bedroom house foundations and framework",
  //   size: 3,
  //   id: "S-348",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Bus Street",
  //   story: "No 11 Bus Street 3 bedroom house foundations and framework",
  //   size: 3,
  //   id: "S-379",
  // },
  // {
  //   epic: "Blueville Estate",
  //   feature: "Bus Street",
  //   story: "No 11 Bus Street 3 bedroom house wiring and plumbing",
  //   size: 1,
  //   id: "S-380",
  //   dependsOn: "S-379",
  // },

  // orange epics
  {
    epic: "WIP Supermarket",
    feature: "WIP Supermarket",
    story: "WIP Supermarket Wiring & Plumbing",
    size: 5,
    id: "S-539",
    dependsOn: "S-542",
  },
  {
    epic: "WIP Supermarket",
    feature: "WIP Supermarket",
    story: "WIP Supermarket Connection to Electricity Grid, Sewer, Stormwater",
    size: 5,
    id: "S-540",
  },
  {
    epic: "WIP Supermarket",
    feature: "WIP Supermarket",
    story: "WIP Supermarket Carpark",
    size: 3,
    id: "S-541",
  },
  {
    epic: "WIP Supermarket",
    feature: "WIP Supermarket",
    story: "WIP Supermarket Foundations and Framework",
    size: 13,
    id: "S-542",
  },

  // green epics
  {
    epic: " ",
    feature: "Adaptive Medical Centre",
    story: "Adaptive Medical Centre Wiring & Plumbing",
    size: 5,
    id: "S-547",
    dependsOn: "S-550",
  },

  // purple epics
  {
    epic: "Scaled Accommodation",
    feature: "Safety Motel",
    story: "Safety Motel Wiring and Plumbing",
    size: 5,
    id: "S-383",
    dependsOn: "S-585",
  },

  // red epics
  {
    epic: "Drew's Downtown Shopping Strip",
    feature: "Smalltown Essentials",
    story: "Smalltown Essentials Wiring & Plumbing",
    size: 8,
    id: "S-458",
    dependsOn: "S-457",
  },

  // brown epics
  {
    epic: "Extreme Technology Park",
    feature: "Giga Complex",
    story: "Giga Complex Carpark",
    size: 5,
    id: "S-413",
  },

  // light blue epics
  {
    epic: "Lean Leisure and Health",
    feature: "Health Centre",
    story: "Health Centre Carpark",
    size: 5,
    id: "S-121",
  },

  // light blue epics
  {
    epic: "White Downs Estate",
    feature: "Demo Street",
    story: "No 1 Demo Street 4 Bedroom House foundations and framework",
    size: 5,
    id: "S-155",
  },
];

export function getCards3() {
  return cards;
}

const epicsColor = {
  "Blueville Estate": "blue-epic  text-white",
  "WIP Supermarket": "orange-epic text-white",
  " ": "green-epic text-white",
  "Scaled Accommodation": "purple-epic text-white",
  "Drew's Downtown Shopping Strip": "red-epic text-white",
  "Extreme Technology Park": "brown-epic text-white",
  "Lean Leisure and Health": "light-blue-epic text-white",
  "White Downs Estate": "violet-epic text-white",
};

export function getEpicsColor() {
  return epicsColor;
}
