import axios from "axios";
import app from "./config";

export default {
  getPosts: function () {
    return axios.get("/api/posts/");
  },
  getPost: function (id) {
    return axios.get("/api/posts/" + id);
  },
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id);
  },
  makePost: function (postData) {
    return axios.post("/api/posts/", postData);
  },
  getUsers: function () {
    return axios.get("/api/users/");
  },
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  makeUser: function (postData) {
    return axios.post("/api/users/", postData);
  },
  getMeals: function (query) {
    return axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${app.id}&app_key=${app.key}`
    );
  },
  getSavedMeals: function () {
    return axios.get("/api/meals/");
  },
  postMeal: function (postData) {
    return axios.post("/api/meals/", postData);
  },
  getWorkouts: function () {
    return axios.get("/api/workouts/");
  },
  postWorkouts: function () {
    return axios.post("/api/workouts/");
  },
  getData: function () {
    return axios.get("/api/data/");
  },
  postData: function () {
    return axios.post("/api/data/");
  },
};
