import axios from 'axios';
import app from './config';

export default {
  getPosts: function () {
    return axios.get('/api/posts/');
  },
  getPost: function (id) {
    return axios.get('/api/posts/' + id);
  },
  deletePost: function (id) {
    return axios.delete('/api/posts/' + id);
  },
  makePost: function (postData) {
    return axios.post('/api/posts/', postData);
  },
  getUsers: function () {
    return axios.get('/api/users/');
  },
  getUser: function (id) {
    console.log('/api/users/' + id);
    return axios.get('/api/users/' + id);
  },
  // postUser: function (id, postData) {
  //   return axios.post('/api/users/' + id, postData);
  // },
  putUser: function (id, putData) {
    return axios.put('/api/users/' + id, putData);
  },
  registerUser: function (postData) {
    return axios.post('/api/users/', postData);
  },
  login: function (postData) {
    return axios.post('/login', postData);
  },
  checkLogin: function () {
    return axios.get('/user');
  },
  logout: function () {
    return axios.post('/logout');
  },
  deleteUser: function (id) {
    return axios.delete('/api/users/' + id);
  },
  getMeals: function (query) {
    return axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${app.id}&app_key=${app.key}`
    );
  },
  getMealsByUser: function (userId) {
    return axios.get(`/api/users/${userId}/meals`);
  },
  postMeal: function (id, postData) {
    return axios.post('/api/meals/' + id, postData);
  },
  getWorkouts: function () {
    return axios.get('/api/workouts/');
  },
  getWorkoutsByUser: function (userId) {
    return axios.get(`/api/users/${userId}/workouts`);
  },
  getWorkoutByID: function (id) {
    return axios.get('/api/workouts/' + id);
  },
  postWorkout: function (id, postData) {
    return axios.post('/api/workouts/' + id, postData);
  },
  getData: function () {
    return axios.get('/api/data/');
  },
  postData: function (id, postData) {
    return axios.post('/api/data/' + id, postData);
  },
};
