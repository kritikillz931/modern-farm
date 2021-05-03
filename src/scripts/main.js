import { Catalog } from "./catalog.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";


const yearlyPlan = createPlan() 

plantSeeds(yearlyPlan)

const allPlants = usePlants()
const harvest = harvestPlants(allPlants)
Catalog(harvest)
