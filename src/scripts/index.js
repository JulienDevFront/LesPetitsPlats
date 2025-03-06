import { data_fetch } from "./helpers/data_fetch.js"
import { API_manager } from "./services/API_manager.js"

const App = async () => {
    const API_path = "https://juliendevfront.github.io/LesPetitsPlats/public/API_manager.json"
    const API_import = await data_fetch(`${API_path}`)
    const API_instance = new API_manager(API_import)
    const API_data = API_instance.data
    console.log(API_data)
};

App();