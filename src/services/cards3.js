const cards3 = [
  {
    epic: "Blueville Estate",
    feature: "Bus Street",
    story: "No 11 Bus Street 3 bedroom house foundations and framework",
    size: 3,
    storyNumber: "S-379",
    depends: "N/A",
  },
  {
    epic: "Blueville Estate",
    feature: "Prefab Crescent",
    story:
      "No 1..4 Prefab Crescent 4x2 bedroom prefab houses foundations and framework",
    size: 8,
    storyNumber: "S-301",
    depends: "N/A",
  },
  {
    epic: "Blueville Estate",
    feature: "Prefab Crescent",
    story: "No 1..4 Prefab Crescent 4x2 bedroom prefab houses internal fitout",
    size: 5,
    storyNumber: "S-303",
    depends: "No 1..4 Prefab Crescent Wiring and plumbing (S-302)",
  },
  {
    epic: "Blueville Estate",
    feature: "Prefab Crescent",
    story:
      "No 1..4 Prefab Crescent 4x2 bedroom prefab houses wiring and plumbing",
    size: 150,
    storyNumber: "S-302",
    depends: "No 1..4 Prefab Crescent foundations and framework (S-301)",
  },
];

export function getCards3() {
  return cards3;
}
