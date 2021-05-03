//takes an array of plants in the field and returns an array of plants based on output of each seed.

export const harvestPlants = (plantField) => {
  let seedArray = [];
  for (const plant of plantField) {
    if (plant.type === "Corn") {
      for (var i = 0; i < plant.output / 2; i++) {
        seedArray.push(plant);
      }
    } else {
      for (var i = 0; i < plant.output; i++) {
        seedArray.push(plant);
      }
    }
  }

  return seedArray;
};
