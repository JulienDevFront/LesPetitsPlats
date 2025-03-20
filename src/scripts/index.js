import { utilsDataFetch } from "./utils/utilsDataFetch.js"
import { serviceOfApiManager } from "./services/serviceOfApiManager.js"
import { createCardsInDomView } from "./view/createCardsInDomView.js"
import { getTagsChecked } from "./services/serviceOfTagsManager.js";
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
    const API_import = await utilsDataFetch(`${API_path}`)
    const API_instance = new serviceOfApiManager(API_import)
    // Init and Update DOM with form inputs with first demo algorithm ↴
    createCardsInDomView("#search","#searchMain", API_instance._data)

    getTagsChecked("#containerTags")
};

App();