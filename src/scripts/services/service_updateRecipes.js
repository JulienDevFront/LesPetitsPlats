import { service_filterOfRecipes } from "./service_filterOfRecipes.js";
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
   const filteredRecipes = service_filterOfRecipes(
        initialData, 
        data_RegisterSingleton.text, 
        data_RegisterSingleton.ingredients, 
        data_RegisterSingleton.appliances, 
        data_RegisterSingleton.ustensils
    );
    console.log("Filtered recipes:", filteredRecipes);

// Update the displayed elements :
view_displayElements("#recipesSection", "#msgRecipesNoFound", filteredRecipes);
};