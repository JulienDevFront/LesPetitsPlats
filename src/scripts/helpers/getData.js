export const getData = async (path)  => {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error("Error, check promise for recipes API " + response.status);
      const data = await response.json(); 
      return Array.from(data);
    } catch (err) { console.error("Error fetching API:", err) };
  }