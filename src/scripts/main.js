import { usePlants } from "./field.js";

import { plantSeeds } from "./tractor.js";

const yearlyPlan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

plantSeeds(yearlyPlan)

const allPlants = usePlants()


console.log(allPlants)