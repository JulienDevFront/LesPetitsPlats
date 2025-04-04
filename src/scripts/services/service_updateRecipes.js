import { service_filterRecipes } from "./service_filterRecipes.js";
import { service_manageTagSelect } from "./service_manageTagSelect.js";
// import { service_manageTagSearch } from "./service_manageTagSearch.js";
import { data_RegisterSingleton } from "../data/data_RegisterSingleton.js";
import { view_displayElements } from "../view/view_displayElements.js";
/** JS.DOC ==>
 * -^-^-
 * @module and @function service_updateRecipes
 * -^-^-
 * @description Filters recipes based on the current search criteria (text, ingredients, 
 * appliances,  ustensils) and  updates  the view  with the  filtered  list of  recipes.
 */
export const service_updateRecipes = (initialData) => {
   // Filter recipes based on current search criteria :
   const filteredRecipes = service_filterRecipes(
        initialData, 
        data_RegisterSingleton.text, 
        data_RegisterSingleton.ingredients, 
        data_RegisterSingleton.appliances, 
        data_RegisterSingleton.ustensils
    );
    console.log("@service_updateRecipes : \n", "\n - Filtered recipes :", filteredRecipes, "\n - And the register :", data_RegisterSingleton);

    // Update the displayed elements :
    view_displayElements("#recipesSection", "#msgRecipesNoFound", filteredRecipes);

    // // Manage of UI elements with the values :
    ["ingredients", "appliances", "ustensils"].forEach(category => service_manageTagSelect(data_RegisterSingleton, category, initialData));
};