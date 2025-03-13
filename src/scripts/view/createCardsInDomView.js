import { serviceOfFilterOfRecipes } from "../services/serviceOfFilterOfRecipes.js";
import { createDisplayRecipesCardView } from "./createDisplayRecipesCardView.js";
import { createSearchListView } from "./createSearchListView.js";
import { createCountRecipesView } from "./createCountRecipesView.js";
import { getRecipesAppliances, getRecipesIngredients, getRecipesUstensils } from "../services/serviceOfTagsManager.js"
/** JS.DOC ==>
 * -^-^-
 * @module and @function createCardsInDomView
 * -^-^-
 * @description Manages dynamic updating of search results based on user input. 
 * Applies a  filter on recipes  based on the input  and updates the display in 
 * real time.
 * -^-^-
 */
export const createCardsInDomView = (inputTarget, buttonTarget, items) => {
    // Target the elements in the DOM for search main ↴
    const input = document.querySelector(inputTarget);
    const button = document.querySelector(buttonTarget);
    // Generate the DOM by default ↴
    createDisplayRecipesCardView("#recipesSection", items);
    createSearchListView("#ingredientsList", getRecipesIngredients(items));
    createSearchListView("#appliancesList", getRecipesAppliances(items));
    createSearchListView("#ustensilsList", getRecipesUstensils(items));
    createCountRecipesView();
    // Attached a listener of event ↴
    input.addEventListener("input", (e) => {
        const value = e.target.value.trim().toLowerCase()
        // Import the module of algorithm of filter of recipes ↴
        if(value.length >= 3 ) {
            const filteredRecipes = serviceOfFilterOfRecipes(items, value)
            // Create the differents views for generate the DOM with the dynamic values ↴
            createDisplayRecipesCardView("#recipesSection", filteredRecipes);
            createSearchListView("#ingredientsList", getRecipesIngredients(filteredRecipes));
            createSearchListView("#appliancesList", getRecipesAppliances(filteredRecipes));
            createSearchListView("#ustensilsList", getRecipesUstensils(filteredRecipes));
            createCountRecipesView();
        }
    });

    button.addEventListener("click", (e) => {
        e.preventDefault();
    });
};
    
