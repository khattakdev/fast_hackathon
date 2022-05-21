import axios from "axios";

let item = "";
if (typeof window !== "undefined") {
  // Perform localStorage action
  item = localStorage.getItem("token");
}
const instance = axios.create({
  baseURL: "http://localhost:8081",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${item}`,
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
