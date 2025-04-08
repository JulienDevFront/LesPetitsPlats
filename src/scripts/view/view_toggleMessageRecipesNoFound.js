/** JS.DOC ==>
 * -^-^-
 * @module and @function view_toggleMessageRecipesNoFound
 * -^-^-
 * @description This function manages the display of a message 
 * to the  user if the recipe search did not find any recipes.
 * -^-^-
 */
export const view_toggleMessageRecipesNoFound = (targetItems) => {
    // Get the elements in the DOM :
    const messageContainer = document.querySelector("#messageRecipesNoFound");
    const input = document.querySelector("#searchBar__input");
    const valueMessage = document.querySelector("#messageRecipesNoFound__value");

    if (targetItems.length === 0) {
        messageContainer.classList.remove("hidden");
        valueMessage.textContent = input.value;
    } else {
        messageContainer.classList.add("hidden");
    }
};
