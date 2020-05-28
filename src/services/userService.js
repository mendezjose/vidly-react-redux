import http from "./httpService";
import { apiUrl } from "../config.json";

export function registerUser(user) {
  const data = {
    email: user.username,
    password: user.password,
    name: user.name,
  };
  return http.post(apiUrl + "/users", data);
}
