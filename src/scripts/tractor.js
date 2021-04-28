import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => {
for (const singleArray of yearlyPlan) {
    for(const singlePlant of singleArray) {
                if (singlePlant === "Corn") {
                    addPlant("corn")
                } else if (singlePlant === "Asparagus") {
                    addPlant("asparagus")
                } else if (singlePlant === "Potato") {
                    addPlant("potato")
                } else if (singlePlant === "Soybean") {
                    addPlant("soybean")
                } else if (singlePlant === "Sunflower") {
                    addPlant("sunflower")
                } else if (singlePlant === "Wheat") {
                    addPlant("wheat")
                }
            }
        }
    }
