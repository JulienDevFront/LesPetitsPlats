import { createInitOfDomElementsView } from '../view/createInitOfDomElementsView.js';
import { serviceOfFilterOfRecipes } from '../services/serviceOfFilterOfRecipes.js'; 
// import { createDisplayForTagSelectView } from '../view/createDisplayForTagSelectView.js';
/** ==> 
 * -^-^-
 * @module and @function serviceOfManagerOfTheDOM
 * -^-^-
 * @description Handles DOM events and updates the view accordingly.
 */
export const serviceOfManagerOfTheDOM = (items, tags = []) => {
    const input = document.querySelector("#search");
    const button = document.querySelector("#searchMain");
    
    createInitOfDomElementsView(items);

    
    input.addEventListener("input", (e) => {
        const value = e.target.value.trim().toLowerCase();
        searchTerms.text = input.target.value
        
        if (value.length >= 3) {
            const filteredRecipes = serviceOfFilterOfRecipes(items, value, tags);
            console.log("Filtered recipes: ", filteredRecipes);
            createInitOfDomElementsView(filteredRecipes)
        } else {
            createInitOfDomElementsView(items);
        }
    });

    // Event listener for the button click ↴
    button.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Button clicked");
    });
}
