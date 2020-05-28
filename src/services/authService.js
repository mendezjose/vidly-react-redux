import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/auth";
const jwtKey = "token";

http.setJwt(getJwt());

export async function login(username, password) {
  const { data: jwt } = await http.post(apiEndpoint, {
    email: username,
    password,
  });
  localStorage.setItem(jwtKey, jwt);
}

export async function loginWithJwt(jwt) {
  localStorage.setItem(jwtKey, jwt);
}

export function getUser() {
  try {
    const jwt = localStorage.getItem(jwtKey);
    const user = jwtDecode(jwt);
    return user;
  } catch (error) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(jwtKey);
}

export function getJwt() {
  return localStorage.getItem(jwtKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getUser,
  getJwt,
};
