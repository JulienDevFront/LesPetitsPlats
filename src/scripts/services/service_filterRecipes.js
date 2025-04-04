/** JS.DOC ==> 
 * -^-^-
 * @module and @function service_filterOfRecipes
 * -^-^-
 * @description
 * -^-^-
 */
export const service_filterRecipes = (items, valuesInputTarget = [], tagsIngredientTarget = [], tagsApplianceTarget = [], tagsUstensilTarget = []) => {
    //
    const values = valuesInputTarget.map(v => v.toLowerCase().trim());
    const tagsIngredient = tagsIngredientTarget.map(tag => tag.toLowerCase().trim());
    const tagsAppliance = tagsApplianceTarget.map(tag => tag.toLowerCase().trim());
    const tagsUstensil = tagsUstensilTarget.map(tag => tag.toLowerCase().trim());

    return items.filter(item => {
        //
        const matchesSearch = values.length === 0 || 
            values.some(value => 
                item.name.toLowerCase().includes(value) ||
                item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(value))
            );
        //
        const matchesIngredients = tagsIngredient.length === 0 || 
            tagsIngredient.every(tag => item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(tag)));
        //
        const matchesAppliance = tagsAppliance.length === 0 || 
            tagsAppliance.some(tag => item.appliance.toLowerCase().includes(tag));
        //
        const matchesUstensils = tagsUstensil.length === 0 || 
            tagsUstensil.every(tag => item.ustensils.some(ust => ust.toLowerCase().includes(tag)));
        //
        return matchesSearch && matchesIngredients && matchesAppliance && matchesUstensils;
    });
};
