import axios from "axios";

const api = axios.create({
  baseURL: "https://dissecadores.herokuapp.com/",
  headers: { Accept: "application/json" },
});

export default api;
