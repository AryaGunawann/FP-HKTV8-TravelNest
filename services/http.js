import axios from "axios";
import { REACT_APP_RAPIDAPI_KEY, REACT_APP_RAPIDAPI_HOST } from "@env";

// console.log(REACT_APP_RAPIDAPI_KEY, REACT_APP_RAPIDAPI_HOST);

const http = axios.create({
  baseURL: "https://hotels4.p.rapidapi.com",
  headers: {
    // "content-type": "application/json",
    "X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": REACT_APP_RAPIDAPI_HOST,
  },
});

export default http;
