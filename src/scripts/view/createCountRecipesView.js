/** JS.DOC ==>
 * -^-^-
 * @module and @function createCountRecipesView
 * -^-^-
 * @description This  function  will  count the number  of  recipes 
 * displayed on the page and display it in the recipesCountSection.
 * -^-^-
 */
export const createCountRecipesView = () => {
    const container = document.querySelector("#recipesSection")
    
    let numberOfRecipes = container.children.length

    const recipesCount = document.querySelector("#recipesCountSection")
    recipesCount.textContent = `${numberOfRecipes} recette${numberOfRecipes > 0 ? 's' : ''}`
};