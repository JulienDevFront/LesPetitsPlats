import { ConstructorClassForTags } from "../class/constructorClassForTags.js";
/** JS.DOC ==> 
 * -^-^-
 * @module and @function view_displayTags
 * -^-^-
 * @description Generates and displays ingredient, appliance, and utensil
 * tags  dynamically. Using the elements received as function parameters.
 * -^-^-
 */
export const view_displayTags = (targetItems) => {

    const items = Array.from(targetItems);
    if(!Array.isArray(items) || items.length === 0)return console.error("No items in ConstructorClassForTags");
    console.log("@view_displayTags - Items received as a function parameter :", items);
    
    const containerTagsIngredients = document.querySelector("#ingredientsList");
    containerTagsIngredients.innerHTML = "";
    const ingredients = [...new Set(items.flatMap(i => i.ingredients.map(i => i.ingredient.toLowerCase())))].sort((a,b) => a.localeCompare(b));
    ingredients.forEach(ingredient => containerTagsIngredients.append(ConstructorClassForTags.createSearchListView(ingredient)));
    console.log("@view_displayTags - Ingredient tags display in element :", containerTagsIngredients);
    
    const containerTagsAppliances = document.querySelector("#appliancesList");
    containerTagsAppliances.innerHTML = "";
    const appliances = [...new Set(items.map(i => i.appliance.toLowerCase()))].sort((a,b) => a.localeCompare(b));
    appliances.forEach(i => containerTagsAppliances.append(ConstructorClassForTags.createSearchListView(i)));
    console.log("@view_displayTags - Appliances tags display in element :", containerTagsAppliances);

    const containerTagsUstensils = document.querySelector("#ustensilsList");
    containerTagsUstensils.innerHTML = "";
    const ustensils = [...new Set(items.flatMap(i => i.ustensils.map(i => i.toLowerCase())))].sort((a,b) => a.localeCompare(b));
    ustensils.forEach(i => containerTagsUstensils.append(ConstructorClassForTags.createSearchListView(i)));
    console.log("@view_displayTags - Ustensils tags display in element :", containerTagsUstensils);
};

