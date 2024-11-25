//api.js
import axios from "axios";
const API_URL = "http://localhost:3000/api"; //
const api = axios.create({
  baseURL: API_URL,
});
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
// Auth endpoints
export const login = (credentials) => api.post("/auth/login", credentials);
export const logOut = () => api.post("/auth/logout");
export const register = (userData) => api.post("/auth/register", userData);
export const updateUser = (id, userData) => api.put(`/auth/${id}`, userData);
// Todo endpoints
export const getTodos = () => api.get("/todos");
export const addTodo = (todo) => api.post("/todos", todo);
export const updateTodo = (id, updatedTodo) =>
  api.put(`/todos/${id}`, updatedTodo);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);
