/** JS.DOC ==>
 * - - -
 * @module and @function createCountRecipesView
 * - - -
 * @description This  function  will  count the number  of  recipes 
 * displayed on the page and display it in the recipesCountSection.
 * - - -
 */
export const createCountRecipesView = () => {
    const container = document.querySelector("#recipesSection");
    
    let numberOfRecipes = 0;
    for(const recipe of container.children) numberOfRecipes = numberOfRecipes + 1

    const recipesCount = document.querySelector("#recipesCountSection__number");
    recipesCount.textContent = numberOfRecipes;

    const string = document.querySelector("#recipesCountSection__repice");
    if(numberOfRecipes <= 1)  string.textContent = string.textContent.slice(0, -1);
};