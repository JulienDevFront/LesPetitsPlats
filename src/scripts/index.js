import { data_fetch } from "./helpers/data_fetch.js"
import { API_manager } from "./services/API_manager.js"
import { createSearchListView } from "./view/createSearchListView.js"
import { createCountRecipesView } from "./view/createCountRecipesView.js"
import { createDisplayRecipesCardView } from "./view/createDisplayRecipesCardView.js"
/** JS.DOC ==>
 * - - -
 * @function App
 * - - -
 * @description
 * - - -
 */
const App = async () => {
    // 
    const API_path = "https://juliendevfront.github.io/LesPetitsPlats/public/API_recipes.json"
    const API_import = await data_fetch(`${API_path}`)
    const API_instance = new API_manager(API_import)
    // 
    createSearchListView("#ingredientsList", API_instance.ingredient_items)
    createSearchListView("#appliancesList", API_instance.appliance_items)
    createSearchListView("#ustensilsList", API_instance.ustensil_items)
    createDisplayRecipesCardView("#recipesSection", API_instance._data)
    createCountRecipesView();
};

App();