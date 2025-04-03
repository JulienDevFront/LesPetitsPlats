import { data_ApiSingleton } from "./data/data_ApiSingleton.js";
import { view_displayElements } from "./view/view_displayElements.js";
import { view_toggleDropdown } from "./view/view_toggleDropdown.js";
import { view_toggleMessage } from "./view/view_toggleMessage.js";




// // import { service_researchRegister } from "./services/service_researchRegister.js"
// import { service_ApiManager } from "./data/data_ApiSingleton.js"
// import { service_inputSearchManager } from "./services/service_inputSearchManager.js"


// import { service_tagResearchManager } from "./services/service_tagResearchManager.js"


//     // test test test test test test 
// import { service_researchRegister } from "./data/data_RegisterSingleton.js"

/** JS.DOC ==>
 * -^-^-
 * @function App
 * -^-^-
 * @description
 * -^-^-
 */
const App = async () => {
    // Create a singleton instance for API :
    const apiSingleton = new data_ApiSingleton(await data_ApiSingleton.import("https://juliendevfront.github.io/LesPetitsPlats/public/API_recipes.json")).data;
    
    // Initialize UI elements :
    view_displayElements("#recipesSection", "#msgRecipesNoFound", apiSingleton);
        // -^-^-
    view_toggleDropdown("#sectionTagIngredients__header", "#sectionTagIngredients__form");
    view_toggleDropdown("#sectionTagAppliances__header", "#sectionTagAppliances__form");
    view_toggleDropdown("#sectionTagUstensils__header", "#sectionTagUstensils__form");
        // -^-^-
    view_toggleMessage("#searchBar__input", "#searchBar__msgInput");
    view_toggleMessage("#sectionTagIngredients__form__input", "#sectionTagIngredients__form__msgInput");
    view_toggleMessage("#sectionTagAppliances__form__input", "#sectionTagAppliances__form__msgInput");
    view_toggleMessage("#sectionTagUstensils__form__input", "#sectionTagUstensils__form__msgInput");
    

    // //
    // service_inputSearchManager("#searchBar__input","#btnSumbitForSearchMain", API_instance.data);
    // service_tagResearchManager("#ingredientsList", "#sectionTagIngredients__form", "#sectionTagIngredients__form__input");
    // service_tagResearchManager("#appliancesList", "#sectionTagAppliances__form", "#sectionTagAppliances__form__input");
    // service_tagResearchManager("#ustensilsList", "#sectionTagUstensils__form", "#sectionTagUstensils__form__input");



    // // test test test test test test 
    // service_researchRegister.ingredients = API_instance.ingredient_items
    // console.log("Here : ",service_researchRegister.ingredients)
};

App();