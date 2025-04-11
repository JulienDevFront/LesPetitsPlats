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
        let matchValue = targetValue.length === 0;
        if(!matchValue) {
            for(const value of targetValue) {
                if(item.name.includes(value) || item.description.includes(value)) matchValue = true;
            };
        };

        // Search matchs of ingredient :
        let matchIngredient = targetIngredient.length === 0;
        if(!matchIngredient)  {
            for(const ingredient of targetIngredient) {
                for(const ingredientsInItem of item.ingredients) {
                    if(ingredientsInItem.ingredient.toLowerCase().includes(ingredient.toLowerCase())) matchIngredient = true;
                };
            };
        };

        // Search matchs of appliances :
        let matchAppliance = targetAppliance.length === 0;
        if(!matchAppliance) {
            for(const appliance of targetAppliance) {
                if(item.appliance.toLowerCase().includes(appliance.toLowerCase())) matchAppliance = true;
            };
        };

        // Search matchs of ustensils :
        let matchUstensil = targetUstensils.length === 0;
        if(!matchUstensil) {
            for(const ustensil of targetUstensils) {
                for(const instensilInItem of item.ustensils) {
                    if(instensilInItem.toLowerCase().includes(ustensil.toLowerCase())) matchUstensil = true;
                };
            };
        };

        // Add the item match in arr :
        if(matchValue && matchIngredient && matchAppliance && matchUstensil) filteredItems.push(item);
    };
    console.log("@service_filterRecipes", "\nFiltered items :", filteredItems);
    return filteredItems.length === 0
        ? [...new Set(items)]
        : filteredItems
        
};

