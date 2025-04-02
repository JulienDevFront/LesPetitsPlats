import { service_researchRegister } from "../data/data_RegisterSingleton.js"
import { service_tagSelectManager } from "./service_tagSelectManager.js"
/** ==> 
 * -^-^-
 * @module and @function service_inputSearchManager
 * -^-^-
 * @description Handles DOM events and updates the view accordingly.
 */
    export const service_inputSearchManager = (inputSearchTarget, btnSubmitTarget, dataDefault) => {
        const input = document.querySelector(inputSearchTarget)
        const button = document.querySelector(btnSubmitTarget);
        
        ["ingredients", "appliances", "ustensils"].forEach(category => service_tagSelectManager(service_researchRegister, category, dataDefault));

        // service_tagSelectManager(service_researchRegister, 'ingredients', dataDefault);

        //
        input.addEventListener("input", (e) => {
            const value = e.target.value;
            //
            if (value.length >= 3)  service_researchRegister.text = [...new Set(value.toLowerCase().split(/[\s+]+/).filter(value => value.length >= 3))]
            else service_researchRegister.text = []
            //
            updateRecipes(dataDefault)
        });
        //
        button.addEventListener("click", (e) => e.preventDefault());
    };
    
