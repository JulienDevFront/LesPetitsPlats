/** JS.DOC ==> 
 * -^-^-
 * @module and @function serviceOfFilterOfRecipes
 * -^-^-
 * @description
 * -^-^-
 */
// export const serviceOfFilterOfRecipes = (items, valuesInputTarget, tagsIngredientTarget = [], tagsApplianceTarget = [], tagsUstensilTarget = []) => {
//     // Process the values before the filtering ↴
//     const values = [...new Set(valuesInputTarget.split(/[\s+]+/).filter(value => value.length >= 3))]
//     console.log("See the value of the function algo ", values)

//     // Process the tags before the filtering ↴
//     const tagsIngredient = tagsIngredientTarget.flat()
//     console.log("See the tags ingredient of the function algo ", tagsIngredient, typeof tagsIngredient)

//     const tagsAppliance = tagsApplianceTarget.flat()
//     console.log("See the tags appliance of the function algo ", tagsAppliance, typeof tagsAppliance)

//     const tagsUstensil = tagsUstensilTarget.flat()
//     console.log("See the tags ustensil of the function algo ", tagsUstensil, typeof tagsUstensil)

//     return items.filter(item =>
//         values.some(value =>
//             item.name.toLowerCase().includes(value.toLowerCase()) ||
//             item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(value.toLowerCase()))
//         ) ||
//         tagsIngredient.some(tag => item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(tag.toLowerCase()))) ||
//         tagsAppliance.some(tag => item.appliance.toLowerCase().includes(tag.toLowerCase())) ||
//         tagsUstensil.some(tag => item.ustensils.some(ust => ust.toLowerCase().includes(tag.toLowerCase())))
//     )
// }

export const searchTerms = {
    text: '',
    ustensils: new Set(),
    appliances: new Set(),
    ingredients: new Set(),
}

export const serviceOfFilterOfRecipes = (items, valuesInputTarget, ...tagsTarget) => {
    // Process the values before the filtering ↴
    const values = [...new Set(valuesInputTarget.split(/[\s+]+/).filter(value => value.length >= 3))]
    console.log("See the value of the function algo ", values)

    // Process the tags before the filtering ↴
    const tags= tagsTarget.flat()
    console.log("See the tags of the function algo ", tags, typeof tags)

    return items.filter(item =>
        values.some(value =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(value.toLowerCase()))
        ) ||
        tags.some(tag => item.ingredients.some(ing => ing.ingredient.toLowerCase().includes(tag.toLowerCase()))) ||
        tags.some(tag => item.appliance.toLowerCase().includes(tag.toLowerCase())) ||
        tags.some(tag => item.ustensils.some(ust => ust.toLowerCase().includes(tag.toLowerCase())))
    )
}