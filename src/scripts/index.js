import { promise } from "./helpers/promise.js";
import { API_repices } from "./services/API_repices.js";
//
import { recipesCountSection } from "./view/recipesCountView.js";



const App = async () => {
    const API_repices_path = "https://juliendevfront.github.io/LesPetitsPlats/public/API_recipes.json";
    const API_repices_import = await promise(`${API_repices_path}`);
    const API_repices_instance = new API_repices(API_repices_import);
    console.log(API_repices_instance);


    recipesCountSection();

};

App(); 