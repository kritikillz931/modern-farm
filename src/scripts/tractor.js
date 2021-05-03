// takes the yearly plan from plan.js and itterates to create a plant for each seed of that plan
// using the addPlant function from field.js

import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (yearlyPlan) => {
    for (const singleArray of yearlyPlan) {
        for(const singlePlant of singleArray) {
            if (singlePlant === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed)
            } else if (singlePlant === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            } else if (singlePlant === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            } else if (singlePlant === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            } else if (singlePlant === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            } else if (singlePlant === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }
}
