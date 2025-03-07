/** JS.DOC ==>
 * -^-^-
 * @module and @function data_fetch
 * -^-^-
 * @description Fetches  data from a given  API path  and returns 
 * it as JSON. Handles errors and logs them if the request fails.
 * -^-^-
 */
export const data_fetch = async (path)  => {
    try {
      const response = await fetch(path)
      if (!response.ok) throw new Error(`Failed to fetch data from ${path} - Status: ${response.status}`)
      return await response.json()
    } catch (err) { console.error("Error fetching API:", err) }
  }