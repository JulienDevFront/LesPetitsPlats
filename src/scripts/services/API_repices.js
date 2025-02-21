export class API_repices {
  constructor(data) {
    if (API_repices.exist) return API_repices.instance;
    if (!Array.isArray(data)) throw new Error("Data is not an array ! The Singleton_API expects an array.");
    this._data = data;
    API_repices.exist = true
    API_repices.instance = this;
  }

  get data() {
    return this._data;
  }
}
