/** JS.DOC ==> 
 * -^-^-
 * @module and @function service_filterOfRecipes
 * -^-^-
 * @description Recipe filtering algorithm based on  user-selected 
 * search text, tag ingredients, tag appliances, and tag utensils.
 * -^-^-
 */
export const service_filterRecipes = (items, targetValue = [], targetIngredient = [], targetAppliance = [], targetUstensils = []) => {

    return items.filter(item => {
        // Find a match of the target value :
        const matchesValue = targetValue.length === 0 || 
            targetValue.some(value => 
                item.name.toLowerCase().includes(value) ||
                item.description.toLowerCase().includes(value) || 
                item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(value))
            );
        
        // Find a match for the ingredients :
        const matchesIngredients = targetIngredient.length === 0 ||
            targetIngredient.every(tag => item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(tag)));
        
        // Find a match for the appliances :
        const matchesAppliance = targetAppliance.length === 0 || 
            targetAppliance.some(tag => item.appliance.toLowerCase().includes(tag));
       
        // Find a match for the ustensils :
        const matchesUstensils = targetUstensils.length === 0 || 
            targetUstensils.every(tag => item.ustensils.some(ust => ust.toLowerCase().includes(tag)));
        
        // Return the value of the matchs :
        return matchesValue && matchesIngredients && matchesAppliance && matchesUstensils;
    });
};
