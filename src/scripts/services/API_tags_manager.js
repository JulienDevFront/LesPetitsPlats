/** JS.DOC ==>
 * -^-^-
 * @module and @function tag_ingredient
 * @module and @function tag_appliance
 * @module and @function tag_ustensil
 * -^-^-
 * @description
 * -^-^-
 */
// Tag manager for ingredient ↴
export const tag_ingredient = (itemsTarget)  => {
  const items = [...new Set(itemsTarget.flatMap(item => item.ingredients.map(item => item.ingredient)))]
    .sort((a,b) => a.toLowerCase().localeCompare(b))
  // console.log("See the items of the 'ingredients' collection : ", items)
  return items
}
// Tag manager for appliance ↴
export const tag_appliance = (itemsTarget) => {
  const items = [...new Set(itemsTarget.map(item => item.appliance))]
    .sort((a,b) => a.toLowerCase().localeCompare(b))
  // console.log("See the items of the 'appliances' collection : ", items) 
  return items
}
// Tag manager for ustensil ↴
export const tag_ustensil = (itemsTarget) => {
  const items = [...new Set(itemsTarget.flatMap(item => item.ustensils))]
    .sort((a,b) => a.toLowerCase().localeCompare(b))
  // console.log("See the items of the 'ustensils' collection : ", items)
  return items
}