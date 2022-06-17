const sprints = [[], [], [], [], [], []];

export function getSprints3() {
  return sprints;
}

const cards = [
  {
    epic: "Blueville Estate",
    feature: "Bus Street",
    story: "No 11 Bus Street 3 bedroom house foundations and framework",
    size: 3,
    id: "S-379",
  },
  {
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
    story: "No 1..4 Prefab Crescent 4x2 bedroom prefab houses internal fitout",
    size: 5,
    id: "S-303",
    dependsOn: "S-302",
  },
  {
    epic: "Blueville Estate",
    feature: "Prefab Crescent",
    story:
      "No 1..4 Prefab Crescent 4x2 bedroom prefab houses wiring and plumbing",
    size: 150,
    id: "S-302",
    dependsOn: "S-301",
  },
];

export function getCards3() {
  return cards;
}
