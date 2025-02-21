export class API_instance {
  constructor(data) {
    if (API_instance.exist) return API_instance.instance;
    if (!Array.isArray(data)) throw new Error("Data is not an array ! The Singleton_API expects an array.");
    this._data = data;
    API_instance.exist = true
    API_instance.instance = this;
  }

  static async import(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error("Error, check promise for recipes API " + response.status);
      const data = await response.json(); 
      return Array.from(data);
    } catch (err) { console.error("Error fetching API:", err) };
  }

  get data() {
    return this._data;
  }
}
