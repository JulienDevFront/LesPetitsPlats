import { data_fetch } from "./helpers/data_fetch.js"
import { API_manager } from "./services/API_manager.js"
import { createSearchListView } from "./view/createSearchListView.js"
import { createCountRecipesView } from "./view/createCountRecipesView.js"
import { createDisplayRecipesCardView } from "./view/createDisplayRecipesCardView.js"
import {ALGO_method_filter } from "./services/ALGO_method_filter.js"
/** JS.DOC ==>
 * -^-^-
 * @function App
 * -^-^-
 * @description
 * -^-^-
 */
const App = async () => {
    // Init the datas of App ↴
    const API_path = "https://juliendevfront.github.io/LesPetitsPlats/public/API_recipes.json"
    const API_import = await data_fetch(`${API_path}`)
    const API_instance = new API_manager(API_import)
    // Init the of DOM with the datas import ↴
    createSearchListView("#ingredientsList", API_instance.ingredient_items)
    createSearchListView("#appliancesList", API_instance.appliance_items)
    createSearchListView("#ustensilsList", API_instance.ustensil_items)
    createDisplayRecipesCardView("#recipesSection", API_instance._data)
    createCountRecipesView();
    // Update DOM with form inputs with first demo algorithm ↴
    ALGO_method_filter("#search","#searchMain", API_instance)
    // Update DOM with form inputs with second demo algorithm ↴
};

App();