// takes an array of harvested plants and prints them to the DOM. 



export const Catalog = (harvestedPlants) => {
   let mainContainer = document.querySelector(".container")

    for (const plant of harvestedPlants) {
        mainContainer.innerHTML +=`<section class="plant"><p>${plant.type}</p></section>`
    }
}