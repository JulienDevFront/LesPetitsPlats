import { service_researchRegister } from "./service_researchRegister.js"
import { service_filterOfRecipes } from "./service_filterOfRecipes.js";
import { createDisplayRecipesCardView } from "../view/createDisplayRecipesCardView.js"
import { createCountRecipesView } from "../view/createCountRecipesView.js";
/** ==> 
 * -^-^-
 * @module and @function service_inputSearchManager
 * -^-^-
 * @description Handles DOM events and updates the view accordingly.
 */
export const service_inputSearchManager = (inputSearchTarget, btnSubmitTarget, dataDefault) => {
    const input = document.querySelector(inputSearchTarget);
    const button = document.querySelector(btnSubmitTarget);
    
    input.addEventListener("input", (e) => {
        // 
        const value = e.target.value
        // 
        if (value.length >= 3) {
            service_researchRegister.text = [...new Set(value.toLowerCase().split(/[\s+]+/).filter(value => value.length >= 3))]
            const filteredRecipes = service_filterOfRecipes(dataDefault, service_researchRegister.text);
            console.log("Filtered recipes: ", filteredRecipes);
            //
            createDisplayRecipesCardView("#recipesSection", "#msgRecipesNoFound", filteredRecipes)
            createCountRecipesView()
        } else {
            createDisplayRecipesCardView("#recipesSection", "#msgRecipesNoFound", dataDefault);
            createCountRecipesView()
        }
    });
    // Event listener for the button click ↴
    button.addEventListener("click", (e) => e.preventDefault())
    //
    return service_researchRegister.text
}
