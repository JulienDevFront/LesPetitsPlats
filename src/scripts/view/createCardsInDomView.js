import { serviceOfFilterOfRecipes } from "../services/serviceOfFilterOfRecipes.js";
import { createDisplayRecipesCardView } from "./createDisplayRecipesCardView.js";
import { createSearchListView } from "./createSearchListView.js";
import { createCountRecipesView } from "./createCountRecipesView.js";
import { createMessageManagerView } from "./createMessageManagerView.js";
import { getRecipesAppliances, getRecipesIngredients, getRecipesUstensils, getTagsChecked } from "../services/serviceOfTagsManager.js"
import { createDisplayForTagSelectView } from "./createDisplayForTagSelectView.js";
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
    createMessageManagerView(inputTarget, "#msgForUser");
    createSearchListView("#ingredientsList", getRecipesIngredients(items));
    createSearchListView("#appliancesList", getRecipesAppliances(items));
    createSearchListView("#ustensilsList", getRecipesUstensils(items));
    createDisplayForTagSelectView("#ingredientsList", "#containerTags")
    createCountRecipesView();
    // Attached a listener of event ↴
    input.addEventListener("input", (e) => {

        const value = e.target.value.trim().toLowerCase()
        // Generate the DOM by default ↴
        createDisplayRecipesCardView("#recipesSection", items);
        createMessageManagerView(inputTarget, "#msgForUser");
        createSearchListView("#ingredientsList", getRecipesIngredients(items));
        createSearchListView("#appliancesList", getRecipesAppliances(items));
        createSearchListView("#ustensilsList", getRecipesUstensils(items));
        createDisplayForTagSelectView("#ingredientsList", "#containerTags")
        createCountRecipesView();
        // Import the module of algorithm of filter of recipes ↴
        if(value.length >= 3 ) {
            const filteredRecipes = serviceOfFilterOfRecipes(items, value);
            console.log("See the value of the filtered recipes : ", filteredRecipes)
            // Create the differents views for generate the DOM with the dynamic values ↴
            createDisplayRecipesCardView("#recipesSection", filteredRecipes);
            createSearchListView("#ingredientsList", getRecipesIngredients(filteredRecipes));
            createSearchListView("#appliancesList", getRecipesAppliances(filteredRecipes));
            createSearchListView("#ustensilsList", getRecipesUstensils(filteredRecipes));
            createDisplayForTagSelectView("#ingredientsList", "#containerTags")
            createCountRecipesView();
        }
    });

    button.addEventListener("click", (e) => {
        e.preventDefault();
    });
};
    
