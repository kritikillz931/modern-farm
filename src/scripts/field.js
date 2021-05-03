// addPlant function takes a single seed and adds it to an array of plants called plantField. 
// usePlants function returns a copy array of all plants


let plantField = []

export const addPlant = (seed) => {
    if(Array.isArray(seed) === true) {
        for(const corn of seed) {
            plantField.push(corn)
        } 
    }   else {
        plantField.push(seed)
    }
        return plantField
}


export const usePlants = () =>  {
   return [...plantField ]
}


