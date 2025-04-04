import { data_RegisterSingleton } from "../data/data_RegisterSingleton.js";
import { service_updateRecipes } from "./service_updateRecipes.js";
// import {service_filterRecipes} from "./service_filterRecipes.js";
/** JS.DOC ==> 
 * -^-^-
 * @module and @function service_manageInputSearch
 * -^-^-
 * @description This function listens for user input in the main search and updates the data_RegisterSingleton with the 
 * entered search terms. It triggers a recipe update whenever the input changes, filtering recipes based on the search.
 */
    export const service_manageInputSearch = (targetInput, targetBtnSub, initialData) => {
        // Get the elements in the DOM :
        const input = document.querySelector(targetInput)
        const button = document.querySelector(targetBtnSub);

        // Add an event of type input and listen to the value :
        input.addEventListener("input", (e) => {
            const value = e.target.value.toLowerCase().trim();
            const result = value
                .split("+")
                .map(term => term.match(/\p{L}+/gu)?.join(" ").trim() || "")
                .filter(term => term.length > 2);
            console.log("@service_manageInputSearch", "\n - Value of the input :", value, "\n - Result of the seizure :", result);
            
            //Search triggered if first word has at least 3 characters :
            if (result.length > 0 && result[0].length >= 3) {
                data_RegisterSingleton.text = [...new Set(result)];
            } else {
                data_RegisterSingleton.text = [];
            };
            
            // Update the recipes and the DOM :
            service_updateRecipes(initialData);
        });
        
        // Prevent the default behavior of form submission :
        button.addEventListener("click", (e) => e.preventDefault());
    };
    
