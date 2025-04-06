import { component_TagConstructor } from "../components/component_TagConstructor.js";
/** JS.DOC ==> 
 * -^-^-
 * @module and @function view_displayTags
 * -^-^-
 * @description Generates and displays ingredient, appliance, and utensil
 * tags  dynamically. Using the elements received as function parameters.
 * -^-^-
 */
export const view_displayTags = (targetItems) => {
    //
    if(!targetItems|| targetItems.length === 0) return console.error("No items pass in function parameter !");
    // console.log("@view_displayTags - Items received as a function parameter :", targetItems);
    
    //
    const ingredientsContainer = document.querySelector("#ingredientsList");
    ingredientsContainer.innerHTML = "";
    const ingredients = [...new Set(targetItems.flatMap(i => i.ingredients.map(i => i.ingredient.toLowerCase())))].sort((a,b) => a.localeCompare(b));
    ingredients.forEach(ingredient => ingredientsContainer.append(component_TagConstructor.createTag(ingredient)));
    // console.log("@view_displayTags - Ingredient tags display in element :", ingredientsContainer);
    
    //
    const appliancesContainer = document.querySelector("#appliancesList");
    appliancesContainer.innerHTML = "";
    const appliances = [...new Set(targetItems.map(i => i.appliance.toLowerCase()))].sort((a,b) => a.localeCompare(b));
    appliances.forEach(i => appliancesContainer.append(component_TagConstructor.createTag(i)));
    // console.log("@view_displayTags - Appliances tags display in element :", appliancesContainer);

    //
    const ustensilsContainer = document.querySelector("#ustensilsList");
    ustensilsContainer.innerHTML = "";
    const ustensils = [...new Set(targetItems.flatMap(i => i.ustensils.map(i => i.toLowerCase())))].sort((a,b) => a.localeCompare(b));
    ustensils.forEach(i => ustensilsContainer.append(component_TagConstructor.createTag(i)));
    // console.log("@view_displayTags - Ustensils tags display in element :", ustensilsContainer);
};

