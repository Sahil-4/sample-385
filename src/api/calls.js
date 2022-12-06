import axios from "axios";

const API = axios.create({ baseURL: "https://dev.mentorclan.com" });

export const fetchData = () => API.get("/api/mentors");
