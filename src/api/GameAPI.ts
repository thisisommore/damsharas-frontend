import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export function verifyKeyword(keyword: string) {
  return axiosInstance.post("/game/verify", {
    keyword,
  });
}
