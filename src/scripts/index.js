import { utilsDataFetch } from "./utils/utilsDataFetch.js"
import { service_ApiManager } from "./services/service_ApiManager.js"
import { createDisplayRecipesCardView } from "./view/createDisplayRecipesCardView.js"
import { createCountRecipesView } from "./view/createCountRecipesView.js"

import { view_toggleDropdown } from "./view/view_toggleDropdown.js"
import { view_toggleMsgInputSearch } from "./view/view_toggleMsgInputSearch.js"

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
    // const testTags = new FactoryClassForTags(API_instance.data)
    //
    view_toggleDropdown("#sectionTagIngredients__header", "#sectionTagIngredients__form")
    view_toggleDropdown("#sectionTagAppliances__header", "#sectionTagAppliances__form")
    view_toggleDropdown("#sectionTagUstensils__header", "#sectionTagUstensils__form")
    
    view_toggleMsgInputSearch("#searchMain", "#msgForUser")

    view_toggleMsgInputSearch("#sectionTagIngredients__form__input", "#sectionTagIngredients__form__msgInput")
    view_toggleMsgInputSearch("#sectionTagAppliances__form__input", "#sectionTagAppliances__form__msgInput")
    view_toggleMsgInputSearch("#sectionTagUstensils__form__input", "#sectionTagUstensils__form__msgInput")


    createDisplayRecipesCardView("#recipesSection", "#msgRecipesNoFound", API_instance.data)
    createCountRecipesView()
    //
    service_inputSearchManager("#searchMain","#btnSumbitForSearchMain", API_instance.data)
};

App();