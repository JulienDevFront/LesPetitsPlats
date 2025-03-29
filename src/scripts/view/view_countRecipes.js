/** JS.DOC ==>
 * -^-^-
 * @module and @function view_countRecipes
 * -^-^-
 * @description This  function  will  count the number  of recipes 
 * displayed on the page and display it in the recipesCountSection
 * -^-^-
 */
export const view_countRecipes = () => {
    
    // Get the elements in the DOM :
    const container = document.querySelector("#recipesSection");
    const recipesCount = document.querySelector("#recipesCountSection");
   
    // Display the singular or plural :
    let numberOfRecipes = container.children.length;
    recipesCount.textContent = `${numberOfRecipes} recette${numberOfRecipes > 0 ? 's' : ''}`;
};