import axios from "axios";
// import { REACT_APP_RAPIDAPI_KEY, REACT_APP_RAPIDAPI_HOST } from "@env";

// console.log(REACT_APP_RAPIDAPI_KEY, REACT_APP_RAPIDAPI_HOST);

const http = axios.create({
  baseURL: "https://hotels4.p.rapidapi.com",
  headers: {
    // "content-type": "application/json",
    "X-RapidAPI-Key": '6da12500f7msh1bb2d50aaca5d7ap1e6249jsnc3c61a925955',
    "X-RapidAPI-Host": 'hotels4.p.rapidapi.com',
  },
});

export default http;