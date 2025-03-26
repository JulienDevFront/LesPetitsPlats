/** JS.DOC ==>
 * -^-^-
 * @module and @class service_ApiManager
 * -^-^-
 * @description  Singleton Pattern class that manages recipe data. It ensures only one 
 * instance is  created and allows access to a sorted,  unique list  of each category.
 * -^-^-
 */
export class service_ApiManager {
  constructor(data) {
    // Control block and logic of singleton pattern ↴
    if (service_ApiManager.exist) return service_ApiManager.instance
    if (!Array.isArray(data)) throw new Error("Data is not an array ! The Singleton_API expects an array.")
    // Variables and tools for the logic of singletion pattern ↴
    this._data = data
    service_ApiManager.exist = true
    service_ApiManager.instance = this
    console.log("Recipes API is 'INIT'!")
  }

  get data() {
    // console.log("See the items of the 'API' : ", this._data)
    return this._data
  }

  get ingredient_items() {
    const items = [...new Set(this._data.flatMap(item => item.ingredients.map(item => item.ingredient)))]
      .sort((a,b) => a.toLowerCase().localeCompare(b))
    // console.log("See the items of the 'ingredients' collection : ", items)
    return items
  }

  get appliance_items(){
    const items = [...new Set(this._data.map(item => item.appliance))]
      .sort((a,b) => a.toLowerCase().localeCompare(b))
    // console.log("See the items of the 'appliances' collection : ", items) 
    return items
  }

  get ustensil_items(){
    const items = [...new Set(this._data.flatMap(item => item.ustensils))]
      .sort((a,b) => a.toLowerCase().localeCompare(b))
    // console.log("See the items of the 'ustensils' collection : ", items)
    return items
  }
}
