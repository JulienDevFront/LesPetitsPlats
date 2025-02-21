import { API_instance } from "./services/API_instance.js";

const App = async () => {
    const API_path = "https://juliendevfront.github.io/LesPetitsPlats/public/API_recipes.json";
    const API_import = await API_instance.import(`${API_path}`);
    const API = new API_instance(API_import).data;
    console.log(API);
};

App();