import { component_CardConstructor } from "../components/component_CardConstructor.js"
import { view_displayTags } from "./view_displayTags.js"
import { view_countRecipes } from "./view_countRecipes.js"
/** JS.DOC ==>
 * -^-^-
 * @module and @function view_displayElements
 * -^-^-
 * @description 
 * -^-^-
 */
export const view_displayElements = (targetRecipesContainer, targetMessageContainer, targetItems) => {
    // Get the elements in the DOM :
    const recipesContainer = document.querySelector(targetRecipesContainer);
    const messageContainer= document.querySelector(targetMessageContainer);

    // Reset the elements :
    recipesContainer.innerHTML = "";
    messageContainer.innerHTML = "";

    // Display the elements :
    return targetItems.length === 0 
        ? messageContainer.innerHTML = `<p>Aucune recette n'est disponible ...</p>`
        : recipesContainer.append(targetItems.map(
            item => new component_CardConstructor(item).createCard()).join("")), 
            view_displayTags(targetItems), 
            view_countRecipes();
}