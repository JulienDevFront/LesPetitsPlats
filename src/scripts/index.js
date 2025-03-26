import { utilsDataFetch } from "./utils/utilsDataFetch.js"
import { service_ApiManager } from "./services/service_ApiManager.js"
import { FactoryClassForTags } from "./class/factoryClassForTags.js"
import { createMessageManagerView } from "./view/createMessageManagerView.js"
import { createDisplayRecipesCardView } from "./view/createDisplayRecipesCardView.js"
import { createCountRecipesView } from "./view/createCountRecipesView.js"

import { service_researchRegister } from "./services/service_researchRegister.js"
import { service_inputSearchManager } from "./services/service_inputSearchManager.js"
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
    const API_instance = new service_ApiManager(API_import)
    // Init and Update DOM with form inputs with first demo algorithm ↴
    const testTags = new FactoryClassForTags(API_instance.data)
    //
    createMessageManagerView("#searchMain", "#msgForUser")
    createDisplayRecipesCardView("#recipesSection", "#msgRecipesNoFound", API_instance.data)
    createCountRecipesView()

    service_inputSearchManager("#searchMain","#btnSumbitForSearchMain", API_instance.data)

    // console.log("See the module service_researchRegister on the folder index.js", service_researchRegister.researchRegister)

};

App();