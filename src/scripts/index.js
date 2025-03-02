import { getData } from "./helpers/getData.js";
import { API_repices } from "./services/API_repices.js";
import { recipesCountSection } from "./view/recipesCountView.js";
import { ConstructorRecipeCard } from "./models/contructorRecipeCard.js";

const App = async () => {
    const API_repices_path = "https://juliendevfront.github.io/LesPetitsPlats/public/API_recipes.json";
    const API_repices_import = await getData(`${API_repices_path}`);
    const API_repices_instance = new API_repices(API_repices_import);
    const API_repices_data = API_repices_instance.data;
    console.log(API_repices_data);

    const recipesContainer = document.querySelector("#recipesSection");

    if (API_repices_data && API_repices_data.length > 0) {
        API_repices_data.forEach(recipe => {
            const recipeCard = new ConstructorRecipeCard(recipe);
            recipeCard.createRecipeCard();
        });
    } else {
        recipesContainer.innerHTML = "<p>Aucune recette trouvée.</p>";
    }

    recipesCountSection();
};

App();
