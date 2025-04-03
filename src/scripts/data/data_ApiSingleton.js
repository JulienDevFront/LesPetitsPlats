/** JS.DOC ==>
 * -^-^-
 * @module and @class data_ApiSingleton
 * -^-^-
 * @description Singleton Pattern class that manages API 
 * data, ensuring  a single  instance for global access.
 * -^-^-
 */
  export class data_ApiSingleton {
    constructor(initialData) {
      // Control block and logic of singleton pattern :
      if (data_ApiSingleton.instance) return data_ApiSingleton.instance;
      if (!Array.isArray(initialData)) throw new Error("@data_ApiSingleton - Data is not an array! data_ApiSingleton expects an array.");
  
       // Tools of the singleton :
      this._data = initialData;
      data_ApiSingleton.instance = this;
      // console.log("@data_ApiSingleton - Singleton of recipes initialized!", "\nData of recipes:", this._data);
    };
  
    get data() {
      // Get the datas :
      return this._data;
    };

    static async import(path) {
      // Import the data with the method fetch :
      try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to fetch data from ${path} - Status: ${response.status}`);
        return await response.json();
      } catch (err) { console.error("Error fetching API:", err); };
    };
};
  
