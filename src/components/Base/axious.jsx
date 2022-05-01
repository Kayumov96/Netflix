import axios from "axios";

const bazeURL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default bazeURL;
