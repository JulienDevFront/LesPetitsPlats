import { ConstructorClassForTags } from "./constructorClassForTags"
/** JS.DOC
 * -^-^-
 * @module and @function FactoryClassForTags
 * -^-^-
 * @description
 * -^-^-
 */
export const FactoryClassForTags = (itemsTarget) => {
        
        const items = Array.from(itemsTarget)
        if(!Array.isArray(items) || items.length === 0)return console.error("No items in ConstructorClassForTags")
        // console.log(items)
        
        const containerTagsIngredients = document.querySelector("#ingredientsList")
        containerTagsIngredients.innerHTML = ""
        const ingredients = [...new Set(items
            .flatMap(i => i.ingredients.map(i => i.ingredient.toLowerCase())))]
            .sort((a,b) => a.localeCompare(b))

        ingredients.forEach(i => containerTagsIngredients.append(ConstructorClassForTags.createSearchListView(i)))
        
        console.log("See the items of the 'ingredients' collection : ", ingredients)
        
        const containerTagsAppliances = document.querySelector("#appliancesList")
        containerTagsAppliances.innerHTML = ""
        const appliances = [...new Set(items.map(i => i.appliance.toLowerCase()))].sort((a,b) => a.localeCompare(b))

        appliances.forEach(i => containerTagsAppliances.append(ConstructorClassForTags.createSearchListView(i)))
        // console.log("See the items of the 'appliances' collection : ", appliances)
        
        const containerTagsUstensils = document.querySelector("#ustensilsList")
        containerTagsUstensils.innerHTML = ""
        const ustensils = [...new Set(items.flatMap(i => i.ustensils.map(i => i.toLowerCase())))].sort((a,b) => a.localeCompare(b))

        ustensils.forEach(i => containerTagsUstensils.append(ConstructorClassForTags.createSearchListView(i)))
        // console.log("See the items of the 'ustensils' collection : ", ustensils)
}
