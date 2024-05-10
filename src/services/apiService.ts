import axios from "axios";

export const ms_user = axios.create({
  baseURL: "http://localhost:8081",
});

export const ms_album = axios.create({
  baseURL: "http://localhost:8082",
});
