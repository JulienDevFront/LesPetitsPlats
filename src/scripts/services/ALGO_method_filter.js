import { createDisplayRecipesCardView } from "../view/createDisplayRecipesCardView.js";
import { createSearchListView } from "../view/createSearchListView.js";
import { createCountRecipesView } from "../view/createCountRecipesView.js";
import { tag_ingredient, tag_appliance, tag_ustensil } from "./API_tags_manager.js";
/** JS.DOC ==>
 * -^-^-
 * @module and @function ALGO_method_filter
 * -^-^-
 * @description
 * -^-^-
 */
export const ALGO_method_filter = (inputTarget, buttonTarget, items) => {
    const input = document.querySelector(inputTarget)
    const button = document.querySelector(buttonTarget)

    input.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase().trim();
        const arr = Array.isArray(items._data) ? items._data : console.error("The data passed as a parameter is not an array !")

        const filtered = arr.filter(item => 
            item.name.toLowerCase().includes(value) || 
            item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(value))
        )

        console.log("Value of input :", value)
        console.log("Items to filter", arr)
        console.log("Items filtered :", filtered)
    
        createDisplayRecipesCardView("#recipesSection", filtered)
        createSearchListView("#ingredientsList", tag_ingredient(filtered))
        createSearchListView("#appliancesList", tag_appliance(filtered))
        createSearchListView("#ustensilsList", tag_ustensil(filtered))
        createCountRecipesView();
    });

    button.addEventListener("click",(e) => {
        e.preventDefault()
    });
};
