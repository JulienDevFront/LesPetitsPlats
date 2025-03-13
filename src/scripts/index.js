import { data_fetch } from "./helpers/data_fetch.js"
import { API_manager } from "./services/API_manager.js"
import { createCardsInDomView } from "./view/createCardsInDomView.js"
import { serviceOfSelectAndDisplayOfTags } from "./services/serviceOfSelectAndDisplayOfTags.js"
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
    // Init and Update DOM with form inputs with first demo algorithm ↴
    createCardsInDomView("#search","#searchMain", API_instance._data)
    // Update DOM with the select tags ↴
    // serviceOfSelectAndDisplayOfTags("#ingredientsList")
    // serviceOfSelectAndDisplayOfTags("#appliancesList")
    // serviceOfSelectAndDisplayOfTags("#ustensilsList")
};

App();