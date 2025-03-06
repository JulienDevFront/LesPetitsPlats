import { ConstructorRecipeCard } from "../models/contructorRecipeCard.js"
/** JS.DOC ==>
 * -^-^-
 * @module and @function createDisplayRecipesCardView
 * -^-^-
 * @description Generate the  different recipes  with the 
 * "ConstructorRecipeCard" class and add the cards to the 
 * DOM via a container parameter.
 * -^-^-
 */
export const createDisplayRecipesCardView = (containerTarget, items) => {
    const container = document.querySelector(containerTarget)

    return items.length === 0 
        ? container.innerHTML = `<p>Aucune recette n'est disponible ...</p>`
        : container.append(...items.map(item => new ConstructorRecipeCard(item).createRecipeCard()).join(""));
}