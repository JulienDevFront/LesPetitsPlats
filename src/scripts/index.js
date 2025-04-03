import { data_ApiSingleton } from "./data/data_ApiSingleton.js";
import { data_RegisterSingleton } from "./data/data_RegisterSingleton.js";
// -^-^-
import { view_displayElements } from "./view/view_displayElements.js";
import { view_toggleDropdown } from "./view/view_toggleDropdown.js";
import { view_toggleMessage } from "./view/view_toggleMessage.js";
// -^-^-
import { service_manageTagSelect } from "./services/service_manageTagSelect.js";
import { service_manageTagSearch } from "./services/service_manageTagSearch.js";
import { service_manageInputSearch } from "./services/service_manageInputSearch.js";
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
    
    // Manage of UI elements with the values :
    service_manageTagSelect(data_RegisterSingleton, "ingredients", apiSingleton);
    service_manageTagSelect(data_RegisterSingleton, "appliances", apiSingleton);
    service_manageTagSelect(data_RegisterSingleton, "ustensils", apiSingleton);
        // -^-^-
    service_manageTagSearch("#ingredientsList", "#sectionTagIngredients__form", "#sectionTagIngredients__form__input", apiSingleton);
    service_manageTagSearch("#appliancesList", "#sectionTagAppliances__form", "#sectionTagAppliances__form__input", apiSingleton);
    service_manageTagSearch("#ustensilsList", "#sectionTagUstensils__form", "#sectionTagUstensils__form__input", apiSingleton);
        // -^-^-
    service_manageInputSearch("#searchBar__input", "#btnSumbitForSearchMain", apiSingleton);
};

App();