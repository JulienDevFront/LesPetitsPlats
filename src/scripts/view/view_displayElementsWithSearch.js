import { ConstructorRecipeCard } from "../class/contructorRecipeCard.js"
import { FactoryClassForTags } from "../class/factoryClassForTags.js"
import { view_countRecipes } from "./view_countRecipes.js"
/** JS.DOC ==>
 * -^-^-
 * @module and @function view_displayElementsWithSearch
 * -^-^-
 * @description Display the  different elements of a 
 * search with the * classes and modules appropriate
 * -^-^-
 */
export const view_displayElementsWithSearch = (containerTarget, containerMsgRecipesNoFoundTarget, items) => {

    // Get the elements in the DOM :
    const container = document.querySelector(containerTarget);
    const containerMsgRecipesNoFound = document.querySelector(containerMsgRecipesNoFoundTarget);

    // Reset the elements :
    container.innerHTML = "";
    containerMsgRecipesNoFound.innerHTML = "";

    // Display the elements :
    return items.length === 0 
        ? containerMsgRecipesNoFound.innerHTML = `<p>Aucune recette n'est disponible ...</p>`
        : container.append(items.map(
            item => new ConstructorRecipeCard(item).createRecipeCard()).join("")), 
            FactoryClassForTags(items), 
            view_countRecipes();
}