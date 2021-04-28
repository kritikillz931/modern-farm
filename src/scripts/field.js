import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js";


let plantField = []

export const addPlant = (seed) => {
    if(seed === "corn") {
        const cornSeed = createCorn()
        plantField.push(cornSeed)
            } else if (seed === "asparagus") {
            const asparagusSeed = createAsparagus()
            plantField.push(asparagusSeed)
                } else if (seed === "potato") {
                    const potatoSeed = createPotato()
                    plantField.push(potatoSeed)
                    } else if (seed === "soybean") {
                        const soybeanSeed = createSoybean()
                        plantField.push(soybeanSeed)
                        } else if (seed === "sunflower") {
                            const sunflowerSeed = createSunflower()
                            plantField.push(sunflowerSeed)
                            } else if (seed === "wheat") {
                                const wheatSeed = createWheat()
                                plantField.push(wheatSeed)
                                }
                            }


export const usePlants = () =>  {
   return [...plantField ]
}
