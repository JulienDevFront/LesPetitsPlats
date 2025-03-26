/** JS.DOC ==> 
 * -^-^-
 * @module and @function service_filterOfRecipes
 * -^-^-
 * @description
 * -^-^-
 */
export const service_filterOfRecipes = (items, valuesInputTarget, tagsIngredientTarget = [], tagsApplianceTarget = [], tagsUstensilTarget = []) => {
    // Process the values before the filtering ↴
    const values = valuesInputTarget
    console.log("See the value of the function algo ", values)

    // Process the tags before the filtering ↴
    const tagsIngredient = tagsIngredientTarget
    console.log("See the tags ingredient of the function algo ", tagsIngredient, typeof tagsIngredient)

    const tagsAppliance = tagsApplianceTarget
    console.log("See the tags appliance of the function algo ", tagsAppliance, typeof tagsAppliance)

    const tagsUstensil = tagsUstensilTarget
    console.log("See the tags ustensil of the function algo ", tagsUstensil, typeof tagsUstensil)

    return items.filter(item =>
        values.some(value =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(value.toLowerCase()))
        ) 
        // ||
        // tagsIngredient.length > 0 ? tagsIngredient.some(tag => item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(tag.toLowerCase()))) : [] ||
        // tagsAppliance.length > 0 ? tagsAppliance.some(tag => item.appliance.toLowerCase().includes(tag.toLowerCase())) : [] ||
        // tagsAppliance.length > 0 ? tagsUstensil.some(tag => item.ustensils.some(ust => ust.toLowerCase().includes(tag.toLowerCase()))) : []
    )
}