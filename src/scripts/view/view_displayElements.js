import { component_CardConstructor } from "../components/component_CardConstructor.js";
import { view_displayTags } from "./view_displayTags.js";
import { view_countRecipes } from "./view_countRecipes.js";
import { view_toggleMessageRecipesNoFound } from "./view_toggleMessageRecipesNoFound.js";
/** JS.DOC ==>
 * -^-^-
 * @module and @function view_displayElements
 * -^-^-
 * @description Renders recipe cards, updates tag lists,
 *  and  toggles  messages  based  on filtered  results.
 * -^-^-
 */
export const view_displayElements = (targetRecipesContainer, targetMessageContainer, targetCategoryContainer, targetItems) => {
    // Get the elements in the DOM :
    const recipesContainer = document.querySelector(targetRecipesContainer);
    const messageContainer= document.querySelector(targetMessageContainer);
    const categoryContainer = document.querySelector(`#${targetCategoryContainer}List`);

    // Reset the elements :
    recipesContainer.innerHTML = "";

    // Display the elements :
    if(targetItems.length === 0 ) {
         categoryContainer.innerHTML = "";
         view_countRecipes();
         view_toggleMessageRecipesNoFound(targetItems);
    } else {
        recipesContainer.append(targetItems.map(
            item => new component_CardConstructor(item).createCard()).join(""));
            view_displayTags(targetItems);
            view_countRecipes();
            view_toggleMessageRecipesNoFound(targetItems);
    }
}
