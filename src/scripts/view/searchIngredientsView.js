/** JS.DOC =>
 * - - -
 * @module an @funtion createIngredientsList
 * - - - 
 * @description Generates a list of ingredients from an array and appends it ingredients in
 * the DOM. Checks if the input is an array  and if the target container exists in the DOM.
 * - - -
 */
export const createIngredientsList = (item) => {
    
    if(!Array.isArray(item)) {
        console.error("The module '@createIngredientsList' wait an array as param! Encapsulate the data in an array and then pass it as a function parameter.")
        return // If this is true => the execution of the script to stop!
    }

    const containerID = "#ingredientsList"
    const container = document.querySelector(containerID)
    if(!container) {
        console.error(`The element "${containerID}" does not exist in the DOM`)
        return // If this is true => the execution of the script to stop!
    }

    const content = item.map(item => `<li class="p-4 text-ellipsis text-nowrap hover:bg-yellow-300"><button>${item}</button></li>`).join("")
    container.innerHTML += content
}