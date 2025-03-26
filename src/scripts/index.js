import { utilsDataFetch } from "./utils/utilsDataFetch.js"
import { serviceOfApiManager } from "./services/serviceOfApiManager.js"
import { FactoryClassForTags } from "./class/factoryClassForTags.js"

import { createMessageManagerView } from "./view/createMessageManagerView.js"
import { createCountRecipesView } from "./view/createCountRecipesView.js"
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
    const testTags = new FactoryClassForTags(API_instance._data)

    
    //
    createMessageManagerView("#search", "#msgForUser")
    createCountRecipesView()

};

App();