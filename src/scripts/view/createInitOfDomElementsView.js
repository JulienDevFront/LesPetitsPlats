import { createDisplayRecipesCardView } from "./createDisplayRecipesCardView.js";
import { createSearchListView } from "./createSearchListView.js";
import { getRecipesAppliances, getRecipesIngredients, getRecipesUstensils } from "../services/serviceOfTagsManager.js";
import { createMessageManagerView } from "./createMessageManagerView.js";
import { createCountRecipesView } from "./createCountRecipesView.js";
/** ==> 
 * -^-^-
 * @module and @function createInitOfDomElementsView
 * -^-^-
 * @description
 */
export const createInitOfDomElementsView = (items) => {
    // Generate the DOM by default ↴
    createDisplayRecipesCardView("#recipesSection", items);
    createSearchListView("#ingredientsList", getRecipesIngredients(items));
    createSearchListView("#appliancesList", getRecipesAppliances(items));
    createSearchListView("#ustensilsList", getRecipesUstensils(items));
    createMessageManagerView("#search", "#msgForUser");
    createCountRecipesView();
}