import { ConstructorClassForTags } from "./constructorClassForTags"
/** JS.DOC
 * -^-^-
 * @module and @function FactoryClassForTags
 * -^-^-
 * @description
 * -^-^-
 */
export class FactoryClassForTags {
    constructor(items) {
        //
        if(!Array.isArray(items) || items.length === 0)return console.error("No items in ConstructorClassForTags")
        //
        const containerTagsIngredients = document.querySelector("#ingredientsList")
        this._ingredients = [...new Set(items.flatMap(i => i.ingredients.map(i => i.ingredient.toLowerCase())))].sort((a,b) => a.localeCompare(b))
        if(this._ingredients.length > 0)this._ingredients.forEach(i => containerTagsIngredients.append(ConstructorClassForTags.createSearchListView(i)))
        console.log("See the items of the 'ingredients' collection : ", this._ingredients)
        //
        const containerTagsAppliances = document.querySelector("#appliancesList")
        this._appliances = [...new Set(items.map(i => i.appliance.toLowerCase()))].sort((a,b) => a.localeCompare(b))
        if(this._appliances.length > 0)this._appliances.forEach(i => containerTagsAppliances.append(ConstructorClassForTags.createSearchListView(i)))
        console.log("See the items of the 'appliances' collection : ", this._appliances)
        //
        const containerTagsUstensils = document.querySelector("#ustensilsList")
        this._ustensils = [...new Set(items.flatMap(i => i.ustensils.map(i => i.toLowerCase())))].sort((a,b) => a.localeCompare(b))
        if(this._ustensils.length > 0)this._ustensils.forEach(i => containerTagsUstensils.append(ConstructorClassForTags.createSearchListView(i)))
        console.log("See the items of the 'ustensils' collection : ", this._ustensils)
    }
}