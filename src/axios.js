import axios from "axios";

export const users = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users/",
});

export const weather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export const products = axios.create({
  baseURL: "https://fakestoreapi.com/products/",
});

export const movies = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const jobs = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts/",
});
