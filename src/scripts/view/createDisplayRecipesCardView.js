import { ConstructorRecipeCard } from "../class/contructorRecipeCard.js"
/** JS.DOC ==>
 * -^-^-
 * @module and @function createDisplayRecipesCardView
 * -^-^-
 * @description Generate the  different recipes  with the 
 * "ConstructorRecipeCard" class and add the cards to the 
 * DOM via a container parameter.
 * -^-^-
 */
export const createDisplayRecipesCardView = (containerTarget, containerMsgRecipesNoFoundTarget, items) => {
    const container = document.querySelector(containerTarget)
    const containerMsgRecipesNoFound = document.querySelector(containerMsgRecipesNoFoundTarget)

    container.innerHTML = ""
    containerMsgRecipesNoFound.innerHTML = ""

    return items.length === 0 
        ? containerMsgRecipesNoFound.innerHTML = `<p>Aucune recette n'est disponible ...</p>`
        : container.append(items.map(item => new ConstructorRecipeCard(item).createRecipeCard()).join(""))
}