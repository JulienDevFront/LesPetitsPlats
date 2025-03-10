import { createDisplayRecipesCardView } from "../view/createDisplayRecipesCardView.js";
import { createSearchListView } from "../view/createSearchListView.js";
import { createCountRecipesView } from "../view/createCountRecipesView.js";
import { getRecipesAppliances, getRecipesIngredients, getRecipesUstensils } from "./API_tags_manager.js";
/** JS.DOC ==>
 * -^-^-
 * @module and @function ALGO_method_filter
 * -^-^-
 * @description
 * -^-^-
 */
    export const ALGO_method_filter = (inputTarget, buttonTarget, items) => {
        const input = document.querySelector(inputTarget);
        const button = document.querySelector(buttonTarget);
    
        // Ajouter un écouteur d'événements pour observer la valeur
        input.addEventListener("input", (e) => {
            const value = e.target.value.trim("").toLowerCase()
    
            const filtered = items.filter(item => 
                item.name.toLowerCase().includes(value) || 
                item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(value))
            );
    
            createDisplayRecipesCardView("#recipesSection", filtered);
            createSearchListView("#ingredientsList", getRecipesIngredients(filtered));
            createSearchListView("#appliancesList", getRecipesAppliances(filtered));
            createSearchListView("#ustensilsList", getRecipesUstensils(filtered));
            createCountRecipesView();
        });
    
        button.addEventListener("click", (e) => {
            e.preventDefault();
        });
    };
    
