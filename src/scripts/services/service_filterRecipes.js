/** JS.DOC ==> 
 * -^-^-
 * @module and @function service_filterOfRecipes
 * -^-^-
 * @description Recipe filtering algorithm based on  user-selected 
 * search text, tag ingredients, tag appliances, and tag utensils.
 * -^-^-
 */
export const service_filterRecipes = (items, targetValue = [], targetIngredient = [], targetAppliance = [], targetUstensils = []) => {
    // Array of filtered items :
    const filteredItems = [];
    
    
    for (const item of items) {
        // Search matchs of value :
        let matchsValue = targetValue.length === 0;
        if(!matchsValue) {
            for(const value of targetValue) {
                if(item.name.includes(value) || item.description.includes(value)) matchsValue = true;
            };
        };

        // Search matchs of ingredient :
        let matchsIngredient = targetIngredient.length === 0;
        if(!matchsIngredient)  {
            for(const ingredient of targetIngredient) {
                for(const ingredientsInItem of item.ingredients) {
                    if(ingredientsInItem.ingredient.toLowerCase().includes(ingredient.toLowerCase())) matchsIngredient = true;
                };
            };
        };

        // Search matchs of appliances :
        let matchsAppliance = targetAppliance.length === 0;
        if(!matchsAppliance) {
            for(const appliance of targetAppliance) {
                if(item.appliance.toLowerCase().includes(appliance.toLowerCase())) matchsAppliance = true;
            };
        };

        // Search matchs of ustensils :
        let matchsUstensil = targetUstensils.length === 0;
        if(!matchsUstensil) {
            for(const ustensil of targetUstensils) {
                for(const instensilInItem of item.ustensils) {
                    if(instensilInItem.toLowerCase().includes(ustensil.toLowerCase())) matchsUstensil = true;
                };
            };
        };

        // Add the item match in arr :
        if(matchsValue && matchsIngredient && matchsAppliance && matchsUstensil) filteredItems.push(item);
    };
    console.log("@service_filterRecipes", "\nFiltered items :", filteredItems);
    return filteredItems.length === 0
        ? items
        : filteredItems
        
};

