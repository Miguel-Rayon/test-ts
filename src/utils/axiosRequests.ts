import axios from "axios";

export async function fecthAlbum() {
  try {
    return await axios.get(`https://jsonplaceholder.typicode.com/albums`);
  } catch (e) {
    return [];
  }
}
