import { service_researchRegister } from "./service_researchRegister.js"
import { service_filterOfRecipes } from "./service_filterOfRecipes.js"
import { service_tagSelectManager } from "./service_tagSelectManager.js"
import { view_displayElementsWithSearch } from "../view/view_displayElementsWithSearch.js"
import { FactoryClassForTags } from "../class/factoryClassForTags.js"
/** ==> 
 * -^-^-
 * @module and @function service_inputSearchManager
 * -^-^-
 * @description Handles DOM events and updates the view accordingly.
 */
    export const service_inputSearchManager = (inputSearchTarget, btnSubmitTarget, dataDefault) => {
        const input = document.querySelector(inputSearchTarget)
        const button = document.querySelector(btnSubmitTarget)
    
        const updateRecipes = () => {
            const filteredRecipes = service_filterOfRecipes(
                dataDefault,
                service_researchRegister.text,
                service_researchRegister.ingredients,
                service_researchRegister.appliances,
                service_researchRegister.ustensils
            )
            console.log("See the recipes filtered :", filteredRecipes)
            //
            view_displayElementsWithSearch("#recipesSection", "#msgRecipesNoFound", filteredRecipes)
            const displayTags = new FactoryClassForTags(filteredRecipes)
            console.log(displayTags)
        };
        // 
        ["ingredients", "appliances", "ustensils"].forEach(category => service_tagSelectManager(service_researchRegister, category, updateRecipes));
        //
        input.addEventListener("input", (e) => {
            const value = e.target.value;
            //
            if (value.length >= 3)  service_researchRegister.text = [...new Set(value.toLowerCase().split(/[\s+]+/).filter(value => value.length >= 3))]
            else service_researchRegister.text = []
            //
            updateRecipes()


        });
        //
        button.addEventListener("click", (e) => e.preventDefault());
    };
    
